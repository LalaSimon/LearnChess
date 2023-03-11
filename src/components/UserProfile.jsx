import React from "react";
import { useNavigate } from "react-router";
import { ProgressBar } from "./ProgressBar";

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
        <div className="flex flex-col justify-center items-center border-2 border-solid p-10 gap-4">
            <h1>{email}</h1>
            <ProgressBar></ProgressBar>
            <button onClick={handleLogoutClick} className="mt-10">
                LOG OUT
            </button>
        </div>
    );
};

export { UserProfile };
