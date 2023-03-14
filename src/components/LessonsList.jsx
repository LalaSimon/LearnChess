import React, { useState } from "react";
import "../index.scss";
import { Link } from "react-router-dom";

const LessonsList = () => {
    const [toggleFirst, setToggleFirst] = useState(false);
    const [toggleSecond, setToggleSecond] = useState(false);
    const [toggleThird, setToggleThird] = useState(false);

    return (
        <>
            <ul className="flex gap-4 flex-col chapterList">
                <div
                    className="cursor-pointer"
                    onClick={() => setToggleFirst(!toggleFirst)}
                >
                    Chapter 1 - What is chess about
                </div>
                {toggleFirst && (
                    <ul>
                        <li>
                            <Link to="/Lesson1_0"> Lesson 0 - Intro </Link>
                        </li>
                        <li>
                            <Link to="/Lesson1_1"> Lesson 1 - Chessboard </Link>
                        </li>
                        <li>
                            <Link to="/Lesson1_2"> Lesson 2 - Pieces</Link>
                        </li>
                        <li>
                            <Link to="/Lesson1_3">Lesson 3 - General info</Link>
                        </li>
                    </ul>
                )}

                <div
                    className="cursor-pointer"
                    onClick={() => setToggleSecond(!toggleSecond)}
                >
                    Chapter 2 - How piecies moves?
                </div>
                {toggleSecond && (
                    <ul>
                        <li>
                            <Link to="/Lesson2_1"> Lesson 1 - pawn </Link>
                        </li>
                        <li>
                            <Link to="/Lesson2_2"> Lesson 2 - rook</Link>
                        </li>
                        <li>
                            <Link to="/Lesson2_3"> Lesson 3 - knight</Link>
                        </li>
                        <li>
                            <Link to="/Lesson2_4"> Lesson 4 - bishop</Link>
                        </li>
                        <li>
                            <Link to="/Lesson2_5"> Lesson 5 - queen</Link>
                        </li>
                        <li>
                            <Link to="/Lesson2_6"> Lesson 6 - king</Link>
                        </li>
                    </ul>
                )}
                <div
                    className="cursor-pointer"
                    onClick={() => setToggleThird(!toggleThird)}
                >
                    Chapter 3 - How to actually play game
                </div>
                {toggleThird && (
                    <ul>
                        <li>
                            <Link to="/Lesson3_1"> Lesson 1 - First move</Link>
                        </li>
                        <li>
                            <Link to="/Lesson3_2">
                                {" "}
                                Lesson 2 - Develop your pieces
                            </Link>
                        </li>
                        <li>
                            <Link to="/Lesson3_3"> Lesson 3 - Castling</Link>
                        </li>
                        <li>
                            <Link to="/Lesson3_4"> Lesson 4 - </Link>
                        </li>
                        <li>
                            <Link to="/Lesson3_5"> Lesson 5 - </Link>
                        </li>
                        <li>
                            <Link to="/Lesson3_6"> Lesson 6 - </Link>
                        </li>
                    </ul>
                )}
            </ul>
        </>
    );
};

export { LessonsList };
