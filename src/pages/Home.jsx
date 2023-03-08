import React, { useState, useEffect, Component, Route, Routes } from "react";
import "../index.scss";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { PlayChess } from "../components/PlayChess";
import { Lessons } from "../components/Lessons";

const Home = () => {
    //tutaj dajesz linki do funkcji changePosition("string") z lekcjami, ktore beda ci renderowaly nowe pozycje
    const [position, setPosition] = useState();
    const changePosition = (boardposition) => {
        setPosition(boardposition);
    };
    // definiujesz czy chcesz miec pozycje czarnymi czy bialymi ("black/white")
    const [boardOrientantion, setBoardOrientantion] = useState();
    const changeOrentantion = (boardOrientation) => {
        setBoardOrientantion(boardOrientation);
    };
    const [toggleFirst, setToggleFirst] = useState(false);
    const [toggleSecond, setToggleSecond] = useState(false);

    return (
        <>
            <div className="flex gap-44 justify-center items-center mt-96">
                <ul className="flex gap-4 flex-col">
                    <div
                        onClick={() => setToggleFirst(!toggleFirst)}
                        className="cursor-pointer text-4xl"
                    >
                        Rozdzial 1
                    </div>
                    {toggleFirst && (
                        <ul>
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
                            <li
                                className=" cursor-pointer"
                                onClick={() => {
                                    changePosition(
                                        "2rnr2k/ppq1p1bp/8/6Bp/3pN3/1BP5/P3QPP1/4R1K1 w - - 0 22"
                                    );
                                    changeOrentantion("white");
                                }}
                            >
                                Lekcja 3
                            </li>
                        </ul>
                    )}
                    <div
                        onClick={() => setToggleSecond(!toggleSecond)}
                        className="cursor-pointer text-4xl"
                    >
                        Rozdzial 2
                    </div>
                    {toggleSecond && (
                        <ul>
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
                            <li
                                className=" cursor-pointer"
                                onClick={() => {
                                    changePosition(
                                        "2rnr2k/ppq1p1bp/8/6Bp/3pN3/1BP5/P3QPP1/4R1K1 w - - 0 22"
                                    );
                                    changeOrentantion("white");
                                }}
                            >
                                Lekcja 3
                            </li>
                        </ul>
                    )}
                </ul>
                <PlayChess
                    boardposition={position}
                    boardOrientation={boardOrientantion}
                ></PlayChess>
                <div>LOGIN</div>
            </div>
        </>
    );
    // pass props called boardposition = {"STRING"} in FEN format to load position you want
};

export { Home };
