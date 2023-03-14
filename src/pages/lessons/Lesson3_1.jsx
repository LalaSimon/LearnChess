import React from "react";
import "../../index.scss";
import { PlayChess } from "../../components/PlayChess";
import { PlayChessVSRandom } from "../../components/PlayChessVSRandom";
import { Tour } from "../tours/Tour3_1";
import { DoneButton } from "../../components/DoneButton";
import { TipButton } from "../../components/TipButton";

const Lesson3_1 = ({ isDone }) => {
    return (
        <>
            <Tour></Tour>
            <div className="flex gap-44 justify-center items-center">
                <div className="szachownica flex flex-col">
                    <PlayChess
                        boardposition={
                            "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
                        }
                        boardOrientation={"white"}
                    ></PlayChess>
                    <div className="flex justify-center gap-40 mt-10">
                        <TipButton
                            content={
                                "First move in most cases force your opponent to play in specified way"
                            }
                        ></TipButton>
                        <DoneButton
                            lessonId="lesson3_1"
                            className="ml-10"
                            isDone={isDone}
                        ></DoneButton>
                    </div>
                </div>
            </div>
        </>
    );
};

export { Lesson3_1 };
