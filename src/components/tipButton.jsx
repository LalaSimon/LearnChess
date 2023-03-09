import React, { useState } from "react";

const TipButton = ({ content }) => {
    const [toggleTipButton, setToggleTipButton] = useState(false);
    return (
        <div className="flex justify-center items-center mt-5 flex-col">
            <button
                className="mb-5"
                onClick={() => setToggleTipButton(!toggleTipButton)}
            >
                Kliknij po podpowiedź!
            </button>
            {toggleTipButton && <strong>{content}</strong>}
        </div>
    );
};

export { TipButton };
