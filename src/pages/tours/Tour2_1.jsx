import React from "react";
import JoyRide from "react-joyride";

const TOUR_STEPS = [
    {
        disableOverlay: true,
        disableBeacon: true,
        placement: "auto",
        target: ".szachownica",
        content:
            "Look at chessboard, we fliped it. Now we have blackside in front of use. Why? Because you have to play as both side, there is no possibilty you will play only as whites.",
    },
    {
        disableOverlay: true,
        disableBeacon: true,
        placement: "auto",
        target: ".szachownica",
        content:
            "First we will take a look about pawns movement. Like we said in chapter one pawns can go straight by one or by two squares if its their first move, also they can capture oponent piece diagonally in front of them.",
    },
    {
        disableOverlay: true,
        disableBeacon: true,
        placement: "auto",
        target: ".szachownica",
        content:
            'You have access to both colors of pieces, try to move them, capture themselves and just learn about their movement. Remember, when you are done with pawns movement press "lesson done" button to follow your progress :)',
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
                        arrowColor: "#FFDD03",
                        backgroundColor: "#FFDD03",
                        primaryColor: "#0A0A0A",
                        textColor: "#0A0A0A",
                        width: 400,
                    },
                }}
            />
        </div>
    );
};

export { Tour };
