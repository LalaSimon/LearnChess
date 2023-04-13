import React from "react";
import JoyRide from "react-joyride";

const TOUR_STEPS = [
    {
        disableBeacon: true,
        placement: "auto",
        target: ".chessboard",
        content:
            "So thats pretty much all from me! Thank you for participating in journey that i created and i hope that you enjoy it ",
    },
    {
        disableBeacon: true,
        placement: "auto",
        target: ".chessboard",
        content:
            "Ofcourse there is alot of things you should know about chess and i hope that you will keep practicing",
    },
    {
        disableBeacon: true,
        placement: "auto",
        target: ".chessboard",
        content: "So you can ask, where should i practice?",
    },
    {
        disableBeacon: true,
        placement: "auto",
        target: ".chessboard",
        content: `www.chess.com and www.lichess.com are most popular platforms where you can play chess online and learn theory.`,
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
