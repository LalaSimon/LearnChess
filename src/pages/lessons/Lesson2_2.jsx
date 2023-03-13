import React, { useState } from "react";
import "../../index.scss";
import { PlayChess } from "../../components/PlayChess";
import { PlayChessVSRandom } from "../../components/PlayChessVSRandom";
import { Tour } from "../tours/Tour2_2";
import { DoneButton } from "../../components/DoneButton";
import { TipButton } from "../../components/TipButton";

const Lesson2_2 = ({ isDone }) => {
    return (
        <>
            <Tour></Tour>
            <div className="flex gap-44 justify-center items-center">
                <div className="szachownica flex flex-col">
                    <PlayChessVSRandom
                        boardposition={
                            "r5kr/8/8/8/8/1PPPPPP1/2P3PP/5K2 b - - 0 1"
                        }
                        boardOrientation={"black"}
                        user="b"
                    ></PlayChessVSRandom>
                    <div className="flex justify-center gap-40 mt-10">
                        <TipButton
                            content={
                                "Remember that you can also attack pawns with king"
                            }
                        ></TipButton>
                        <DoneButton
                            lessonId="lesson2_2"
                            className="ml-10"
                            isDone={isDone}
                        ></DoneButton>
                    </div>
                </div>
            </div>
        </>
    );
};

export { Lesson2_2 };
