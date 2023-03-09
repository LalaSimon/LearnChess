import React from "react";
import JoyRide from "react-joyride";

const TOUR_STEPS = [
    {
        target: ".szachownica",
        content: "Szachownica",
    },
    {
        target: ".szachownica",
        content: "Szachownica",
    },
    {
        target: ".szachownica",
        content: "Szachownica",
    },
    {
        target: ".szachownica",
        content: "Szachownica",
    },
];

const Tour = () => {
    return (
        <div>
            <JoyRide run={true} steps={TOUR_STEPS} continuous={true} />
        </div>
    );
};

export { Tour };
