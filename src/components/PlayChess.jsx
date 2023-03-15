import React, { useState, useEffect } from "react";
import "../index.scss";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
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
            value = 400;
        } else if (width >= 768 && width < 1024) {
            value = 450;
        } else {
            value = 550;
        }

        return value;
    };

    return (
        <div className="chessboard flex flex-col mx-44 justify-center items-center shadow-lg shadow-yellow-900">
            <Chessboard
                boardWidth={checkWidth()}
                position={game.fen()} // Dont touch it!!! If you want a specific position, pass it to props in FEN
                onPieceDrop={onDrop}
                boardOrientation={boardOrientation}
                customDarkSquareStyle={{ backgroundColor: "#713f12" }}
                customLightSquareStyle={{ backgroundColor: "#A57548" }}
            />
        </div>
    );
};

export { PlayChess };
