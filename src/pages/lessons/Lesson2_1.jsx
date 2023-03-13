import React from "react";
import "../../index.scss";
import { PlayChess } from "../../components/PlayChess";
import { Tour } from "../tours/Tour2_1";
import { DoneButton } from "../../components/DoneButton";
import { TipButton } from "../../components/TipButton";

const Lesson2_1 = ({ isDone }) => {
    return (
        <>
            <Tour></Tour>
            <div className="flex gap-44 justify-center items-center">
                <div className="szachownica flex flex-col">
                    <PlayChess
                        boardposition={
                            "8/pppppppp/8/8/8/8/PPPPPPPP/8 b - - 0 1"
                        }
                        boardOrientation={"black"}
                    ></PlayChess>
                    <div className="flex justify-center gap-40 mt-10">
                        <TipButton
                            content={
                                "Reminder - You cannot move back with pawns!"
                            }
                        ></TipButton>
                        <DoneButton
                            lessonId="lesson2s_1"
                            className="ml-10"
                            isDone={isDone}
                        ></DoneButton>
                    </div>
                </div>
            </div>
        </>
    );
};

export { Lesson2_1 };
