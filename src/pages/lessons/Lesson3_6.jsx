import React from "react";
import "../../index.scss";
import { PlayChess } from "../../components/PlayChess";
import { Tour } from "../tours/Tour3_6";
import { DoneButton } from "../../components/DoneButton";
import { TipButton } from "../../components/TipButton";
import { PlayChessVSRandom } from "../../components/PlayChessVSRandom";

const Lesson3_6 = ({ isDone }) => {
    return (
        <>
            <Tour></Tour>
            <div className="flex gap-44 justify-center items-center">
                <div className="szachownica flex flex-col">
                    <PlayChessVSRandom
                        boardposition={"8/6k1/4p1pp/8/P3P1P1/2K5/8/8 w - - 0 1"}
                        boardOrientation={"white"}
                        user={"w"}
                    ></PlayChessVSRandom>
                    <div className="flex justify-center gap-40 mt-10">
                        <TipButton
                            content={
                                "In endgame just like in midgame, all you have to do is finding opponents weak points in position."
                            }
                        ></TipButton>
                        <DoneButton
                            lessonId="lesson3_6"
                            className="ml-10"
                            isDone={isDone}
                        ></DoneButton>
                    </div>
                </div>
            </div>
        </>
    );
};

export { Lesson3_6 };
