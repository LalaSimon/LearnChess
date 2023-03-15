import React, { useState } from "react";

const TipButton = ({ content }) => {
    const [toggleTipButton, setToggleTipButton] = useState(false);
    return (
        <div className="tip flex justify-center items-center flex-col relative">
            <button
                className="bg-yellow-900 opacity-50 text-white p-3 flex justify-center text-center text-xl focus:outline-none duration-300 rounded-xl hover:bg-yellow-700 hover:opacity-100 scale-100 hover:scale-125 hover:shadow-lg hover:shadow-yellow-900 active:shadow-inner active:shadow-gray-700"
                onClick={() => setToggleTipButton(!toggleTipButton)}
            >
                Click for hint
            </button>
            {toggleTipButton && (
                <div className="absolute top-16 w-96 text-center border-2 border-solid p-3 border-yellow-900 duration-300 rounded-xl scale-90 hover:scale-110 bg-yellow-900/50 text-white font-bold shadow-md shadow-yellow-900 ">
                    {content}
                </div>
            )}
        </div>
    );
};

export { TipButton };
