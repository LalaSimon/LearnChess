import React, { useState, useEffect } from "react";
import "../index.scss";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { useWindowSize } from "react-use";

const PlayChessVSRandom = ({ boardposition, boardOrientation, user }) => {
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
        if (result === null) {
            return false;
        } else {
            if (gameCopy.turn() !== user) {
                setTimeout(makeRandomMove, 200);
            }
            return true;
        }
    };

    function makeRandomMove() {
        const possibleMoves = game.moves();
        if (game.game_over() || game.in_draw() || possibleMoves.length === 0)
            return; // exit if the game is over
        const randomIndex = Math.floor(Math.random() * possibleMoves.length);
        makeAMove(possibleMoves[randomIndex]);
    }

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
        <div className="flex flex-col justify-center items-center border-2 border-solid border-black-500">
            <Chessboard
                id="chessboard"
                boardWidth={checkWidth()}
                position={game.fen()} // Dont touch it!!! If you want a specific position, pass it to props in FEN
                onPieceDrop={onDrop}
                boardOrientation={boardOrientation}
                customDarkSquareStyle={{ backgroundColor: "#FBC403" }}
                customLightSquareStyle={{ backgroundColor: "#FFF" }}
            />
        </div>
    );
};

export { PlayChessVSRandom };
