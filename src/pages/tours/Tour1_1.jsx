import React from "react";
import JoyRide from "react-joyride";

const TOUR_STEPS = [
    {
        disableBeacon: true,
        placement: "auto",
        target: ".chessboard",
        styles: {
            options: {
                position: "absolute",
                zIndex: 1000,
            },
        },

        content:
            "So, this is chessboard with all pieces on. We can see that there are two colors of those. Whats the difference beetwen them? Whites always start first. We can move pieces by draging them from one spot to and droping to another",
    },
    {
        disableBeacon: true,
        placement: "auto",
        target: ".chessboard",
        styles: {
            options: {
                position: "absolute",
                zIndex: 1000,
            },
        },
        content:
            "What you see now is starting position, from which we are always start the game with white piece move.",
    },
    {
        placement: "auto",
        disableBeacon: true,
        target: ".chessboard",
        styles: {
            options: {
                position: "absolute",
                zIndex: 1000,
            },
        },
        content:
            "We have 64 squares that our pieces can stand. As we can see there are some numbers and letters at chessboard. Those are coordinates (notation), every square have his unique coordinate. ",
    },
    {
        placement: "auto",
        disableBeacon: true,
        target: ".chessboard",
        styles: {
            options: {
                position: "absolute",
                zIndex: 1000,
            },
        },
        content:
            "Its important to remember all of them, we will use them during lessons to help you learn them faster. You can always look at the chessboard if you dont remember which square is called D5 or F4 :)",
    },
    {
        placement: "auto",
        disableBeacon: true,
        target: ".chessboard",
        styles: {
            options: {
                position: "absolute",
                zIndex: 1000,
            },
        },
        content:
            "We always place whites pieces on first and second line, blacks on seventh and eight (if you dont have coordinates look if first square at first line (A1 square) is black for white pieces, then you know chessboard is good oriented.)",
    },
    {
        placement: "auto",
        disableBeacon: true,
        target: ".chessboard",
        styles: {
            options: {
                position: "absolute",
                zIndex: 1000,
            },
        },
        content:
            "Look at E1 and E8, those are kings. The main goal in chess is to make opponent king being attacked with no legal moves left to make him safe (not being attacked) - its called checkmate which end the game.",
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
                        width: 400,
                    },
                }}
            />
        </div>
    );
};

export { Tour };
