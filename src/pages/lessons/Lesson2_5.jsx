import React from "react";
import "../../index.scss";
import { PlayChess } from "../../components/PlayChess";
import { PlayChessVSRandom } from "../../components/PlayChessVSRandom";
import { Tour } from "../tours/Tour2_5";
import { DoneButton } from "../../components/DoneButton";
import { TipButton } from "../../components/TipButton";

const Lesson2_5 = ({ isDone }) => {
    return (
        <>
            <Tour></Tour>
            <div className="flex gap-44 justify-center items-center">
                <div className="flex flex-col">
                    <PlayChessVSRandom
                        boardposition={
                            "8/2pp2kp/p1p3p1/3p1p2/8/3Q4/8/4K3 w - - 0 1"
                        }
                        boardOrientation={"white"}
                        user="w"
                    ></PlayChessVSRandom>
                    <div className="flex justify-center gap-40 mt-10">
                        <TipButton
                            content={
                                "Queen is strongest piece in chess, rembmer to not lose it for free"
                            }
                        ></TipButton>
                        <DoneButton
                            lessonId="lesson2_5"
                            className="ml-10"
                            isDone={isDone}
                        ></DoneButton>
                    </div>
                </div>
            </div>
        </>
    );
};

export { Lesson2_5 };
