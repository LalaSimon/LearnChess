import React from "react";
import JoyRide from "react-joyride";

const TOUR_STEPS = [
    {
        disableBeacon: true,
        placement: "auto",
        target: ".chessboard",
        content:
            "This is position where all pieces are developed from both sides, kings are safe, so there is a question - what should i do now?",
    },
    {
        disableBeacon: true,
        placement: "auto",
        target: ".chessboard",
        content:
            "If you think that your position is good enough to attack your opponents - you need to find weak points in your opponent position and how you can use it.",
    },
    {
        disableOverlay: true,
        disableBeacon: true,
        placement: "auto",
        target: '[data-square = "e4"',
        content:
            "Look at this square, you can push your pawn form E3 right here, your rook, knigth and bishop cover this square and u can attack pawn from D5 to open lane for your rook from E1 - breakthrough!",
    },
    {
        disableBeacon: true,
        placement: "auto",
        target: '[data-square = "d5"',
        content:
            "Now this pawn is under attack, remember, its not checkers. You can capture it but you dont have to. Think about what can happend in both scenarios. You need to count variants - this is crucial part of advanced chess.",
    },
    {
        disableOverlay: true,
        disableBeacon: true,
        placement: "auto",
        target: ".chessboard",
        content:
            'Take your time and think about this position, answer yourself a lot of questions "what if" type of. Move pieces and see the result. When you are ready to go next - press Lesson done and go to the next one. ',
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
