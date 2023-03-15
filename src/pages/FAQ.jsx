import React from "react";
import "../index.scss";

const FAQ = () => {
    return (
        <>
            <div className="FAQ flex flex-col justify-evenly items-start gap-5 ml-20 mt-10 w-full h-full text-2xl">
                <div className="flex gap-5">
                    <span className="bg-yellow-900 shadow-md shadow-yellow-900/50 rounded text-white p-3">
                        Q1: What is the purpose of this chess learning site?
                    </span>
                    <span className="bg-yellow-900/50 shadow-md shadow-yellow-900 rounded text-white p-3">
                        A1: The purpose of this site is to help beginners learn
                        how to play chess by providing basic rules, strategies,
                        and tips.
                    </span>
                </div>

                <div className="flex gap-5 ">
                    <span className="bg-yellow-900 rounded text-white p-3 shadow-md shadow-yellow-900/50">
                        Q2: Who is the target audience for this site?
                    </span>
                    <span className="bg-yellow-900/50 rounded text-white p-3 shadow-md shadow-yellow-900">
                        A2: The target audience for this site is anyone who is
                        new to chess and wants to learn the game.
                    </span>
                </div>

                <div className="flex gap-5 ">
                    <span className="bg-yellow-900 rounded text-white p-3 shadow-md shadow-yellow-900/50">
                        Q3: How can I use this site to learn chess?
                    </span>
                    <span className="bg-yellow-900/50 rounded text-white p-3 shadow-md shadow-yellow-900">
                        A3: You can use this site to learn chess by reading the
                        rules, watching instructional videos, playing chess
                        puzzles, and practicing against a computer opponent.
                    </span>
                </div>

                <div className="flex gap-5 ">
                    <span className="bg-yellow-900 rounded text-white p-3 shadow-md shadow-yellow-900/50">
                        Q4: Is this site free to use?
                    </span>
                    <span className="bg-yellow-900/50 rounded text-white p-3 shadow-md shadow-yellow-900">
                        A4: Yes, this site is completely free to use.
                    </span>
                </div>

                <div className="flex gap-5 ">
                    <span className="bg-yellow-900 rounded text-white p-3 shadow-md shadow-yellow-900/50">
                        Q5: Do I need to download any software to use this site?
                    </span>
                    <span className="bg-yellow-900/50 rounded text-white p-3 shadow-md shadow-yellow-900">
                        A5: No, you do not need to download any software. This
                        site is accessible through a web browser.
                    </span>
                </div>

                <div className="flex gap-5 ">
                    <span className="bg-yellow-900 rounded text-white p-3 shadow-md shadow-yellow-900/50">
                        Q6: Can I play against other players online through this
                        site?
                    </span>
                    <span className="bg-yellow-900/50 rounded text-white p-3 shadow-md shadow-yellow-900">
                        A6: No, this site does not currently offer online
                        multiplayer functionality.
                    </span>
                </div>

                <div className="flex gap-5 ">
                    <span className="bg-yellow-900 rounded text-white p-3 shadow-md shadow-yellow-900/50">
                        Q7: Are there any prerequisites to using this site?
                    </span>
                    <span className="bg-yellow-900/50 rounded text-white p-3 shadow-md shadow-yellow-900">
                        A7: No, there are no prerequisites. This site is
                        designed for complete beginners.
                    </span>
                </div>

                <div className="flex gap-5 ">
                    <span className="bg-yellow-900 rounded text-white p-3 shadow-md shadow-yellow-900/50">
                        Q8: How often is the content on this site updated?
                    </span>
                    <span className="bg-yellow-900/50 rounded text-white p-3 shadow-md shadow-yellow-900">
                        A8: This site is updated regularly to ensure that the
                        information provided is accurate and up-to-date.
                    </span>
                </div>

                <div className="flex gap-5 ">
                    <span className="bg-yellow-900 rounded text-white p-3 shadow-md shadow-yellow-900/50">
                        Q9: How can I contact the site administrator if I have a
                        question or issue?
                    </span>
                    <span className="bg-yellow-900/50 rounded text-white p-3 shadow-md shadow-yellow-900">
                        A9: You can contact the site administrator by using the
                        contact form provided on the site.
                    </span>
                </div>
                <div className="flex gap-5 ">
                    <span className="bg-yellow-900 rounded text-white p-3 shadow-md shadow-yellow-900/50">
                        Q10: Can I contribute content to this site?
                    </span>
                    <span className="bg-yellow-900/50 rounded text-white p-3 shadow-md shadow-yellow-900">
                        A10: Yes, contributions are welcome. Please contact the
                        site administrator to discuss any content contributions.
                    </span>
                </div>
            </div>
        </>
    );
};

export { FAQ };
