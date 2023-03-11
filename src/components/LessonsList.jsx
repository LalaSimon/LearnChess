import React, { useState, useEffect, Component } from "react";
import "../index.scss";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { PlayChess } from "../components/PlayChess";
import { Lesson1_1 } from "../pages/lessons/Lesson1_1";
import { Lesson1_2 } from "../pages/lessons/Lesson1_2";
import Joyride from "react-joyride";
import { Route, Routes, Link } from "react-router-dom";
import { DoneButton } from "./DoneButton";
import useLocalStorageState from "use-local-storage-state";

const LessonsList = () => {
    const [toggleFirst, setToggleFirst] = useState(false);

    const [toggleSecond, setToggleSecond] = useState(false);

    const [green1_1Color, greenSetColor1_1] = useLocalStorageState(
        "green1_1",
        0
    );

    useEffect(() => {
        const greenColor1_1 = parseInt(localStorage.getItem("green1_1")) || 0;
        greenSetColor1_1(green1_1Color);
    }, [greenSetColor1_1]);
    return (
        <>
            <ul className="flex gap-4 flex-col">
                <div
                    className="cursor-pointer"
                    onClick={() => setToggleFirst(!toggleFirst)}
                >
                    Rozdzial 1
                </div>

                {toggleFirst && (
                    <ul>
                        <li
                            className={
                                green1_1Color > 0 ? "bg-green-500" : "white"
                            }
                        >
                            {" "}
                            <Link to="/Lesson1_1"> Lekcja 1</Link>
                        </li>
                        <li>
                            <Link to="/Lesson1_2"> Lekcja 2</Link>
                        </li>
                    </ul>
                )}

                <div
                    className="cursor-pointer"
                    onClick={() => setToggleSecond(!toggleSecond)}
                >
                    Rozdzial 2
                </div>

                {toggleSecond && (
                    <ul>
                        <li>
                            <Link> Lekcja 1</Link>
                        </li>
                        <li>
                            <Link> Lekcja 2</Link>
                        </li>
                    </ul>
                )}
            </ul>
        </>
    );
};

export { LessonsList };
