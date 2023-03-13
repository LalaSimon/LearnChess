import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="w-auto h-24 bg-yellow-900/50 flex justify-between items-center text-white font-bold text-lg ">
            <span className="ml-16">
                <Link to="/">LearnChess</Link>
            </span>
            <ul className="gap-20 flex items-center justify-center mr-16 h-full">
                <li className="hover:bg-yellow-900 duration-300 rounded-xl h-10 w-40 active:bg-yellow-700 scale-100 hover:scale-125">
                    <Link
                        to="/FAQ"
                        className="h-full flex justify-center items-center"
                    >
                        FAQ
                    </Link>
                </li>
                <li className="hover:bg-yellow-900 duration-300 rounded-xl h-10 w-40 active:bg-yellow-700 scale-100 hover:scale-125">
                    <Link
                        to="/AboutMe"
                        className="h-full flex justify-center items-center"
                    >
                        About me
                    </Link>
                </li>
                <li className="hover:bg-yellow-900 duration-300 rounded-xl active:bg-yellow-700 scale-100 hover:scale-125 h-10 w-40 ">
                    <Link
                        to="/OpenBoard"
                        className="h-full flex justify-center items-center"
                    >
                        OpenBoard
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export { Nav };
