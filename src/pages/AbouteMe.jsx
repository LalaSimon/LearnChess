import React from "react";
import "../index.scss";
import myImage from "../sass/me.jpg";
import "primeicons/primeicons.css";

const AboutMe = () => {
    return (
        <>
            <div className="flex flex-col w-full h-full">
                {" "}
                <h1 className="text-4xl border-b-2 border-solid pb-10 pt-10 text-center border-yellow-900">
                    Chess bio
                </h1>
                <div className="flex justify-around mt-10">
                    {" "}
                    <img
                        className="me ml-5 mt-8 shadow-lg shadow-yellow-900"
                        src={myImage}
                    />
                    <div className="flex flex-col justify-start items-center mx-14">
                        <div className="mt-6 text-justify text-3xl flex flex-col gap-4 pb-4">
                            <p>Hi! </p>

                            <p>
                                My name is Szymon and im junior frontend
                                developer from Poland. This guy on left side its
                                me, during one of chess tournaments that i
                                played in my life.{" "}
                            </p>

                            <p>
                                {" "}
                                Chess is my biggest passion for a while and i
                                decided to create an application where you can
                                basically learn fundamentals and basics about
                                chess for free. I'm really advanced chess player
                                to be honest, there are plenty of better players
                                than me, but for teaching basics i think its
                                enough.
                            </p>

                            <p>
                                Officialy i have only 1114 fide which im not
                                proud of, because i played only one classical
                                tournament during my journey with chess and it
                                was in early 2022. At this time (march 2023) i
                                have 1400 elo points on Chess.com which place me
                                in almost 4% of best players in the world.{" "}
                            </p>

                            <p>
                                {" "}
                                I love chess because you can develop yourself
                                all the time and never stop, just like with
                                being good programmer. Hope you spend time well
                                during course on this site.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center flex-col items-center mt-14 border-t-2 border-solid border-yellow-900 pt-8">
                    <h2 className="text-4xl mt-2">Contact links</h2>
                    <ul className="flex gap-44 justify-center items-center mt-10">
                        <a
                            href="https://github.com/LalaSimon?tab=repositories"
                            target="_blank"
                        >
                            <li className="text-4xl">
                                {" "}
                                <i
                                    className="pi pi-github mr-2"
                                    style={{ fontSize: "3rem" }}
                                ></i>
                                GitHub
                            </li>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/SzymonLala"
                            target="_blank"
                        >
                            <li className="text-4xl">
                                {" "}
                                <i
                                    className="pi pi-linkedin mr-2"
                                    style={{ fontSize: "3rem" }}
                                ></i>
                                Linkedin
                            </li>
                        </a>
                        <a
                            href="https://www.instagram.com/szymeklala/"
                            target="_blank"
                        >
                            <li className="text-4xl">
                                {" "}
                                <i
                                    className="pi pi-instagram mr-2"
                                    style={{ fontSize: "3rem" }}
                                ></i>
                                Instagram
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
        </>
    );
};

export { AboutMe };
