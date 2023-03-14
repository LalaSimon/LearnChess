import React from "react";
import "../../index.scss";
import { PlayChess } from "../../components/PlayChess";
import { Tour } from "../tours/Tour3_5";
import { DoneButton } from "../../components/DoneButton";
import { TipButton } from "../../components/TipButton";

const Lesson3_5 = ({ isDone }) => {
    return (
        <>
            <Tour></Tour>
            <div className="flex gap-44 justify-center items-center">
                <div className="szachownica flex flex-col">
                    <PlayChess
                        boardposition={
                            "r2q1rk1/pb2bppp/1pn1pn2/3p4/2pP1B2/P1P1PN2/1PBN1PPP/R2QR1K1 w - - 0 1"
                        }
                        boardOrientation={"white"}
                    ></PlayChess>
                    <div className="flex justify-center gap-40 mt-10">
                        <TipButton
                            content={
                                "To attack your opponent after developing pieces is to make breakthroughs in position by pushing pawns"
                            }
                        ></TipButton>
                        <DoneButton
                            lessonId="lesson3_5"
                            className="ml-10"
                            isDone={isDone}
                        ></DoneButton>
                    </div>
                </div>
            </div>
        </>
    );
};

export { Lesson3_5 };
