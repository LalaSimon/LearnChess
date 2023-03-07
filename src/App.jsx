import React, { useState, Component } from "react";
import reactLogo from "./assets/react.svg";
import "./index.scss";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";

export default function PlayChess({ position }) {
    console.log(position || "dupa");
    // musisz przekazac do propsa FEN'a z ktorym chcesz zaladowac pozycje, fen ogarnia kto na ruchu.
    const [game, setGame] = useState(new Chess());

    function makeAMove(move) {
        const gameCopy = { ...game };
        const result = gameCopy.move(move);
        setGame(gameCopy);
        return result; // null if the move was illegal, the move object if the move was legal
    }

    function onDrop(sourceSquare, targetSquare) {
        const move = makeAMove({
            from: sourceSquare,
            to: targetSquare,
            promotion: "q", // always promote to a queen for example simplicity
        });
    }

    return (
        <div className="flex flex-col justify-center items-center mt-96">
            <Chessboard
                boardWidth={660}
                position={game.fen()} // tutaj zostawiasz position nie ruszone
                onPieceDrop={onDrop}
            />
        </div>
    );
}

export function App() {
    return (
        <PlayChess
            position={
                "1r6/pppkqr2/n1b1p3/4P1NQ/7p/P6P/1P2BPP1/R2R2K1 b - - 2 25"
            }
        />
    );
}

//znajdz ustawienie pozycji
