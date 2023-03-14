import React from "react";
import JoyRide from "react-joyride";

const TOUR_STEPS = [
    {
        disableBeacon: true,
        placement: "auto",
        target: ".chessboard",
        content:
            "Now we will have fun with rooks. As you can see we have two of them. Do you remember how can we move them? Try to capture all of whites pawns.",
    },
    {
        disableOverlay: true,
        disableBeacon: true,
        placement: "auto",
        target: ".chessboard",
        content:
            "Oh, small change right now. White pieces are from know moved by computer. Dont focus on checkmating enemy king. We will get there :) Get pawns.",
    },
    {
        disableOverlay: true,
        disableBeacon: true,
        placement: "auto",
        target: ".chessboard",
        content:
            "If computer stopped making moves that means you checkmated him (or he checkmated you, which i hope didnt happend : D)",
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
