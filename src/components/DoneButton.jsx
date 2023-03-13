import React from "react";
import useLocalStorageState from "use-local-storage-state";

const DoneButton = ({ lessonId }) => {
    const [progress, setProgress] = useLocalStorageState("progress", 0);
    const isLessonDone =
        localStorage.getItem(`progress ${lessonId} done`) === "true";

    const handleClick = () => {
        if (!isLessonDone) {
            localStorage.setItem(`progress ${lessonId} done`, "true");
            setProgress(progress + 10);
        } else {
            localStorage.removeItem(`progress ${lessonId} done`);
            setProgress(progress - 10);
        }
    };

    return <button onClick={handleClick}>Lesson done</button>;
};

export { DoneButton };
