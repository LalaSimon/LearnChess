import React, { useRef } from "react";
import supabase from "../services/supabase";
import { Toast } from "primereact/toast";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const toast = useRef(null);
    const navigate = useNavigate();
    const showSuccess = (msg) => {
        toast.current.show({
            severity: "success",
            summary: "Success",
            detail: msg,
            life: 3000,
        });
    };

    const showError = (msg) => {
        toast.current.show({
            severity: "error",
            summary: "Error",
            detail: msg,
            life: 3000,
        });
    };

    const handleSignUp = async (event) => {
        event.preventDefault();
        const formElement = event.target.elements;

        if (formElement[0].value !== formElement[1].value) {
            showError("The emails must be the same ");
            return;
        } else if (formElement[2].value !== formElement[3].value) {
            showError("The passwords must be the same");
            return;
        }
        let { data, error } = await supabase.auth.signUp({
            email: formElement[0].value,
            password: formElement[2].value,
        });

        if (data.user) {
            showSuccess(
                "Congratulations, you can sign in now. Page will refresh automaticlly in 3 seconds"
            );
            localStorage.setItem("progress", "0");
            setTimeout(() => {
                navigate("/");
                document.location.reload(true);
            }, 3000);
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
                className="flex flex-col gap-8 border-solid border-2 border-yellow-900 p-8 rounded-md"
                onSubmit={handleSignUp}
            >
                <span className="text-center text-xl">SIGN UP</span>
                <input
                    type="email"
                    className="border-solid border-b-2 border-b-yellow-900 opacity-50 p-2 flex justify-center text-center text-xl rounded-md focus:outline-none"
                    placeholder="email"
                ></input>
                <input
                    type="email"
                    className="border-solid border-b-2 border-b-yellow-900 opacity-50 p-2 flex justify-center text-center text-xl rounded-md focus:outline-none"
                    placeholder="repeat email"
                ></input>
                <input
                    type="password"
                    className="border-solid border-b-2 border-b-yellow-900 opacity-50 p-2 flex justify-center text-center text-xl rounded-md focus:outline-none"
                    placeholder="password"
                ></input>
                <input
                    type="password"
                    className="border-solid border-b-2 border-b-yellow-900 opacity-50 p-2 flex justify-center text-center text-xl rounded-md focus:outline-none"
                    placeholder="repeat password"
                ></input>

                <button
                    className="bg-yellow-900 opacity-50 text-white p-3 flex justify-center text-center text-xl focus:outline-none duration-300 rounded-xl hover:bg-yellow-700 hover:opacity-100 scale-100 hover:scale-110 active:shadow-inner active:shadow-gray-700"
                    type="submit"
                    label="Success"
                >
                    SIGN UP
                </button>
            </form>
        </>
    );
};

export { SignUp };
