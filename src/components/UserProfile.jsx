import React from "react";
import { useNavigate } from "react-router";

const UserProfile = () => {
    const navigate = useNavigate();
    const UserName = localStorage.getItem("userData");
    const parsedData = JSON.parse(UserName);
    const email = parsedData.email;

    const handleLogoutClick = () => {
        localStorage.clear();
        navigate("/");
        document.location.reload(true);
    };
    return (
        <div className="flex flex-col justify-center items-center border-2 border-solid p-10">
            <h1>{email}</h1>
            <button onClick={handleLogoutClick} className="mt-10">
                LOG OUT
            </button>
        </div>
    );
};

export { UserProfile };
