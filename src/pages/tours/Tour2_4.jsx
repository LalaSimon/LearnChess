import React from "react";
import JoyRide from "react-joyride";

const TOUR_STEPS = [
    {
        disableBeacon: true,
        placement: "auto",
        target: ".chessboard",
        content: "Focus on position:",
    },
    {
        disableBeacon: true,
        placement: "auto",
        target: `[data-square *= "a1"]`,
        content:
            "Look at this black squared white bishop, how far he can be moved and what is he attacking.",
    },
    {
        disableBeacon: true,
        placement: "auto",
        target: `[data-square *= "g7"]`,
        content:
            "All the way to this square, so bishops are really strong pieces.",
    },
    {
        disableBeacon: true,
        placement: "auto",
        target: `[data-square *= "a2"]`,
        content:
            "Same thing with white square bishop, capture now all pieces. After it press lesson done and head to next lesson",
    },
];

const Tour = () => {
    return (
        <div>
            <JoyRide
                steps={TOUR_STEPS}
                continuous={true}
                styles={{
                    options: {
                        position: "absolute",
                        arrowColor: "#f2e3bc",
                        backgroundColor: "#f2e3bc",
                        primaryColor: "#713f12",
                        textColor: "#0A0A0A",
                        width: 350,
                    },
                }}
            />
        </div>
    );
};

export { Tour };
