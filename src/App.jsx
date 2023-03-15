import React from "react";
import "./index.scss";
import { Home } from "./pages/home";
import { Route, Routes } from "react-router-dom";
import { FAQ } from "./pages/FAQ";
import { Nav } from "./components/Nav";
import { AboutMe } from "./pages/AbouteMe";
import { OpenBoard } from "./pages/OpenBoard";
import { Lesson1_0 } from "./pages/lessons/Lesson1_0";
import { Lesson1_1 } from "./pages/lessons/Lesson1_1";
import { Lesson1_2 } from "./pages/lessons/Lesson1_2";
import { Lesson1_3 } from "./pages/lessons/Lesson1_3";
import { Lesson2_1 } from "./pages/lessons/Lesson2_1";
import { Lesson2_2 } from "./pages/lessons/Lesson2_2";
import { Lesson2_3 } from "./pages/lessons/Lesson2_3";
import { Lesson2_4 } from "./pages/lessons/Lesson2_4";
import { Lesson2_5 } from "./pages/lessons/Lesson2_5";
import { Lesson2_6 } from "./pages/lessons/Lesson2_6";
import { Lesson3_1 } from "./pages/lessons/Lesson3_1";
import { Lesson3_2 } from "./pages/lessons/Lesson3_2";
import { Lesson3_3 } from "./pages/lessons/Lesson3_3";
import { Lesson3_4 } from "./pages/lessons/Lesson3_4";
import { Lesson3_5 } from "./pages/lessons/Lesson3_5";
import { Lesson3_6 } from "./pages/lessons/Lesson3_6";
import { Lesson4_1 } from "./pages/lessons/Lesson4_1";
import { Lesson4_2 } from "./pages/lessons/Lesson4_2";
import { Lesson4_3 } from "./pages/lessons/Lesson4_3";
import { PlayChessVSRandom } from "./components/PlayChessVSRandom";

const App = () => {
    return (
        <>
            <Nav></Nav>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="/" element={<PlayChessVSRandom user="w" />} />
                    <Route path="Lesson1_0" element={<Lesson1_0 />} />
                    <Route path="Lesson1_1" element={<Lesson1_1 />} />
                    <Route path="Lesson1_2" element={<Lesson1_2 />} />
                    <Route path="Lesson1_3" element={<Lesson1_3 />} />
                    <Route path="Lesson2_1" element={<Lesson2_1 />} />
                    <Route path="Lesson2_2" element={<Lesson2_2 />} />
                    <Route path="Lesson2_3" element={<Lesson2_3 />} />
                    <Route path="Lesson2_4" element={<Lesson2_4 />} />
                    <Route path="Lesson2_5" element={<Lesson2_5 />} />
                    <Route path="Lesson2_6" element={<Lesson2_6 />} />
                    <Route path="Lesson3_1" element={<Lesson3_1 />} />
                    <Route path="Lesson3_2" element={<Lesson3_2 />} />
                    <Route path="Lesson3_3" element={<Lesson3_3 />} />
                    <Route path="Lesson3_4" element={<Lesson3_4 />} />
                    <Route path="Lesson3_5" element={<Lesson3_5 />} />
                    <Route path="Lesson3_6" element={<Lesson3_6 />} />
                    <Route path="Lesson4_1" element={<Lesson4_1 />} />
                    <Route path="Lesson4_2" element={<Lesson4_2 />} />
                    <Route path="Lesson4_3" element={<Lesson4_3 />} />
                </Route>
                <Route path="FAQ" element={<FAQ />}></Route>
                <Route path="AboutMe" element={<AboutMe />}></Route>
                <Route path="OpenBoard" element={<OpenBoard />}></Route>
            </Routes>
        </>
    );
};

export { App };
