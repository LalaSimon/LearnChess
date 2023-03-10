import React from "react";
import JoyRide from "react-joyride";

const TOUR_STEPS = [
    { disableBeacon: true, target: ".szachownica", content: "1" },
    { disableBeacon: true, target: ".szachownica", content: "2" },
    { disableBeacon: true, target: ".szachownica", content: "3" },
    { disableBeacon: true, target: ".szachownica", content: "4" },
];

const Tour = () => {
    return (
        <div>
            <JoyRide showProgress={true} steps={TOUR_STEPS} continuous={true} />
        </div>
    );
};

export { Tour };
