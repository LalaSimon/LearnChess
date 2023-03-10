import React from "react";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

const FormLog = () => {
    return (
        <div className="flex flex-col gap-10">
            <SignIn></SignIn>
            <SignUp></SignUp>
        </div>
    );
};

export { FormLog };
