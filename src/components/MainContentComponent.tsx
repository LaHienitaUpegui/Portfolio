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

    return (
        <section className="main-content">
            <div className="content-column">
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
