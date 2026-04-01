import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "../styles/my-image-component.css";

function MyImageComponent() {
    const containerRef = useRef(null);
    const headRef = useRef(null);
    const emojiRef = useRef(null);

    useGSAP(
        () => {
            gsap.set([headRef.current, emojiRef.current], {
                transformOrigin: "50% 18%",
            });
        },
        { scope: containerRef },
    );

    const { contextSafe } = useGSAP({ scope: containerRef });

    const handleMouseEnter = contextSafe(() => {
        gsap.killTweensOf([headRef.current, emojiRef.current]);

        const timeline = gsap.timeline();

        timeline
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
    });

    const handleMouseLeave = contextSafe(() => {
        gsap.killTweensOf([headRef.current, emojiRef.current]);

        const timeline = gsap.timeline();

        timeline
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
    });

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
                src="/imgs/troll_face_full.png"
                alt="Emoji"
                className="emoji"
                ref={emojiRef}
            />
        </div>
    );
}

export default MyImageComponent;
