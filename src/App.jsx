import React, { useState, Component } from "react";
import "./index.scss";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { PlayChess } from "./components/PlayChess";
import { Home } from "./pages/home";
import { Route, Routes, Link } from "react-router-dom";
import { FAQ } from "./pages/FAQ";
import { AboutMe } from "./pages/AbouteMe";
import { OpenBoard } from "./pages/OpenBoard";
import { Lesson1_1 } from "./pages/lessons/Lesson1_1";
import { Lesson1_2 } from "./pages/lessons/Lesson1_2";

const App = () => {
    return (
        <>
            <nav className="w-auto h-24 bg-blue-400 flex justify-between items-center text-white font-bold text-lg ">
                <span className="ml-16">
                    <Link to="/">LearnChess</Link>
                </span>
                <ul className="gap-20 flex mr-16">
                    <li>
                        <Link to="/FAQ">FAQ</Link>
                    </li>
                    <li>
                        <Link to="/AboutMe">About me</Link>
                    </li>
                    <li>
                        <Link to="/OpenBoard">OpenBoard</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="FAQ" element={<FAQ />}></Route>
                <Route path="AboutMe" element={<AboutMe />}></Route>
                <Route path="OpenBoard" element={<OpenBoard />}></Route>
                <Route path="Lesson1_1" element={<Lesson1_1 />} />
                <Route path="Lesson1_2" element={<Lesson1_2 />} />
            </Routes>
        </>
    );
};

export { App, PlayChess };
