"use client"
import Image from "next/image";
import styles from "./page.module.css";
import FadeInSection from "../hoc/fadeAnimation";

import React from 'react';

export default function Home() {
    return (
        <section className={styles.section}>
            <FadeInSection className="container">
                <div className={styles.contentWrap}>
                    <div className={styles.content}>
                        <h1 data-fade-el className={styles.title}>Ludzie oglądają to, co ich interesuje.</h1>
                        <div data-fade-el className={styles.description}>
                            <p>I tylko czasami - to jest reklama. <br/> 
                               Zróbmy, aby Twoja reklama była interesująca, <br/>
                               łącząc doświadczenie użytkownika z kreatywnością.
                            </p>
                        </div>
                    </div>
                    <div className={styles.decorWrap}>
                        <Image
                            className={styles.decor}
                            src="/apple.webp"
                            alt="Apple"
                            width={400}
                            height={400}
                            priority                        
                        />
                    </div>
                </div>
            </FadeInSection>
        </section>
    );
}
