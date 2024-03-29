import React from "react";
import JoyRide from "react-joyride";

const TOUR_STEPS = [
    {
        disableBeacon: true,
        placement: "auto",
        target: ".chessboard",
        content:
            "We have 6 types of pieces, every type has his own value (we will come back to values later). Let's look at each of them.",
    },
    {
        disableBeacon: true,
        placement: "auto",
        target: ".chessboard",
        content:
            "On A1 and H1 and A8 and H8 we have pieces called Rooks. They can move and capture other pieces in forward and sideways axis as far squares you want until they meet other piece.",
    },
    {
        placement: "auto",
        disableBeacon: true,
        target: ".chessboard",
        content:
            "Next to them, B1 and G1 and B8 and G8 we have hors... Knight! Its called knight, right? They can jump and capture in L symbol, why jump? Because other pieces do not interfere with movement. We will train pieces movement later :) ",
    },
    {
        placement: "auto",
        disableBeacon: true,
        target: ".chessboard",
        content:
            "Next ones are bishops, C1 and F1 on white side, c8 and f8 on black side. They are interested in moving and capturing as far as they want but on diagnals.",
    },
    {
        placement: "auto",
        disableBeacon: true,
        target: ".chessboard",
        content:
            "That means both players have one bishop that can move only on whites squares, and second one that move only on black squares.",
    },
    {
        placement: "auto",
        disableBeacon: true,
        target: ".chessboard",
        content:
            "D1 and D8, those are queens. They are the strongest pieces in chess (still king is the most important), they can move and capture like bishop and rook combined. ",
    },
    {
        placement: "auto",
        disableBeacon: true,
        target: ".chessboard",
        content:
            "On E1 and E8 we have kings, in chess we have to protect our king and at this same time attack opponents' king. King can move and capture in every direction by only one square, which make him really slow piece.",
    },
    {
        placement: "auto",
        disableBeacon: true,
        target: ".chessboard",
        content:
            "And last but not least pawns. They can move only straight by one square, but if its their first move each one can go by two squares. A pawn can capture an opponent's piece on a square diagonally in front of it by moving to that square and chaning his line. ",
    },
    {
        placement: "auto",
        disableBeacon: true,
        target: ".chessboard",
        content:
            "Pawns are only pieces that cant go back. Also if they went to opponents first line they can promote to any stronger piece (most often its queen).",
    },
    {
        placement: "auto",
        disableBeacon: true,
        target: ".chessboard",
        content:
            "Important thing, pieces are attacking squares where they can go at the moment, except pawns, they attack on the on diagonal squares  in front of the them. So if you want to move king into square that is attacked by other pieces - thats illegal move.",
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
