import "../styles/more-coming-soon.css";

function MoreComingSoon() {
    return (
        <div className="more-coming-soon-container">
            <img
                src="/gifs/no-gif.gif"
                alt="A gif of a man saying no with his head."
                className="gif-man-saying-no"
            />

            <div className="more-coming-soon-text">
                <h6>Don't be greedy!</h6>

                <h2>More coming soon...</h2>
            </div>
        </div>
    );
}

export default MoreComingSoon;
