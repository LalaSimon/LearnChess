import React, { useState, useEffect, Component } from "react";
import { Home } from "../home";
import Joyride from "react-joyride";
import "../../index.scss";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { PlayChess } from "../../components/PlayChess";
import { Route, Routes, Link } from "react-router-dom";
import { LessonsList } from "../../components/LessonsList";
import { Tour } from "../tours/Tour1_1";

const Lesson1_1 = () => {
    const [position, setPosition] = useState();
    const changePosition = (boardposition) => {
        setPosition(boardposition);
    };
    // definiujesz czy chcesz miec pozycje czarnymi czy bialymi ("black/white")
    const [boardOrientantion, setBoardOrientantion] = useState();
    const changeOrentantion = (boardOrientation) => {
        setBoardOrientantion(boardOrientation);
    };

    const [isDone, setIsDone] = useState(false);
    const handleClick = () => {
        if (isDone === false) {
            setIsDone(true);
            localStorage.setItem(
                "progress",
                +localStorage.getItem("progress") + 10
            );
        } else {
            setIsDone(false);
            localStorage.setItem(
                "progress",
                +localStorage.getItem("progress") - 10
            );
        }
    };
    return (
        <>
            <Tour></Tour>
            <div className="flex gap-44 justify-center items-center mt-32">
                <div className="szachownica flex flex-col">
                    <PlayChess
                        boardposition={
                            "2rnr2k/ppq1p1bp/8/6Bp/3pN3/1BP5/P3QPP1/4R1K1 w - - 0 22"
                        }
                        boardOrientation={"white"}
                    ></PlayChess>
                    <button
                        onClick={handleClick}
                        className="mt-10 mr-8 self-end"
                    >
                        Lesson done
                    </button>
                </div>
            </div>
        </>
    );
};

export { Lesson1_1 };
