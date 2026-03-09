import "../styles/maincontentcomponent.css";
import AboutMe from "./AboutMe";
import MyExperience from "./MyExperience";
import Projects from "./Projects";
import MoreComingSoon from "./MoreComingSoon";
import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function MainContentComponent() {
    const [counter, setCounter] = useState(1);

    function renderContent() {
        switch (counter) {
            case 1:
                return <AboutMe />;
            case 2:
                return <MyExperience />;
            case 3:
                return <Projects />;
            case 4:
                return <MoreComingSoon />;
            default:
                return <AboutMe />;
        }
    }

    useGSAP(
        () => {
            gsap.from(".about-me-container", {
                opacity: 0,
                x: -100,
                duration: 1,
                ease: "power2.out",
            });
            gsap.from(".experience-container", {
                opacity: 0,
                x: -100,
                duration: 1,
                ease: "power2.out",
            });
            gsap.from(".projects-container", {
                opacity: 0,
                x: -100,
                duration: 1,
                ease: "power2.out",
            });

            gsap.to(".active", {
                color: "var(--intense-green)",
                "--line-width": "100%",
                opacity: 1,
                duration: 0.5,
                ease: "power1.inOut",
            });

            gsap.from(".click-to-change", {
                opacity: 0,
                duration: 1,
                ease: "steps(1)",
                repeat: -1,
                yoyo: true,
            });

            gsap.from(".white-little-arrow", {
                opacity: 0,
                duration: 1,
                ease: "steps(1)",
                repeat: -1,
                yoyo: true,
            });
        },
        { dependencies: [counter], revertOnUpdate: true },
    );

    return (
        <section className="main-content">
            <div className="content-column">
                {renderContent()}

                <div className="divider"></div>
            </div>

            <div className="index-column">
                <div className="index">
                    <div className="counter-and-button">
                        <p
                            className="current-number"
                            style={{ viewTransitionName: "counter-button" }}
                        >
                            Current: {counter}
                        </p>

                        <div className="button-with-arrow">
                            <button
                                className="counter-button"
                                onClick={() =>
                                    setCounter(counter < 4 ? counter + 1 : 1)
                                }
                            >
                                +1
                            </button>

                            <div className="arrow-and-text">
                                <svg
                                    id="Capa_2"
                                    data-name="Capa 2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 21.59 42.68"
                                    className="white-little-arrow"
                                >
                                    <g id="Elements">
                                        <path d="M21,20.86q-3.6-1.28-7.42-9.59c-.46,3.55-.83,6.06-1.09,8.58-.28,2.71-.54,5.42-.67,8.14-.18,3.68-.19,7.37-.38,11.05-.08,1.46.56,3.69-1.88,3.65-2.16-.04-2.16-2.19-2.13-3.69.09-5.44.29-10.87.64-16.3.2-3.02.77-6.01,1.25-9.54-3.82,3.08-4.65,8.13-9.32,10.67.09-1.6-.12-2.72.25-3.61C2.93,13.66,6.32,7.5,10.95,2.09c.41-.48.85-.98,1.37-1.34,1.93-1.34,3.98-.89,4.62,1.32,1.69,5.83,3.13,11.73,4.64,17.61.06.23-.26.55-.58,1.18Z"></path>
                                    </g>
                                </svg>

                                <p className="click-to-change">
                                    You, click me!
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="items-container">
                        <p
                            className={`index-item ${counter === 1 ? "active" : ""}`}
                            onClick={() => setCounter(1)}
                        >
                            1. About me
                        </p>
                        <p
                            className={`index-item ${counter === 2 ? "active" : ""}`}
                            onClick={() => setCounter(2)}
                        >
                            2. My experience
                        </p>
                        <p
                            className={`index-item ${counter === 3 ? "active" : ""}`}
                            onClick={() => setCounter(3)}
                        >
                            3. Projects
                        </p>
                        <p
                            className={`index-item ${counter === 4 ? "active" : ""}`}
                            onClick={() => setCounter(4)}
                        >
                            4. ???
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MainContentComponent;
