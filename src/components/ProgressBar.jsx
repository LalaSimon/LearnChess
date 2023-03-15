import React, { useEffect } from "react";
import { Line } from "rc-progress";
import useLocalStorageState from "use-local-storage-state";

const ProgressBar = () => {
    const [percent, setPercent] = useLocalStorageState("progress", 0);

    useEffect(() => {
        const progress = parseInt(localStorage.getItem("progress")) || 0;
        setPercent(progress);
    }, [setPercent]);

    return (
        <>
            <span className="mt-4">Your progress</span>
            <Line
                percent={percent}
                strokeWidth={5}
                strokeColor={
                    percent < 35
                        ? "red"
                        : percent < 55
                        ? "orange"
                        : percent < 75
                        ? "yellow"
                        : percent < 98
                        ? "green"
                        : "lightblue"
                }
            />
        </>
    );
};

export { ProgressBar };
