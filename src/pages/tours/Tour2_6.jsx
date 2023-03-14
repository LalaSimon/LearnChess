import React from "react";
import JoyRide from "react-joyride";

const TOUR_STEPS = [
    {
        disableBeacon: true,
        placement: "auto",
        target: ".chessboard",
        content:
            "King movement is really important. In some type of position we want to attack with the king, in other trying to make him safe at all cost.",
    },
    {
        disableOverlay: true,
        disableBeacon: true,
        placement: "auto",
        target: `[data-square *= "e7"]`,
        content:
            "Look at king position, it look scary but that position is draw, after you move king to E7 ",
    },
    {
        disableOverlay: true,
        disableBeacon: true,
        placement: "auto",
        target: ".chessboard",
        content: "Great! Press lesson done and head into next lesson!",
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
