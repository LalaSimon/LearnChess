import React from "react";
import JoyRide from "react-joyride";

const TOUR_STEPS = [
    {
        showSkipButton: true,
        disableBeacon: true,
        disableOverlay: true,
        placement: "auto",
        target: ".chessboard",
        content:
            "Hello! Thank you for participation in chess course on my site. This is quick intro how course will look like.",
    },
    {
        disableBeacon: true,
        placement: "auto",
        target: ".chapterList",
        content:
            "There is a list with chapters, please during course do each task in order.",
    },
    {
        disableBeacon: true,
        placement: "auto",
        target: ".chapterList",
        content:
            "If you want to restart any lessons just refresh the page, it will start again.",
    },
    {
        disableBeacon: true,
        placement: "auto",
        target: ".userProfile",
        content:
            "This is your profile, you can track your progress bar according to how many lessons left.",
    },
    {
        disableBeacon: true,
        placement: "auto",
        target: ".tip",
        content: "If you need any help you can always click on hint button :)",
    },
    {
        disableBeacon: true,
        placement: "auto",
        target: ".donebtn",
        content:
            "Important thing! To track your progress please press Lesson Done button, your progress bar will increase ",
    },
    {
        disableBeacon: true,
        disableOverlay: true,
        placement: "auto",
        target: ".chessboard",
        content:
            "Last thing - due to highlights during course site has to be run in full screen on your browser - Lets start now!",
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
