import React from "react";
import JoyRide from "react-joyride";

const TOUR_STEPS = [
    { disableBeacon: true, target: ".szachownica", content: "Szachownica" },
    { disableBeacon: true, target: ".szachownica", content: "Szachownica" },
    { disableBeacon: true, target: ".szachownica", content: "Szachownica" },
    { disableBeacon: true, target: ".szachownica", content: "Szachownica" },
];

const Tour = () => {
    return (
        <div>
            <JoyRide showProgress={true} steps={TOUR_STEPS} continuous={true} />
        </div>
    );
};

export { Tour };
