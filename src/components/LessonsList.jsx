import React, { useState } from "react";
import "../index.scss";
import { Link } from "react-router-dom";

const LessonsList = () => {
    const [toggleFirst, setToggleFirst] = useState(false);
    const [toggleSecond, setToggleSecond] = useState(false);
    const [toggleThird, setToggleThird] = useState(false);
    const [toggleFourth, setToggleFourth] = useState(false);

    return (
        <>
            <ul className="flex gap-12 flex-col p-8 px-12 lessonH overflow-y-visible overflow-x-auto">
                <div
                    className="cursor-pointer p-3 border-2 border-solid border-yellow-900 text-center hover:bg-yellow-700 duration-300 rounded-xl scale-100 hover:scale-125 bg-yellow-900/50 text-white font-bold"
                    onClick={() => setToggleFirst(!toggleFirst)}
                >
                    Chapter 1 - What is chess about
                </div>
                {toggleFirst && (
                    <ul className="flex flex-col justify-center items-start gap-1 ">
                        <li className="p-2 border-2 border-solid w-full border-yellow-900 text-center  duration-300 rounded-xl scale-100 hover:scale-125 text-white font-bold liColO">
                            <Link to="/Lesson1_0"> Lesson 0 - Intro </Link>
                        </li>
                        <li className="p-2 border-2 border-solid w-full border-yellow-900 text-center duration-300 rounded-xl scale-100 hover:scale-125 text-white font-bold liColE">
                            <Link to="/Lesson1_1"> Lesson 1 - Chessboard </Link>
                        </li>
                        <li className="p-2 border-2 border-solid w-full border-yellow-900 text-center duration-300 rounded-xl scale-100 hover:scale-125 text-white font-bold  liColO">
                            <Link to="/Lesson1_2"> Lesson 2 - Pieces</Link>
                        </li>
                        <li className="p-2 border-2 border-solid w-full border-yellow-900 text-center duration-300 rounded-xl scale-100 hover:scale-125 text-white font-bold liColE">
                            <Link to="/Lesson1_3">Lesson 3 - General info</Link>
                        </li>
                    </ul>
                )}

                <div
                    className="cursor-pointer p-3 border-2 border-solid border-yellow-900 text-center hover:bg-yellow-700 duration-300 rounded-xl scale-100 hover:scale-125 bg-yellow-900/50 text-white font-bold"
                    onClick={() => setToggleSecond(!toggleSecond)}
                >
                    Chapter 2 - How piecies moves?
                </div>
                {toggleSecond && (
                    <ul className="flex flex-col justify-center items-start gap-1">
                        <li className="p-2 border-2 border-solid w-full border-yellow-900 text-center duration-300 rounded-xl scale-100 hover:scale-125 text-white font-bold  liColO">
                            <Link to="/Lesson2_1"> Lesson 1 - pawn </Link>
                        </li>
                        <li className="p-2 border-2 border-solid w-full border-yellow-900 text-center duration-300 rounded-xl scale-100 hover:scale-125 text-white font-bold  liColE">
                            <Link to="/Lesson2_2"> Lesson 2 - rook</Link>
                        </li>
                        <li className="p-2 border-2 border-solid w-full border-yellow-900 text-center  duration-300 rounded-xl scale-100 hover:scale-125 text-white font-bold liColO">
                            <Link to="/Lesson2_3"> Lesson 3 - knight</Link>
                        </li>
                        <li className="p-2 border-2 border-solid w-full border-yellow-900 text-center duration-300 rounded-xl scale-100 hover:scale-125 text-white font-bold  liColE">
                            <Link to="/Lesson2_4"> Lesson 4 - bishop</Link>
                        </li>
                        <li className="p-2 border-2 border-solid w-full border-yellow-900 text-center  duration-300 rounded-xl scale-100 hover:scale-125 text-white font-bold liColO">
                            <Link to="/Lesson2_5"> Lesson 5 - queen</Link>
                        </li>
                        <li className="p-2 border-2 border-solid w-full border-yellow-900 text-center duration-300 rounded-xl scale-100 hover:scale-125 text-white font-bold  liColE">
                            <Link to="/Lesson2_6"> Lesson 6 - king</Link>
                        </li>
                    </ul>
                )}
                <div
                    className="cursor-pointer p-3 border-2 border-solid border-yellow-900 text-center hover:bg-yellow-700 duration-300 rounded-xl scale-100 hover:scale-125 bg-yellow-900/50 text-white font-bold"
                    onClick={() => setToggleThird(!toggleThird)}
                >
                    Chapter 3 - How to actually play game
                </div>
                {toggleThird && (
                    <ul className="flex flex-col justify-center items-start gap-1">
                        <li className="p-2 border-2 border-solid w-full border-yellow-900 text-center  duration-300 rounded-xl scale-100 hover:scale-125 text-white font-bold liColO">
                            <Link to="/Lesson3_1"> Lesson 1 - First move</Link>
                        </li>
                        <li className="p-2 border-2 border-solid w-full border-yellow-900 text-center duration-300 rounded-xl scale-100 hover:scale-125 text-white font-bold  liColE">
                            <Link to="/Lesson3_2">
                                Lesson 2 - Develop your pieces
                            </Link>
                        </li>
                        <li className="p-2 border-2 border-solid w-full border-yellow-900 text-center  duration-300 rounded-xl scale-100 hover:scale-125 text-white font-bold liColO">
                            <Link to="/Lesson3_3"> Lesson 3 - Castling</Link>
                        </li>
                        <li className="p-2 border-2 border-solid w-full border-yellow-900 text-center duration-300 rounded-xl scale-100 hover:scale-125 text-white font-bold  liColE">
                            <Link to="/Lesson3_4">
                                Lesson 4 - Improving position
                            </Link>
                        </li>
                        <li className="p-2 border-2 border-solid w-full border-yellow-900 text-center  duration-300 rounded-xl scale-100 hover:scale-125 text-white font-bold liColO">
                            <Link to="/Lesson3_5"> Lesson 5 - Midgame</Link>
                        </li>
                        <li className="p-2 border-2 border-solid w-full border-yellow-900 text-center duration-300 rounded-xl scale-100 hover:scale-125 text-white font-bold  liColE">
                            <Link to="/Lesson3_6"> Lesson 6 - Endgame</Link>
                        </li>
                    </ul>
                )}
                <div
                    className="cursor-pointer p-3 border-2 border-solid border-yellow-900 text-center hover:bg-yellow-700 duration-300 rounded-xl scale-100 hover:scale-125 bg-yellow-900/50 text-white font-bold"
                    onClick={() => setToggleFourth(!toggleFourth)}
                >
                    Chapter 4 - Summary
                </div>
                {toggleFourth && (
                    <ul className="flex flex-col justify-center items-start gap-1">
                        <li className="p-2 border-2 border-solid w-full border-yellow-900 text-center  duration-300 rounded-xl scale-100 hover:scale-125 text-white font-bold liColO">
                            <Link to="/Lesson4_1"> How to train chess? </Link>
                        </li>
                        <li className="p-2 border-2 border-solid w-full border-yellow-900 text-center duration-300 rounded-xl scale-100 hover:scale-125 text-white font-bold  liColE">
                            <Link to="/Lesson4_2">
                                How good im after that course?
                            </Link>
                        </li>
                        <li className="p-2 border-2 border-solid w-full border-yellow-900 text-center  duration-300 rounded-xl scale-100 hover:scale-125 text-white font-bold liColO">
                            <Link to="/Lesson4_3">Chess community</Link>
                        </li>
                    </ul>
                )}
            </ul>
        </>
    );
};

export { LessonsList };
