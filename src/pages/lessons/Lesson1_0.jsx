import React from "react";
import "../../index.scss";
import { PlayChess } from "../../components/PlayChess";
import { Tour } from "../tours/Tour1_0";
import { DoneButton } from "../../components/DoneButton";
import { TipButton } from "../../components/TipButton";

const Lesson1_0 = ({ isDone }) => {
    return (
        <>
            <Tour></Tour>
            <div className="flex gap-44 justify-center items-center">
                <div className="szachownica flex flex-col">
                    <PlayChess
                        boardposition={
                            "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
                        }
                        boardOrientation={"White"}
                    ></PlayChess>
                    <div className="flex justify-center gap-40 mt-10">
                        <TipButton
                            content={
                                "You are great - thanks for participating!"
                            }
                        ></TipButton>
                        <DoneButton
                            lessonId="lesson1_0"
                            className="ml-10"
                            isDone={isDone}
                        ></DoneButton>
                    </div>
                </div>
            </div>
        </>
    );
};

export { Lesson1_0 };
