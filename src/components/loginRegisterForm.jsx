import React from "react";
import { LogIn } from "./LogIn";
import { SignUp } from "./SignUp";

const FormLog = () => {
    return (
        <div className="flex flex-col gap-10">
            <LogIn></LogIn>
            <SignUp></SignUp>
        </div>
    );
};

export { FormLog };
