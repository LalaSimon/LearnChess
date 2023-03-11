import React, { useState, useEffect } from "react";
import { Line } from "rc-progress";

const ProgressBar = () => {
    const [percent, setPercent] = useState("progress", 0);

    useEffect(() => {
        console.log(localStorage.getItem("progress"));
        setPercent(localStorage.getItem("progress"));
    }, [percent]);

    return (
        <>
            <span className="mt-4">Your progress</span>
            <Line percent={percent} strokeWidth={4} strokeColor={"#60a5fa"} />
        </>
    );
};

export { ProgressBar };
