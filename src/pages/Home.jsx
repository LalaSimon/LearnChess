import React, { useState, useEffect, Component } from "react";
import "../index.scss";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { PlayChess } from "../components/PlayChess";
import { Lesson1_1 } from "./lessons/Lesson1_1";
import Joyride from "react-joyride";
import { Route, Routes, Link } from "react-router-dom";
import { LessonsList } from "../components/LessonsList";
import { FormLog } from "../components/loginRegisterForm";
const Home = () => {
    return (
        <>
            <div className="websiteBody flex justify-center items-center gap-24">
                <LessonsList></LessonsList>
                <PlayChess></PlayChess>
                <FormLog></FormLog>
            </div>
        </>
    );
    // pass props called boardposition = {"STRING"} in FEN format to load position you want
};

export { Home };
