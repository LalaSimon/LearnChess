import React from "react";
import "../index.scss";
import { PlayChess } from "../components/PlayChess";

const OpenBoard = () => {
    return (
        <>
            <h1>OpenBoard</h1>
            <div className="websiteBody flex flex-col justify-center items-center">
                <PlayChess></PlayChess>
                <button onClick={() => undoMove()}>Cofnij ruch</button>
            </div>
        </>
    );
};

export { OpenBoard };
