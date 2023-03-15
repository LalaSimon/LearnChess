import React, { useState, useEffect } from "react";
import { useWindowSize } from "react-use";
import "../index.scss";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";

const OpenBoard = ({ boardposition, boardOrientation }) => {
    const [game, setGame] = useState(
        boardposition ? new Chess(boardposition) : new Chess()
    );
    const [position, setPosition] = useState("white");
    // sprawdza czy doszlo do zmiany pozycji na szachownicy
    useEffect(() => {
        setGame(new Chess(boardposition));
    }, [boardposition]);

    const makeAMove = (move) => {
        const gameCopy = { ...game };
        const result = gameCopy.move(move);
        setGame(gameCopy);
        return result; // null if the move was illegal, the move object if the move was legal
    };

    const onDrop = (sourceSquare, targetSquare) => {
        const move = makeAMove({
            from: sourceSquare,
            to: targetSquare,
            promotion: "q", // always promote to a queen for example simplicity
        });
    };
    const flipBoard = () => {
        setPosition(position === "white" ? "black" : "white");
    };
    const undoMove = () => {
        game.undo();
        setGame(new Chess(game.fen()));
    };
    const checkWidth = () => {
        const { width } = useWindowSize();
        let value = 0;

        if (width < 640) {
            value = 350;
        } else if (width < 768) {
            value = 400;
        } else if (width >= 768 && width < 1024) {
            value = 450;
        } else {
            value = 550;
        }

        return value;
    };
    return (
        <>
            <p className="text-2xl text-center mx-96 mt-14 border-b-2 border-solid border-yellow-900 p-2">
                This is OpenBoard - An chessboard that you can play a game of
                chess if you dont have physical one in your home. Bring your
                opponent in front of screen and play a game. With flip button
                you can flip checkboard. With undo button you are allowed to
                undo one move back,
            </p>
            <div className="flex justify-center items-center mt-12">
                <div className="chessboard flex flex-col mx-44 justify-center items-center shadow-lg shadow-yellow-900">
                    <Chessboard
                        boardWidth={checkWidth()}
                        position={game.fen()} // Dont touch it!!! If you want a specific position, pass it to props in FEN
                        onPieceDrop={onDrop}
                        boardOrientation={position}
                        customDarkSquareStyle={{ backgroundColor: "#713f12" }}
                        customLightSquareStyle={{ backgroundColor: "#A57548" }}
                    />
                </div>
                <div className="flex flex-col gap-6">
                    <button
                        className="bg-yellow-900 opacity-50 text-white p-4 flex justify-center text-center text-xl focus:outline-none duration-300 rounded-xl hover:bg-yellow-700 hover:opacity-100 scale-100 hover:scale-125 shadow-lg shadow-yellow-900 active:shadow-inner active:shadow-gray-700"
                        onClick={flipBoard}
                    >
                        Flip the board
                    </button>
                    <button
                        className="bg-yellow-900 opacity-50 text-white p-4 flex justify-center text-center text-xl focus:outline-none duration-300 rounded-xl hover:bg-yellow-700 hover:opacity-100 scale-100 hover:scale-125 shadow-lg shadow-yellow-900 active:shadow-inner active:shadow-gray-700"
                        onClick={undoMove}
                    >
                        Undo move
                    </button>
                </div>
            </div>
        </>
    );
};

export { OpenBoard };
