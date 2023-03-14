import React from "react";
import "../../index.scss";
import { PlayChess } from "../../components/PlayChess";
import { Tour } from "../tours/Tour3_3";
import { DoneButton } from "../../components/DoneButton";
import { TipButton } from "../../components/TipButton";

const Lesson3_3 = ({ isDone }) => {
    return (
        <>
            <Tour></Tour>
            <div className="flex gap-44 justify-center items-center">
                <div className="szachownica flex flex-col">
                    <PlayChess
                        boardposition={
                            "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4"
                        }
                        boardOrientation={"white"}
                    ></PlayChess>
                    <div className="flex justify-center gap-40 mt-10">
                        <TipButton
                            content={
                                "Castle is like every other move, you need to think if its good at the time"
                            }
                        ></TipButton>
                        <DoneButton
                            lessonId="lesson3_3"
                            className="ml-10"
                            isDone={isDone}
                        ></DoneButton>
                    </div>
                </div>
            </div>
        </>
    );
};

export { Lesson3_3 };
