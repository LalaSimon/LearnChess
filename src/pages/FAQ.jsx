import React, { useState } from "react";
import "../index.scss";

const FAQ = () => {
    const [toggleFirst, setToggleFirst] = useState(false);
    const [toggleSecond, setToggleSecond] = useState(false);
    const [toggleThird, setToggleThird] = useState(false);
    const [toggleFourth, setToggleFourth] = useState(false);
    const [toggleFifth, setToggleFifth] = useState(false);
    const [toggleSixth, setToggleSixth] = useState(false);
    const [toggleSeventh, setToggleSeventh] = useState(false);
    const [toggleEight, setToggleEight] = useState(false);
    const [toggleNineth, setToggleNineth] = useState(false);
    const [toggleTen, setToggleTen] = useState(false);
    return (
        <>
            <div className="flex flex-col justify-center items-cente  p-10 gap-8 FAQW centered">
                <h1 className="text-center w-full text-5xl">Welcome to FAQ</h1>
                <span className="text-center w-full text-3xl">
                    Scroll for searched question, click on to see an answer
                </span>
            </div>

            <div className="FAQ flex flex-col justify-center items-center gap-5 mt-14 w-full FAQH FAQW overflow-y-visible overflow-x-auto text-l border-b-2 border-t-2 border-solid border-yellow-900 centered">
                <span
                    className="bg-yellow-900 shadow-md shadow-yellow-900/50 p-3 cursor-pointer duration-300 rounded-xl scale-100 hover:scale-110 text-white font-bold"
                    onClick={() => setToggleFirst(!toggleFirst)}
                >
                    Q1: What is the purpose of this chess learning site?
                </span>
                {toggleFirst && (
                    <span className="bg-yellow-900/50 shadow-md p-3 shadow-yellow-900 duration-300 rounded-xl  text-white font-bold">
                        A1: The purpose of this site is to help beginners learn
                        how to play chess by providing basic rules, strategies,
                        and tips.
                    </span>
                )}

                <span
                    className="bg-yellow-900 shadow-md shadow-yellow-900/50 p-3 cursor-pointer duration-300 rounded-xl scale-100 hover:scale-125 text-white font-bold"
                    onClick={() => setToggleSecond(!toggleSecond)}
                >
                    Q2: Who is the target audience for this site?
                </span>
                {toggleSecond && (
                    <span className="bg-yellow-900/50 shadow-md p-3 shadow-yellow-900 duration-300 rounded-xl  text-white font-bold">
                        A2: The target audience for this site is anyone who is
                        new to chess and wants to learn the game.
                    </span>
                )}

                <span
                    className="bg-yellow-900 shadow-md shadow-yellow-900/50 p-3 cursor-pointer duration-300 rounded-xl scale-100 hover:scale-125 text-white font-bold"
                    onClick={() => setToggleThird(!toggleThird)}
                >
                    Q3: How can I use this site to learn chess?
                </span>
                {toggleThird && (
                    <span className="bg-yellow-900/50 shadow-md p-3 shadow-yellow-900 duration-300 rounded-xl  text-white font-bold">
                        A3: You can use this site to learn chess by readinFourth
                        rules, watching instructional videos, playing chess
                        puzzles, and practicing against a computer opponent.
                    </span>
                )}

                <span
                    className="bg-yellow-900 shadow-md shadow-yellow-900/50 p-3 cursor-pointer duration-300 rounded-xl scale-100 hover:scale-125 text-white font-bold"
                    onClick={() => setToggleFourth(!toggleFourth)}
                >
                    Q4: Is this site free to use?
                </span>
                {toggleFourth && (
                    <span className="bg-yellow-900/50 shadow-md p-3 shadow-yellow-900 duration-300 rounded-xl  text-white font-bold">
                        A4: Yes, this site is completely free to use.
                    </span>
                )}

                <span
                    className="bg-yellow-900 shadow-md shadow-yellow-900/50 p-3 cursor-pointer duration-300 rounded-xl scale-100 hover:scale-125 text-white font-bold"
                    onClick={() => setToggleFifth(!toggleFifth)}
                >
                    Q5: Do I need to download any software to use this site?
                </span>
                {toggleFifth && (
                    <span className="bg-yellow-900/50 shadow-md p-3 shadow-yellow-900 duration-300 rounded-xl  text-white font-bold">
                        A5: No, you do not need to download any software. This
                        site is accessible through a web browser.
                    </span>
                )}

                <span
                    className="bg-yellow-900 shadow-md shadow-yellow-900/50 p-3 cursor-pointer duration-300 rounded-xl scale-100 hover:scale-125 text-white font-bold"
                    onClick={() => setToggleSixth(!toggleSixth)}
                >
                    Q6: Can I play against other players online through this
                    site?
                </span>
                {toggleSixth && (
                    <span className="bg-yellow-900/50 shadow-md p-3 shadow-yellow-900 duration-300 rounded-xl  text-white font-bold">
                        A6: No, this site does not currently offer online
                        multiplayer functionality.
                    </span>
                )}
                <span
                    className="bg-yellow-900 shadow-md shadow-yellow-900/50 p-3 cursor-pointer duration-300 rounded-xl scale-100 hover:scale-125 text-white font-bold"
                    onClick={() => setToggleSeventh(!toggleSeventh)}
                >
                    Q7: Are there any prerequisites to using this site?
                </span>
                {toggleSeventh && (
                    <span className="bg-yellow-900/50 shadow-md p-3 shadow-yellow-900 duration-300 rounded-xl  text-white font-bold">
                        A7: No, there are no prerequisites. This site is
                        designed for complete beginners.
                    </span>
                )}

                <span
                    className="bg-yellow-900 shadow-md shadow-yellow-900/50 p-3 cursor-pointer duration-300 rounded-xl scale-100 hover:scale-125 text-white font-bold"
                    onClick={() => setToggleEight(!toggleEight)}
                >
                    Q8: How often is the content on this site updated?
                </span>
                {toggleEight && (
                    <span className="bg-yellow-900/50 shadow-md p-3 shadow-yellow-900 duration-300 rounded-xl  text-white font-bold">
                        A8: This site is updated regularly to ensure that the
                        information provided is accurate and up-to-date.
                    </span>
                )}

                <span
                    className="bg-yellow-900 shadow-md shadow-yellow-900/50 p-3 cursor-pointer duration-300 rounded-xl scale-100 hover:scale-125 text-white font-bold"
                    onClick={() => setToggleNineth(!toggleNineth)}
                >
                    Q9: How can I contact the site administrator if I have a
                    question or issue?
                </span>
                {toggleNineth && (
                    <span className="bg-yellow-900/50 shadow-md p-3 shadow-yellow-900 duration-300 rounded-xl  text-white font-bold">
                        A9: You can contact the site administrator by using the
                        contact form provided on the site.
                    </span>
                )}
                <span
                    className="bg-yellow-900 shadow-md shadow-yellow-900/50 p-3 cursor-pointer duration-300 rounded-xl scale-100 hover:scale-125 text-white font-bold"
                    onClick={() => setToggleTen(!toggleTen)}
                >
                    Q10: Can I contribute content to this site?
                </span>
                {toggleTen && (
                    <span className="bg-yellow-900/50 shadow-md p-3 shadow-yellow-900 duration-300 rounded-xl  text-white font-bold">
                        A10: Yes, contributions are welcome. Please contact the
                        site administrator to discuss any content contributions.
                    </span>
                )}
            </div>
        </>
    );
};

export { FAQ };
