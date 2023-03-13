import React, { useState } from "react";
import "../../index.scss";
import { PlayChess } from "../../components/PlayChess";
import { PlayChessVSRandom } from "../../components/PlayChessVSRandom";
import { Tour } from "../tours/Tour2_3";
import { DoneButton } from "../../components/DoneButton";
import { TipButton } from "../../components/TipButton";

const Lesson2_3 = ({ isDone }) => {
    return (
        <>
            <Tour></Tour>
            <div className="flex gap-44 justify-center items-center">
                <div className="szachownica flex flex-col">
                    <PlayChessVSRandom
                        boardposition={"2q1k3/8/8/8/4N3/8/8/3K4 w - - 0 1"}
                        boardOrientation={"white"}
                        user="w"
                    ></PlayChessVSRandom>
                    <div className="flex justify-center gap-40 mt-10">
                        <TipButton
                            content={
                                "Knights could be scary piece. He feels best in the center of chessboard."
                            }
                        ></TipButton>
                        <DoneButton
                            lessonId="lesson2_3"
                            className="ml-10"
                            isDone={isDone}
                        ></DoneButton>
                    </div>
                </div>
            </div>
        </>
    );
};

export { Lesson2_3 };
