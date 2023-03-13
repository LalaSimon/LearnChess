import React from "react";
import JoyRide from "react-joyride";

const TOUR_STEPS = [
    {
        disableBeacon: true,
        placement: "auto",
        target: ".szachownica",
        content:
            "Now we will take a look at hors... knight. So like we said before, he can be moved in symbol of L letter, but what does it mean?",
    },
    {
        disableBeacon: true,
        placement: "auto",
        target: ".szachownica",
        content:
            "Our knight being at E4 can be moved to: C3, C5, D6, D, E6, F6, G5, G3, F2. Which means he also attack the same squares. Knight can be very dangerous because he can attack multiple squares at the same time.",
    },
    {
        disableBeacon: true,
        placement: "auto",
        target: ".szachownica",
        content:
            "So, if our knight, can attack multiple squares at the same time, that means he can also give a check (attack on king, opponent is forced in next move to make safe king) and attack another piece?",
    },
    {
        disableBeacon: true,
        placement: "auto",
        target: ".szachownica",
        content:
            "The answer is yes, try to find a move to attack king and queen at same time - king has to escape, so you are able capture the queen.",
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
