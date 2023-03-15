import React from "react";
import JoyRide from "react-joyride";

const TOUR_STEPS = [
    {
        disableBeacon: true,
        placement: "auto",
        target: ".chessboard",
        content:
            "Chess community is really big, there are plenty content creators around chess!",
    },
    {
        disableBeacon: true,
        placement: "auto",
        target: ".chessboard",
        content:
            "Most populars chess youtubers at this moment is Hikaru Nakamura (one of the best chess players in the world) and Gotham Chess youtube channel.",
    },
    {
        disableBeacon: true,
        placement: "auto",
        target: ".chessboard",
        content:
            "Ofcourse there thousands of channels around chess, find the best one that fit your style :)",
    },
    {
        disableBeacon: true,
        placement: "auto",
        target: ".chessboard",
        content:
            "Thank you very much once again for finishing this course. Hope you will enjoy chess in future.",
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
