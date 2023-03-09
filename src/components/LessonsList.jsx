import React, { useState, useEffect, Component } from "react";
import "../index.scss";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { PlayChess } from "../components/PlayChess";
import { Lesson1_1 } from "../pages/lessons/Lesson1_1";
import Joyride from "react-joyride";
import { Route, Routes, Link } from "react-router-dom";

const LessonsList = () => {
    const [toggleFirst, setToggleFirst] = useState(false);
    const [toggleSecond, setToggleSecond] = useState(false);
    return (
        <ul className="flex gap-4 flex-col">
            <ul>
                Rozdzial 1{" "}
                <li>
                    <Link to="/Lesson1_1"> Lekcja 1</Link>
                </li>
            </ul>
            <ul>
                Rozdzial 2<li>Lekcja 1</li>
            </ul>
        </ul>
    );
};

export { LessonsList };
