import React, { useState } from "react";

const DoneButton = ({ lessonId }) => {
    const handleClick = () => {
        if (
            localStorage.getItem(`progres ${lessonId} done`) === false ||
            localStorage.getItem(`progres ${lessonId} done`) === null
        ) {
            localStorage.setItem(
                "progress",
                +localStorage.getItem("progress") + 10
            );
            localStorage.setItem(`progres ${lessonId} done`, true);
        } else if (
            localStorage.getItem(`progres ${lessonId} done`) === "true"
        ) {
            localStorage.setItem(
                "progress",
                +localStorage.getItem("progress") - 10
            );
            localStorage.removeItem(`progres ${lessonId} done`);
        }
    };
    return (
        <button onClick={handleClick} className="self-end">
            Lesson done
        </button>
    );
};

export { DoneButton };
