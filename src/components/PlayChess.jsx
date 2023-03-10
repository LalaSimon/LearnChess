import React, { useState, Component, useEffect } from "react";
import "../index.scss";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { Lesson1_1 } from "../pages/lessons/Lesson1_1";
import { Home } from "../pages/home";
import { useWindowSize } from "react-use";

const PlayChess = ({ boardposition, boardOrientation }) => {
    // You have to pass FEN in string to a props boardposition. If you dont passs the boardposition it will get starting position as default
    const [game, setGame] = useState(
        boardposition ? new Chess(boardposition) : new Chess()
    );
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
            value = 450;
        } else if (width >= 768 && width < 1024) {
            value = 550;
        } else if (width >= 1024 && width < 1280) {
            value = 650;
        } else {
            value = 750;
        }

        return value;
    };

    return (
        <div className="flex flex-col justify-center items-center border-2 border-solid border-black-500">
            <Chessboard
                id="chessboard"
                boardWidth={checkWidth()}
                position={game.fen()} // Dont touch it!!! If you want a specific position, pass it to props in FEN
                onPieceDrop={onDrop}
                boardOrientation={boardOrientation}
                customDarkSquareStyle={{ backgroundColor: "#60a5fa" }}
                customLightSquareStyle={{ backgroundColor: "#ffffff" }}
            />
        </div>
    );
};

export { PlayChess };
