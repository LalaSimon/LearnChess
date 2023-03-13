import React from "react";
import JoyRide from "react-joyride";

const TOUR_STEPS = [
    {
        disableOverlay: true,
        disableBeacon: true,
        placement: "auto",
        target: ".szachownica",
        content:
            "In chess mostly games are played under time control. We have fast games, called blitz (3-5 minutes) and bullets (1-2 minutes), then a bit longer like rapids (10-30 minutes) and classical games (30 minutes+)",
    },
    {
        disableOverlay: true,
        disableBeacon: true,
        placement: "auto",
        target: ".szachownica",
        content:
            "According to official rules, every chess game have to start with hands shake",
    },
    {
        disableOverlay: true,
        disableBeacon: true,
        placement: "auto",
        target: ".szachownica",
        content:
            "Chess ale so popular because everyone is equal and there are no luck, also chess should bring you fun and pleasure. So please dont try cheating using chess engines.",
    },
    {
        disableOverlay: true,
        disableBeacon: true,
        placement: "auto",
        target: ".szachownica",
        content:
            "Congratulations! You first chapter is done, head please to the next one. Now we will try use our theory in practice.",
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
                    },
                }}
            />
        </div>
    );
};

export { Tour };
