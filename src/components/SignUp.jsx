import React from "react";

const SignUp = () => {
    return (
        <form
            type="submit"
            className="flex flex-col gap-8 border-solid border-2 border-gray-300 p-8 rounded-md"
        >
            <span className="text-center text-xl">Register</span>
            <input
                type="login"
                className="border-solid border-b-2 border-b-blue-400 p-2 flex justify-center text-center text-xl rounded-md focus:outline-none"
                placeholder="login"
            ></input>
            <input
                type="password"
                className="border-solid border-b-2 border-b-blue-400 p-2 flex justify-center text-center text-xl rounded-md focus:outline-none"
                placeholder="password"
            ></input>
            <input
                type="password"
                className="border-solid border-b-2 border-b-blue-400 p-2 flex justify-center text-center text-xl rounded-md focus:outline-none"
                placeholder="repeat password"
            ></input>
            <input
                type="email"
                className="border-solid border-b-2 border-b-blue-400 p-2 flex justify-center text-center text-xl rounded-md focus:outline-none"
                placeholder="email"
            ></input>
            <input
                type="email"
                className="border-solid border-b-2 border-b-blue-400 p-2 flex justify-center text-center text-xl rounded-md focus:outline-none"
                placeholder="repeat email"
            ></input>
            <button
                className="bg-blue-400 text-white p-1 flex justify-center text-center text-xl rounded-md focus:outline-none"
                type="submit"
                label="Register"
            >
                Register!
            </button>
        </form>
    );
};

export { SignUp };