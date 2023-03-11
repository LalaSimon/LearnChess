import React, { useState } from "react";

const TipButton = ({ content }) => {
    const [toggleTipButton, setToggleTipButton] = useState(false);
    return (
        <div className="flex justify-center items-center flex-col relative">
            <button onClick={() => setToggleTipButton(!toggleTipButton)}>
                Click for hint
            </button>
            {toggleTipButton && (
                <strong className="absolute top-8">{content}</strong>
            )}
        </div>
    );
};

export { TipButton };
