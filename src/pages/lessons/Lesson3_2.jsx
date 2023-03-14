import React from "react";
import "../../index.scss";
import { PlayChess } from "../../components/PlayChess";
import { Tour } from "../tours/Tour3_2";
import { DoneButton } from "../../components/DoneButton";
import { TipButton } from "../../components/TipButton";

const Lesson3_2 = ({ isDone }) => {
    return (
        <>
            <Tour></Tour>
            <div className="flex gap-44 justify-center items-center">
                <div className="szachownica flex flex-col">
                    <PlayChess
                        boardposition={
                            "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1"
                        }
                        boardOrientation={"white"}
                    ></PlayChess>
                    <div className="flex justify-center gap-40 mt-10">
                        <TipButton content={""}></TipButton>
                        <DoneButton
                            lessonId="lesson3_2"
                            className="ml-10"
                            isDone={isDone}
                        ></DoneButton>
                    </div>
                </div>
            </div>
        </>
    );
};

export { Lesson3_2 };
