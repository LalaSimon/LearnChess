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

const App = () => {
    return (
        <>
            <nav className="w-auto h-24 bg-red-500 flex justify-between items-center ">
                <span className="m-16">
                    <Link to="/">LearnChess</Link>
                </span>
                <ul className="gap-20 flex">
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
                <Route path="/FAQ" element={<FAQ />}></Route>
                <Route path="/AboutMe" element={<AboutMe />}></Route>
                <Route path="/OpenBoard" element={<OpenBoard />}></Route>
            </Routes>
        </>
    ); // pass props called boardposition = {"STRING"} in FEN format to load position you want
};

export { App, PlayChess };
