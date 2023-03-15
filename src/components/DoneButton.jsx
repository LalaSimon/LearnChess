import React from "react";
import useLocalStorageState from "use-local-storage-state";

const DoneButton = ({ lessonId }) => {
    const [progress, setProgress] = useLocalStorageState("progress", 0);
    const isLessonDone =
        localStorage.getItem(`progress ${lessonId} done`) === "true";

    const handleClick = () => {
        if (!isLessonDone) {
            localStorage.setItem(`progress ${lessonId} done`, "true");
            setProgress(progress + 6.25);
        } else {
            localStorage.removeItem(`progress ${lessonId} done`);
            setProgress(progress - 6.25);
        }
    };

    return (
        <button
            className="donebtn bg-yellow-900 opacity-50 text-white p-3 flex justify-center text-center text-xl focus:outline-none duration-300 rounded-xl hover:bg-yellow-700 hover:opacity-100 scale-100 hover:scale-125 hover:shadow-lg hover:shadow-yellow-900"
            onClick={handleClick}
        >
            Lesson done
        </button>
    );
};

export { DoneButton };
