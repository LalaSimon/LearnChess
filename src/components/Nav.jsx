import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="w-auto h-24 bg-blue-400 flex justify-between items-center text-white font-bold text-lg ">
            <span className="ml-16">
                <Link to="/">LearnChess</Link>
            </span>
            <ul className="gap-20 flex mr-16">
                <li>
                    <Link to="/FAQ">FAQ</Link>
                </li>
                <li>
                    <Link to="/AboutMe">About me</Link>
                </li>
                <li>
                    <Link to="/OpenBoard">OpenBoard</Link>
                </li>
            </ul>
        </nav>
    );
};

export { Nav };
