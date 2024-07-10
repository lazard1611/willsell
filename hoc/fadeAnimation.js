import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const FadeInSection = ({ children, className }) => {
    const containerAnimation = useRef(null);

    useGSAP(() => {
        gsap.set(containerAnimation.current.querySelectorAll('[data-fade-el]'), {
            y: 30,
            opacity: 0,
        });

        gsap.to(containerAnimation.current.querySelectorAll('[data-fade-el]'), {
            duration: 0.6,
            opacity: 1,
            y: 0,
            stagger: 0.2,
            ease: 'none',
        });
    }, { scope: containerAnimation });

    return (
        <div className={className} ref={containerAnimation}>
            {children}
        </div>
    );
};

export default FadeInSection;