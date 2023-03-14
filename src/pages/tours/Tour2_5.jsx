import React from "react";
import JoyRide from "react-joyride";

const TOUR_STEPS = [
    {
        disableBeacon: true,
        placement: "auto",
        target: ".chessboard",
        content:
            "Do you remember how we can move our queen? Focus on position:",
    },
    {
        disableOverlay: true,
        disableBeacon: true,
        placement: "auto",
        target: ".chessboard",
        content:
            "Try to capture all pawns with your queen, try to capture pieces with check (attacking opponent king) in same move",
    },
    {
        disableBeacon: true,
        placement: "auto",
        target: `[data-square *= "d4"]`,
        content: "Small tip: start with Queen to D4 move",
    },
    {
        disableOverlay: true,
        disableBeacon: true,
        placement: "auto",
        target: ".chessboard",
        content:
            "Try to capture all pawns, press lesson done and move into next lesson",
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
