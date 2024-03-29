import React from "react";
import JoyRide from "react-joyride";

const TOUR_STEPS = [
    {
        disableBeacon: true,
        placement: "auto",
        target: ".chessboard",
        content:
            "Now we will take a look at hors... knight. So like we said before, he can be moved in symbol of L letter, but what does it mean?",
    },
    {
        disableBeacon: true,
        placement: "auto",
        target: `[data-square *= "e4"]`,
        content:
            "Our knight being at E4 can be moved to: C3, C5, D6, D2, E6, F6, G5, G3, F2. Which means he also attack the same squares. Knight can be very dangerous because he can attack multiple squares at the same time.",
    },
    {
        disableBeacon: true,
        placement: "auto",
        target: `[data-square *= "e4"]`,
        content:
            "So, if our knight, can attack multiple squares at the same time, that means he can also give a check (attack on king, opponent is forced in next move to make safe king) and attack another piece?",
    },
    {
        disableBeacon: true,
        placement: "auto",
        target: `[data-square *= "d6"]`,
        content:
            "Knight to D6 is best move, after capturing queen spend a while for practie kinght movement",
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
