import React from "react";
import JoyRide from "react-joyride";

const TOUR_STEPS = [
    {
        disableOverlay: true,
        disableBeacon: true,
        placement: "auto",
        target: ".chessboard",
        content:
            "Okay, keep continue from last position. What should we do next?",
    },
    {
        disableOverlay: true,
        disableBeacon: true,
        placement: "auto",
        target: ".chessboard",
        content:
            "Now we have first rule to remember - always move your pieces to cause problems to your opponent",
    },
    {
        disableOverlay: true,
        disableBeacon: true,
        placement: "auto",
        target: `[data-square *= "e5"]`,
        content:
            "So lets think, how you can cause problems to this pawn? There is second rule - develop your strong pieces - move knight to from G1 to F3",
    },
    {
        disableOverlay: true,
        disableBeacon: true,
        placement: "auto",
        target: `[data-square *= "e5"]`,
        content:
            "Look, now we developed and engageed our knight leading to attack on pawn, black now should defend it.",
    },
    {
        disableOverlay: true,
        disableBeacon: true,
        placement: "auto",
        target: ".chessboard",
        content:
            "Black have couple options, the most common is by developing pieces - move knight to C6",
    },
    {
        disableOverlay: true,
        disableBeacon: true,
        placement: "auto",
        target: ".chessboard",
        content:
            "Great job! Look, white knight is attacking black pawn on E5 but also is controlling D4 square, black knight is defending pawn and controlling D5 square",
    },
    {
        disableBeacon: true,
        placement: "auto",
        target: `[data-square *= "f1"]`,
        content:
            "Look at this fellow, we played pawn to E4 in first move to give him space to move, i think its time to do it.",
    },
    {
        disableOverlay: true,
        disableBeacon: true,
        placement: "auto",
        target: ".chessboard",
        content:
            "Most common moves are C4 or B5, both are good and lead to different positions, practice will show which one you like most! Im fan of bishop to C4 - move bishop to C4",
    },
    {
        disableOverlay: true,
        disableBeacon: true,
        placement: "auto",
        target: ".chessboard",
        content:
            "Black can play variable things now. Chess with every next move has endless possible positions. I would copy move right here - move black bishop to C5",
    },
    {
        disableOverlay: true,
        disableBeacon: true,
        placement: "auto",
        target: ".chessboard",
        content:
            "Great! You just developed you first piecies into game. Press lesson done and move to the next lesson.",
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
