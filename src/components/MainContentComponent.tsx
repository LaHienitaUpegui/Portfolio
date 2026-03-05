import "../styles/maincontentcomponent.css";
import AboutMe from "./AboutMe";
import MyExperience from "./MyExperience";
import { useState } from "react";

function MainContentComponent() {
    const [counter, setCounter] = useState(0);
    const [initialButtonClicked, setInitialButtonClicked] = useState(false);

    function renderContent() {
        switch (counter) {
            case 1:
                return <AboutMe />;
            case 2:
                return <MyExperience />;
            case 3:
                return <div>Projects</div>;
            case 4:
                return <div>???</div>;
            default:
                return <AboutMe />;
        }
    }

    function getContentContainerClass() {
        switch (counter) {
            case 1:
                return "about-me-container";
            case 2:
                return "my-experience-container";
            case 3:
                return "projects-container";
            case 4:
                return "unknown-container";
            default:
                return "about-me-container";
        }
    }

    return (
        <section className="main-content">
            {/* {!initialButtonClicked && (
                <div className="button-and-text">
                    <p>My portfolio is a counter, click it!</p>

                    <button
                        className="counter-button"
                        onClick={() => setInitialButtonClicked(true)}
                    >
                        Don't be shy, I don't bite!
                    </button>
                </div>
            )} */}

            <div className={getContentContainerClass()}>
                {renderContent()}
                <div className="divider"></div>
            </div>

            <div className="index-column">
                <div className="index">
                    <button
                        className="counter-button"
                        onClick={() =>
                            setCounter(counter < 4 ? counter + 1 : 1)
                        }
                    >
                        Current counter: {counter}
                    </button>

                    <div className="items-container">
                        <p className="index-item">1. About me</p>
                        <p className="index-item">2. My experience</p>
                        <p className="index-item">3. Projects</p>
                        <p className="index-item">4. ???</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MainContentComponent;
