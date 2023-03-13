import React from "react";
import "../../index.scss";
import { PlayChess } from "../../components/PlayChess";
import { PlayChessVSRandom } from "../../components/PlayChessVSRandom";
import { Tour } from "../tours/Tour2_4";
import { DoneButton } from "../../components/DoneButton";
import { TipButton } from "../../components/TipButton";

const Lesson2_4 = ({ isDone }) => {
    return (
        <>
            <Tour></Tour>
            <div className="flex gap-44 justify-center items-center">
                <div className="szachownica flex flex-col">
                    <PlayChessVSRandom
                        boardposition={"4k3/pppppppp/8/8/8/8/B7/B2K4 w - - 0 1"}
                        boardOrientation={"white"}
                        user="w"
                    ></PlayChessVSRandom>
                    <div className="flex justify-center gap-40 mt-10">
                        <TipButton
                            content={
                                "Pair of bishops are better than pair of knights if there are less pieces on board"
                            }
                        ></TipButton>
                        <DoneButton
                            lessonId="lesson2_4"
                            className="ml-10"
                            isDone={isDone}
                        ></DoneButton>
                    </div>
                </div>
            </div>
        </>
    );
};

export { Lesson2_4 };
