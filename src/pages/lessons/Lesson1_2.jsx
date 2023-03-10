import React, { useState, useEffect, Component } from "react";
import { Home } from "../home";
import Joyride from "react-joyride";
import "../../index.scss";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { PlayChess } from "../../components/PlayChess";
import { Route, Routes, Link } from "react-router-dom";
import { LessonsList } from "../../components/LessonsList";
import { Tour } from "../tours/Tour1_2";
import { TipButton } from "../../components/TipButton";

const Lesson1_2 = () => {
    const [position, setPosition] = useState();
    const changePosition = (boardposition) => {
        setPosition(boardposition);
    };
    // definiujesz czy chcesz miec pozycje czarnymi czy bialymi ("black/white")
    const [boardOrientantion, setBoardOrientantion] = useState();
    const changeOrentantion = (boardOrientation) => {
        setBoardOrientantion(boardOrientation);
    };
    const [toggleTipButton, setToggleTipButton] = useState(false);
    return (
        <>
            <Tour></Tour>
            <div className="flex gap-44 justify-center items-center mt-32">
                <div className="szachownica">
                    <PlayChess
                        boardposition={
                            "2rnr2k/ppq1p1bp/8/6Bp/3pN3/1BP5/P3QPP1/4R1K1 w - - 0 22"
                        }
                        boardOrientation={"white"}
                    ></PlayChess>
                    <TipButton content={"SF6!"} />
                </div>{" "}
            </div>
        </>
    );
};

export { Lesson1_2 };
