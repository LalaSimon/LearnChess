import React from "react";
import "../../index.scss";
import { PlayChess } from "../../components/PlayChess";
import { DoneButton } from "../../components/DoneButton";
import { Tour } from "../tours/Tour1_2";
const Lesson1_2 = ({ isDone }) => {
    return (
        <>
            <Tour></Tour>
            <div className="flex gap-44 justify-center items-center">
                <div className="szachownica flex flex-col">
                    <PlayChess boardOrientation={"white"}></PlayChess>
                    <div className="flex justify-center gap-40 mt-10">
                        <DoneButton
                            lessonId="lesson1_2"
                            className="ml-10"
                            isDone={isDone}
                        ></DoneButton>
                    </div>
                </div>
            </div>
        </>
    );
};

export { Lesson1_2 };
