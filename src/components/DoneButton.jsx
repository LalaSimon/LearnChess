import React from "react";
import useLocalStorageState from "use-local-storage-state";

const DoneButton = ({ lessonId }) => {
    const [progress, setProgress] = useLocalStorageState("progress", 0);
    const [greenColor1_1, greenSetColor1_1] = useLocalStorageState(
        "green1_1",
        0
    );

    const isLessonDone =
        localStorage.getItem(`progress ${lessonId} done`) === "true";

    const handleClick = () => {
        if (!isLessonDone) {
            localStorage.setItem(`progress ${lessonId} done`, "true");
            greenSetColor1_1(1);
            setProgress(progress + 10);
        } else {
            localStorage.removeItem(`progress ${lessonId} done`);
            greenSetColor1_1(0);
            setProgress(progress - 10);
        }
    };

    return (
        <button onClick={handleClick} className="self-end">
            Lesson done
        </button>
    );
};

export { DoneButton };
