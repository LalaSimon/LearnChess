import React from "react";
import "../index.scss";
import { Outlet } from "react-router-dom";
import { LessonsList } from "../components/LessonsList";
import { FormLog } from "../components/loginRegisterForm";
import { UserProfile } from "../components/UserProfile";
const Home = () => {
    return (
        <>
            <div
                className="flex justify-center items-center h-full w-full gap-44
            "
            >
                <LessonsList></LessonsList>
                <Outlet className="flex-1"></Outlet>
                {localStorage.getItem("userData") !== null ? (
                    <UserProfile className="ml-40"></UserProfile>
                ) : (
                    <FormLog></FormLog>
                )}
            </div>
        </>
    );
    // pass props called boardposition = {"STRING"} in FEN format to load position you want
};

export { Home };
