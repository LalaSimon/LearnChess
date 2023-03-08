import React, { useState, Component, useEffect } from "react";
import "../index.scss";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { Home } from "../pages/home";
import { PlayChess } from "../components/PlayChess";

//for later

const Lessons = () => {
    const [position, setPosition] = useState();
    const changePosition = (boardposition) => {
        setPosition(boardposition);
    };
    // definiujesz czy chcesz miec pozycje czarnymi czy bialymi ("black/white")
    const [boardOrientantion, setBoardOrientantion] = useState();
    const changeOrentantion = (boardOrientation) => {
        setBoardOrientantion(boardOrientation);
    };
    return (
        <ul className="flex gap-10 flex-col">
            <li
                className=" cursor-pointer"
                onClick={() => {
                    changePosition(
                        "1r2kr2/ppp1q3/n1b1p3/4P1pQ/7p/P4N1P/1P2BPP1/R4RK1 b - - 2 23"
                    );
                    changeOrentantion("white");
                }}
            >
                Lekcja 1
            </li>
            <li
                className=" cursor-pointer"
                onClick={() => {
                    changePosition(
                        "1r2k1r1/ppp5/3qpp2/3b2p1/1n1PP2p/5N1P/PP2BPP1/RQ3RK1 b - - 2 18"
                    );
                    changeOrentantion("black");
                }}
            >
                Lekcja 2
            </li>
            <li className=" cursor-pointer">Lekcja 3</li>
        </ul>
    );
};

export { Lessons };
