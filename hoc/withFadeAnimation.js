"use client"
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const withFadeAnimation = (WrappedComponent) => {
    const ComponentWithFadeAnimation = (props) => {
        useEffect(() => {
            const ATTRIBUTE = {
                el: '[data-fade-el]',
            };

            const $fadeEl = document.querySelectorAll(ATTRIBUTE.el);
            if ($fadeEl.length) {
                gsap.set($fadeEl, {
                    y: 30,
                    opacity: 0,
                });

                ScrollTrigger.batch($fadeEl, {
                    start: 'top 85%',
                    once: true,
                    onEnter: (batch) =>
                        gsap.to(batch, {
                            duration: 0.6,
                            opacity: 1,
                            y: 0,
                            stagger: 0.1,
                            ease: 'none',
                        }),
                });
            }

            return () => {
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            };
        }, []);

        return <WrappedComponent {...props} />;
    };

    ComponentWithFadeAnimation.displayName = `withFadeAnimation(${getDisplayName(WrappedComponent)})`;

    return ComponentWithFadeAnimation;
};

const getDisplayName = (WrappedComponent) => {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

export default withFadeAnimation();
