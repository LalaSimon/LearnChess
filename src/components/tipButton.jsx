import React, { useState } from "react";

const TipButton = ({ content }) => {
    const [toggleTipButton, setToggleTipButton] = useState(false);
    return (
        <div className="flex justify-center items-center flex-col relative">
            <button onClick={() => setToggleTipButton(!toggleTipButton)}>
                Click for hint
            </button>
            {toggleTipButton && (
                <div className="absolute top-8 w-96 text-center">
                    <strong>{content}</strong>
                </div>
            )}
        </div>
    );
};

export { TipButton };
