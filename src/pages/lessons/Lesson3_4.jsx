import React from "react";
import "../../index.scss";
import { PlayChess } from "../../components/PlayChess";
import { Tour } from "../tours/Tour3_4";
import { DoneButton } from "../../components/DoneButton";
import { TipButton } from "../../components/TipButton";

const Lesson3_4 = ({ isDone }) => {
    return (
        <>
            <Tour></Tour>
            <div className="flex gap-44 justify-center items-center">
                <div className="szachownica flex flex-col">
                    <PlayChess
                        boardposition={
                            "rnbqk2r/pp2nppp/2pb4/3p2B1/3P4/2NB1N2/PPP2PPP/R2QK2R b KQkq - 3 7"
                        }
                        boardOrientation={"black"}
                    ></PlayChess>
                    <div className="flex justify-center gap-40 mt-10">
                        <TipButton
                            content={
                                "Bishops and Rooks love open position without pawns, try to put them in those positions"
                            }
                        ></TipButton>
                        <DoneButton
                            lessonId="lesson3_4"
                            className="ml-10"
                            isDone={isDone}
                        ></DoneButton>
                    </div>
                </div>
            </div>
        </>
    );
};

export { Lesson3_4 };
