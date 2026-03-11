import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import "../styles/test-component.css";

function TestComponent() {
    const headRef = useRef(null);
    const emojiRef = useRef(null);
    const containerRef = useRef(null);
    const timelineRef = useRef<gsap.core.Timeline | null>(null);

    const emojiPaths = [
        "/imgs/x_full.png",
        "/imgs/troll_face_full.png",
        "/imgs/shit_full.png",
        "/imgs/pillow_full.png",
        "/imgs/cora_full.png",
    ];

    useEffect(() => {
        gsap.set([headRef.current, emojiRef.current], {
            transformOrigin: "50% 18%",
        });
    }, []);
    const [currentEmoji, setCurrentEmoji] = useState(emojiPaths[0]);
    const [lastIndex, setLastIndex] = useState<number | null>(null);

    function handleMouseEnter() {
        gsap.killTweensOf([headRef.current, emojiRef.current]);

        let nextIndex;
        do {
            nextIndex = Math.floor(Math.random() * emojiPaths.length);
        } while (nextIndex === lastIndex);

        setLastIndex(nextIndex);
        setCurrentEmoji(emojiPaths[nextIndex]);

        timelineRef.current = gsap.timeline();

        timelineRef.current
            .to(headRef.current, {
                scale: 0,
                opacity: 0,
                duration: 0.1,
                ease: "power2.in",
            })
            .fromTo(
                emojiRef.current,
                { scale: 0, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" },
                "-=0.1",
            );
    }

    function handleMouseLeave() {
        gsap.killTweensOf([headRef.current, emojiRef.current]);

        timelineRef.current = gsap.timeline();

        timelineRef.current
            .to(emojiRef.current, {
                scale: 0,
                opacity: 0,
                duration: 0.2,
                ease: "power2.in",
            })
            .to(
                headRef.current,
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.3,
                    ease: "power2.out",
                },
                "-=0.1",
            );
    }

    return (
        <div
            className="general-container"
            ref={containerRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img src="/imgs/torso-test.png" alt="Torso" className="torso" />

            <img
                src="/imgs/cabeza_test.png"
                alt="Head image"
                className="head"
                ref={headRef}
            />
            <img
                src={currentEmoji}
                alt="Emoji"
                className="emoji"
                ref={emojiRef}
            />
        </div>
    );
}

export default TestComponent;
