import React from "react";
import { useNavigate } from "react-router";
import { ProgressBar } from "./ProgressBar";
import "../index.scss";
import "primeicons/primeicons.css";

const UserProfile = () => {
    const navigate = useNavigate();
    const UserName = localStorage.getItem("userData");
    const parsedData = JSON.parse(UserName);
    const email = parsedData.email;

    const handleLogoutClick = () => {
        localStorage.removeItem("userData");
        navigate("/");
        document.location.reload(true);
    };
    return (
        <div className="userProfile flex flex-col justify-center items-center border-2 border-solid border-yellow-900 xl:p-10 xl:gap-8 xl:mr-0 rounded-xl lg:p-2 lg:mr-20 lg:gap-5">
            <i className="pi pi-user" style={{ fontSize: "3rem" }}></i>
            <span className="text-xl lg:text-base">{email}</span>
            <ProgressBar></ProgressBar>
            <button
                className="bg-yellow-900 opacity-50 text-white p-3 lg:p-2 flex justify-center text-center text-xl focus:outline-none duration-300 rounded-xl hover:bg-yellow-700 hover:opacity-100 scale-100 hover:scale-125 shadow-lg shadow-yellow-900 active:shadow-inner active:shadow-gray-700"
                onClick={handleLogoutClick}
            >
                LOG OUT
            </button>
        </div>
    );
};

export { UserProfile };
