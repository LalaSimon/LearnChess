import React from "react";
import JoyRide from "react-joyride";

const TOUR_STEPS = [
    {
        disableOverlay: true,
        disableBeacon: true,
        placement: "auto",
        target: ".chessboard",
        content:
            "Okay, keep continue from last position. What should we do next? We have couple options",
    },
    {
        disableOverlay: true,
        disableBeacon: true,
        placement: "auto",
        target: `[data-square = "e1"]`,
        content:
            "We need to protect our king, how can we do this? Answer is castle, what is this? - Try to move king to g1",
    },
    {
        disableOverlay: true,
        disableBeacon: true,
        placement: "auto",
        target: `[data-square = "g1"]`,
        content:
            "Congratulations! Your first castle. So, castle allow us to hide king and develop rook to the game",
    },
    {
        disableOverlay: true,
        disableBeacon: true,
        placement: "auto",
        target: ".chessboard",
        content:
            "Castle is allowed until king and rook didnt move, there is no pieces between them and squares where king is coming to castle are not attacked",
    },
    {
        disableOverlay: true,
        disableBeacon: true,
        placement: "auto",
        target: ".chessboard",
        content:
            "You can also castle to the second rook, with same rules. King always goes by two squares to rook, and rook is switching squares with king.",
    },
    {
        disableOverlay: true,
        disableBeacon: true,
        placement: "auto",
        target: ".chessboard",
        content:
            "Develop more pieces and do castle with black king, click lesson done and head to another lesson",
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
