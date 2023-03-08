import React, { useState, Component } from "react";
import "./index.scss";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { PlayChess } from "./components/PlayChess";

const App = () => {
    return <PlayChess />;
};

//znajdz ustawienie pozycji

export { App, PlayChess };
