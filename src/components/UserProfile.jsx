import React from "react";
import { useNavigate } from "react-router";
import { ProgressBar } from "./ProgressBar";
import "../index.scss";

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
        <>
            <div className="flex flex-col justify-center items-center gap-44">
                <div>Intrudaction</div>
                <div className="userProfile flex flex-col justify-center items-center border-2 border-solid border-yellow-900 p-10 gap-8">
                    <h1>{email}</h1>
                    <ProgressBar></ProgressBar>
                    <button
                        className="bg-yellow-900 opacity-50 text-white p-3 flex justify-center text-center text-xl focus:outline-none duration-300 rounded-xl hover:bg-yellow-700 hover:opacity-100 scale-100 hover:scale-125"
                        onClick={handleLogoutClick}
                    >
                        LOG OUT
                    </button>
                </div>
            </div>
        </>
    );
};

export { UserProfile };
