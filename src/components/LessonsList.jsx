import React, { useState, useEffect, Component } from "react";
import "../index.scss";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { PlayChess } from "../components/PlayChess";
import { Lesson1_1 } from "../pages/lessons/Lesson1_1";
import { Lesson1_2 } from "../pages/lessons/Lesson1_2";
import Joyride from "react-joyride";
import { Route, Routes, Link } from "react-router-dom";

const LessonsList = () => {
    const [toggleFirst, setToggleFirst] = useState(false);
    const [toggleSecond, setToggleSecond] = useState(false);
    return (
        <ul className="flex gap-4 flex-col">
            <div
                className="cursor-pointer"
                onClick={() => setToggleFirst(!toggleFirst)}
            >
                Rozdzial 1
            </div>

            {toggleFirst && (
                <ul>
                    <li>
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
                        <Link to="/Lesson1_1"> Lekcja 1</Link>
                    </li>
                    <li>
                        <Link to="/Lesson1_2"> Lekcja 2</Link>
                    </li>
                </ul>
            )}
        </ul>
    );
};

export { LessonsList };
