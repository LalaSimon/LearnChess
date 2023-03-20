import React from "react";
import "../index.scss";
import { Outlet } from "react-router-dom";
import { LessonsList } from "../components/LessonsList";
import { FormLog } from "../components/loginRegisterForm";
import { UserProfile } from "../components/UserProfile";
const Home = () => {
    return (
        <>
            <div className="flex justify-center items-center h-full w-full">
                <LessonsList></LessonsList>

                <Outlet></Outlet>
                <div className="flex flex-col justify-center items-center">
                    {localStorage.getItem("userData") !== null ? (
                        <UserProfile className="ml-40 lg:ml-0"></UserProfile>
                    ) : (
                        <FormLog></FormLog>
                    )}
                </div>
            </div>
        </>
    );
    // pass props called boardposition = {"STRING"} in FEN format to load position you want
};

export { Home };
