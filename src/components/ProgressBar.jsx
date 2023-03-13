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
                strokeWidth={4}
                strokeColor={
                    percent < 20
                        ? "red"
                        : percent < 40
                        ? "orange"
                        : percent < 60
                        ? "yellow"
                        : percent < 80
                        ? "green"
                        : "lightblue"
                }
            />
        </>
    );
};

export { ProgressBar };
