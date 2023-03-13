import React from "react";
import JoyRide from "react-joyride";

const TOUR_STEPS = [
    {
        disableBeacon: true,
        placement: "auto",
        target: ".chessboard",
        content:
            "Queen like we said before can be moved like rook and bishop combined. Thats making her the strongest piece in chess. Being placed properly can paralyze opponent position. Try to capture all black pieces",
    },
    {
        disableBeacon: true,
        placement: "auto",
        target: ".chessboard",
        content:
            "Quick tip: try to make your queen position better by forcing your opponents to move his king by giving him check first (start with Queen to D4 move)",
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
