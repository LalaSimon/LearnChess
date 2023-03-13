import React from "react";
import JoyRide from "react-joyride";

const TOUR_STEPS = [
    {
        disableBeacon: true,
        placement: "auto",
        target: ".szachownica",
        content:
            "So, look at position, i like compare bishops to snipers, they can wait really long time from far away and then hit in proper time through whole chessboard. Try to to capture all pawns.",
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
