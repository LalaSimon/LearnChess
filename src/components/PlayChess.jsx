import React, { useState, Component } from "react";
import "../index.scss";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";

const PlayChess = ({ boardposition }) => {
    // You have to pass FEN in string to a props boardposition. If you dont passs the boardposition it will get starting position as default
    const [game, setGame] = useState(
        boardposition ? new Chess(boardposition) : new Chess()
    );
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

    return (
        <div className="flex flex-col justify-center items-center pt-96">
            <Chessboard
                boardWidth={660}
                position={game.fen()} // Dont touch it!!! If you want a specific position, pass it to props in FEN
                onPieceDrop={onDrop}
            />
        </div>
    );
};

export { PlayChess };
