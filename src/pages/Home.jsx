import React, { useState, useEffect, Component } from "react";
import "../index.scss";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { PlayChess } from "../components/PlayChess";
import { Lesson1_1 } from "./lessons/Lesson1_1";
import Joyride from "react-joyride";
import { Route, Routes, Link } from "react-router-dom";
import { LessonsList } from "../components/LessonsList";

const Home = () => {
    return (
        <>
            <div className="flex gap-44 justify-center items-center mt-96 mb-96">
                <LessonsList></LessonsList>
                <PlayChess></PlayChess>
                <div>LOGIN</div>
            </div>
        </>
    );
    // pass props called boardposition = {"STRING"} in FEN format to load position you want
};

export { Home };
