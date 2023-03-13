import React, { useRef } from "react";
import supabase from "../services/supabase";
import { Toast } from "primereact/toast";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate();
    const toast = useRef(null);

    const showError = (msg) => {
        toast.current.show({
            severity: "error",
            summary: "Error",
            detail: msg,
            life: 3000,
        });
    };

    const handleSignIn = async (event) => {
        event.preventDefault();
        const formElement = event.target.elements;

        let { data, error } = await supabase.auth.signInWithPassword({
            email: formElement[0].value,
            password: formElement[1].value,
        });

        if (data.user) {
            localStorage.setItem("userData", JSON.stringify(data.user));
            navigate("/");
            document.location.reload(true);
        }
        if (error) {
            showError(error.message);
        }
    };

    return (
        <>
            <Toast ref={toast} />
            <form
                type="submit"
                className="flex flex-col gap-8 border-solid border-2 border-gray-300 p-8 rounded-md"
                onSubmit={handleSignIn}
            >
                <span className="text-center text-xl"> SIGN IN</span>
                <input
                    type="email"
                    className="border-solid border-b-2 border-b-blue-400 p-2 flex justify-center text-center text-xl rounded-md focus:outline-none"
                    placeholder="email"
                ></input>
                <input
                    type="password"
                    className="border-solid border-b-2 border-b-blue-400 p-2 flex justify-center text-center text-xl rounded-md focus:outline-none"
                    placeholder="password"
                ></input>
                <button
                    className="bg-blue-400 text-white p-1 flex justify-center text-center text-xl rounded-md focus:outline-none"
                    type="submit"
                >
                    SIGN IN
                </button>
            </form>
        </>
    );
};

export { SignIn };
