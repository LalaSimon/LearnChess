import React, { useState, Component } from "react";
import "../index.scss";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { PlayChess } from "../components/PlayChess";

const Home = () => {
    return <PlayChess />; // pass props called boardposition = {"STRING"} in FEN format to load position you want
};

export { Home };
