import "../styles/maincontentcomponent.css";
import AboutMe from "./AboutMe";
import MyExperience from "./MyExperience";
import Projects from "./Projects";
import MoreComingSoon from "./MoreComingSoon";
import { useState } from "react";

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

    return (
        <section className="main-content">
            <div className="content-column">
                {renderContent()}

                <div className="divider"></div>
            </div>

            <div className="index-column">
                <div className="index">
                    <div className="counter-and-button">
                        <p className="current-number">Current: {counter}</p>

                        <button
                            className="counter-button"
                            onClick={() =>
                                setCounter(counter < 4 ? counter + 1 : 1)
                            }
                        >
                            +1
                        </button>
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
