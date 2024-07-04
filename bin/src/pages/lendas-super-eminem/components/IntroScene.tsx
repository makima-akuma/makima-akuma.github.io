import React, {useEffect, useState} from "react";
import {animated, useSpring} from '@react-spring/web';

const animationDuration: number = 1000;
const readingDuration: number = 4000;
const texts: string[] = [
    "Uma obra de arte ...",
    "Aprovada em conjunto pela ONU e Fundação Internacional contra o André Santos ...",
    "Será agora desvendada, para todo o mundo ...",
    "Seja bem-vindo",
    "Às Lendas do SUPER Eminem"
];

interface IIntroScene {
    onComplete: () => void,
}

const IntroScene: React.FC<IIntroScene> = ({onComplete}) => {

    const audio = new Audio('audio/intro_music.mp3');


    const [hideText, setHideText] = useState<boolean>(true);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const springs = useSpring({
        opacity: hideText ? 0 : 1,
        config: { duration: animationDuration },
        onRest: () => completeTransition()
    });

    function initiateTransition(index: number): void {
        if(currentIndex >= texts.length - 1) onComplete();
        setCurrentIndex(index);
        setHideText(false);
    }
    function completeTransition() {
        if(hideText) {
            initiateTransition(currentIndex + 1);
        } else {
            setTimeout(() => setHideText(true), readingDuration);
        }
    }

    function playAudio() {
        audio.play();
    }

    useEffect(() => {
        playAudio();

        setTimeout(() => {
            initiateTransition(0);
        });

        return () => {
            audio.pause()
        };
    }, []);

    return (
        <>
            <button onClick={playAudio}>Hello World</button>
            <section>
                <animated.h1 className="text-5xl text-center font-bold" style={{borderRadius: 8, ...springs}}>
                    {texts[currentIndex]}
                </animated.h1>
            </section>
        </>
    );

}

export default IntroScene;