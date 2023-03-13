import React from "react";
import "./index.scss";
import { PlayChess } from "./components/PlayChess";
import { Home } from "./pages/home";
import { Route, Routes, Link } from "react-router-dom";
import { FAQ } from "./pages/FAQ";
import { AboutMe } from "./pages/AbouteMe";
import { OpenBoard } from "./pages/OpenBoard";
import { Lesson2_1 } from "./pages/lessons/Lesson2_1";
import { Lesson2_2 } from "./pages/lessons/Lesson2_2";
import { Lesson2_3 } from "./pages/lessons/Lesson2_3";
import { Lesson1_1 } from "./pages/lessons/Lesson1_1";
import { Lesson1_2 } from "./pages/lessons/Lesson1_2";
import { Lesson1_3 } from "./pages/lessons/Lesson1_3";
import { Nav } from "./components/Nav";

const App = () => {
    return (
        <>
            <Nav></Nav>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="/" element={<PlayChess />} />
                    <Route path="Lesson1_1" element={<Lesson1_1 />} />
                    <Route path="Lesson1_2" element={<Lesson1_2 />} />
                    <Route path="Lesson1_3" element={<Lesson1_3 />} />
                    <Route path="Lesson2_1" element={<Lesson2_1 />} />
                    <Route path="Lesson2_2" element={<Lesson2_2 />} />
                    <Route path="Lesson2_3" element={<Lesson2_3 />} />
                </Route>
                <Route path="FAQ" element={<FAQ />}></Route>
                <Route path="AboutMe" element={<AboutMe />}></Route>
                <Route path="OpenBoard" element={<OpenBoard />}></Route>
            </Routes>
        </>
    );
};

export { App, PlayChess };
