import React from "react";
import "../../index.scss";
import { PlayChess } from "../../components/PlayChess";
import { PlayChessVSRandom } from "../../components/PlayChessVSRandom";
import { Tour } from "../tours/Tour2_6";
import { DoneButton } from "../../components/DoneButton";
import { TipButton } from "../../components/TipButton";

const Lesson2_6 = ({ isDone }) => {
    return (
        <>
            <Tour></Tour>
            <div className="flex gap-44 justify-center items-center">
                <div className="szachownica flex flex-col">
                    <PlayChessVSRandom
                        boardposition={"4k3/8/3NBN2/8/8/n7/8/2K5 b - - 0 1"}
                        boardOrientation={"black"}
                        user="b"
                    ></PlayChessVSRandom>
                    <div className="flex justify-center gap-40 mt-10">
                        <TipButton
                            content={
                                "King to F7 and opponents pieces can be captured"
                            }
                        ></TipButton>
                        <DoneButton
                            lessonId="lesson2_6"
                            className="ml-10"
                            isDone={isDone}
                        ></DoneButton>
                    </div>
                </div>
            </div>
        </>
    );
};

export { Lesson2_6 };
