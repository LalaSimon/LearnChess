import React from "react";
import { Line, Circle } from "rc-progress";

const ProgressBar = () => {
    return (
        <>
            <span className="mt-4">Your progress</span>
            <Line
                percent={localStorage.getItem("progress")}
                strokeWidth={4}
                strokeColor={"#60a5fa"}
            />
        </>
    );
};

export { ProgressBar };
