import React from "react";
import JoyRide from "react-joyride";

const TOUR_STEPS = [
    {
        disableBeacon: true,
        placement: "auto",
        target: ".chessboard",
        content:
            "Lets practice all of our knowladge. Every move is important in chess, there is no room for random moves",
    },
    {
        disableBeacon: true,
        placement: "auto",
        target: ".chessboard",
        content:
            "But first one is most important, how should we pick first move? Look bishops are closed due to pawns on e2 and d2",
    },
    {
        disableBeacon: true,
        placement: "auto",
        target: ".chessboard",
        content:
            "Also center of chessboard which are D4 D5 E4 E5 squares are most important. Having them under controll (attacking) is desired",
    },
    {
        disableBeacon: true,
        placement: "auto",
        target: ".chessboard",
        content:
            "We will focus right now on two possiblites, playing pawn to D4 or pawn E4 by white in first move",
    },
    {
        disableBeacon: true,
        placement: "auto",
        target: ".chessboard",
        content:
            "E4 is more aggresive, also giving space for bishop and queen to enter the game, D4 is more calm approach",
    },
    {
        disableOverlay: true,
        disableBeacon: true,
        placement: "auto",
        target: `[data-square *= "e4"]`,
        content:
            "Playing pawn to E4 as beginner is more developing your chess skills in my opinion, mostly because of possibilites of position develop - move white pawn to E4",
    },
    {
        disableOverlay: true,
        disableBeacon: true,
        placement: "auto",
        target: `[data-square *= "e5"]`,
        content:
            "Great! Most common respond as black is just simply pawn to E5, because you get controll (attacking) of D4 and F4 squares - move black pawn to E5",
    },
    {
        disableOverlay: true,
        disableBeacon: true,
        placement: "auto",
        target: ".chapterList",
        content:
            "Great! First move is already behing us - lets go to the next lesson",
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
