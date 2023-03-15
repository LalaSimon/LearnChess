import React from "react";
import { Link, useLocation } from "react-router-dom";
import myImage from "../sass/logo.png";

const Nav = () => {
    const location = useLocation();
    return (
        <nav className="w-auto h-24 bg-yellow-900/50 flex justify-between items-center text-white font-bold text-lg ">
            <div className="ml-16 flex justify-center items-center ">
                <img src={myImage} alt="knight chess piece" className="logo" />
                <Link className="text-center text-4xl -ml-2" to="/">
                    LearnChess
                </Link>
            </div>
            <ul className="gap-20 flex items-center justify-center mr-16 h-full">
                <li
                    className={
                        location.pathname === "/FAQ"
                            ? "active duration-300 rounded-xl h-10 w-40 active:bg-yellow-700 scale-100 hover:scale-125 text-xl hover:shadow-lg hover:shadow-yellow-900"
                            : "hover:bg-yellow-900 duration-300 rounded-xl h-10 w-40 scale-100 hover:scale-125 text-xl hover:shadow-lg hover:shadow-yellow-900"
                    }
                >
                    <Link
                        to="/FAQ"
                        className="h-full flex justify-center items-center"
                    >
                        FAQ
                    </Link>
                </li>
                <li
                    className={
                        location.pathname === "/AboutMe"
                            ? "active duration-300 rounded-xl h-10 w-40 active:bg-yellow-700 scale-100 hover:scale-125 text-xl hover:shadow-lg hover:shadow-yellow-900"
                            : "hover:bg-yellow-900 duration-300 rounded-xl h-10 w-40 scale-100 hover:scale-125 text-xl hover:shadow-lg hover:shadow-yellow-900"
                    }
                >
                    <Link
                        to="/AboutMe"
                        className="h-full flex justify-center items-center"
                    >
                        About us
                    </Link>
                </li>
                <li
                    className={
                        location.pathname === "/OpenBoard"
                            ? "active duration-300 rounded-xl h-10 w-40 active:bg-yellow-700 scale-100 hover:scale-125 text-xl hover:shadow-lg hover:shadow-yellow-900"
                            : "hover:bg-yellow-900 duration-300 rounded-xl h-10 w-40 scale-100 hover:scale-125 text-xl hover:shadow-lg hover:shadow-yellow-900"
                    }
                >
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
