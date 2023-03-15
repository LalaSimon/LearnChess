import React from "react";
import "../index.scss";
import myImage from "../sass/me.jpg";

const AboutMe = () => {
    return (
        <>
            <div className="flex flex-col w-full h-full">
                <div className="flex justify-around mt-10">
                    <img className="me" src={myImage} />
                    <div className="flex flex-col justify-start items-center">
                        <h1 className="text-4xl">Chess bio</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quidem quo corporis iure fugit quas maiores
                            corrupti soluta odit ad molestiae!
                        </p>
                    </div>
                </div>
                <div className="flex justify-center mt-10">contact links</div>
            </div>
        </>
    );
};

export { AboutMe };
