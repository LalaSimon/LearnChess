import React from "react";
import JoyRide from "react-joyride";

const TOUR_STEPS = [
    {
        disableBeacon: true,
        placement: "auto",
        target: ".chessboard",
        content:
            "But what if we have position like this? We dont have any piece to attack! I dont have my queen!",
    },
    {
        disableBeacon: true,
        placement: "auto",
        target: ".chessboard",
        content:
            "Thats correct, welcome to endgame. Where king is becoming an attacking piece and your goal is to promote your pawns into queens to mate your opponent",
    },
    {
        disableBeacon: true,
        placement: "auto",
        target: ".chessboard",
        content:
            "Endgames can really be tricky (this one is not). So even there are less pawns stay focused and keep thinking about every opponent move.",
    },
    {
        disableOverlay: true,
        disableBeacon: true,
        placement: "auto",
        target: '[data-square = "a4"]',
        content:
            "Look, your pawn is isolated and really pushed - push your pawn to promote line for queen and mate your opponent.",
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
