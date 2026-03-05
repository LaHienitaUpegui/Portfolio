import "../styles/aboutme.css";

function AboutMe() {
    return (
        <>
            <div className="img-mock"></div>

            <div className="text-information">
                <p className="greeting">Hi, my name is Juan Diego!</p>

                <h2 className="main-title">
                    Front-end developer and professional graphic designer
                </h2>

                <p className="description">
                    <strong>I create user interfaces... duh!</strong> Seriously,
                    I studied graphic design and then asked myself if I could
                    use it and combine it with web development and... BOOM! Here
                    I am, creating nice-looking accessible web experiences.
                </p>

                <p className="location">Based in Colombia</p>
            </div>
        </>
    );
}

export default AboutMe;
