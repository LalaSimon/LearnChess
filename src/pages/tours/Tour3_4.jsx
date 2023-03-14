import React from "react";
import JoyRide from "react-joyride";

const TOUR_STEPS = [
    {
        disableBeacon: true,
        placement: "auto",
        target: ".chessboard",
        content:
            "Okay, now we complicate a bit. What we see is position when pawns from E line were exchanged.",
    },
    {
        disableOverlay: true,
        disableBeacon: true,
        placement: "auto",
        target: ".chessboard",
        content:
            "What should be black's next move? If you think about castle then you are correct - lets castle on both sides.",
    },
    {
        disableOverlay: true,
        disableBeacon: true,
        placement: "auto",
        target: ".chessboard",
        content:
            "As you can see white already developed every light piece (bishops and knights), but dont panic, thats happening very often when one of sides is ready to attack and other is not.",
    },
    {
        disableOverlay: true,
        disableBeacon: true,
        placement: "auto",
        target: '[data-square *= "c8"]',
        content:
            "As you can see bishop has free way on his diagonal, knight next to him also want to move. But which one should we move first? ",
    },
    {
        disableOverlay: true,
        disableBeacon: true,
        placement: "auto",
        target: ".chessboard",
        content:
            "Answer is bishop, because if we moved knight to d7 our bishop would be blocked - lets move bishop to e6.",
    },
    {
        disableOverlay: true,
        disableBeacon: true,
        placement: "auto",
        target: ".chessboard",
        content:
            "What about whites next move? Everything is already in game. So we should improve our position right know which mean finding better squares for our pieces.",
    },
    {
        disableOverlay: true,
        disableBeacon: true,
        placement: "auto",
        target: '[data-square *= "f1"]',
        content:
            "Look, this rook at this moment is looking at pawn, but we can move it to next square - move rook from f1 to e1",
    },
    {
        disableOverlay: true,
        disableBeacon: true,
        placement: "auto",
        target: ".chessboard",
        content:
            "Great! Now this rook is dangerous, remember to check if something is threating you after EVERY opponent move. Think what our opponent might want to do with his pieces",
    },
    {
        disableOverlay: true,
        disableBeacon: true,
        placement: "auto",
        target: '[data-square = "b8"]',
        content:
            "Finish black development, press lesson done and move to the next lesson.",
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
