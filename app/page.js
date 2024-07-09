import Image from "next/image";
import styles from "./page.module.css";
import withFadeAnimation from "../hoc/withFadeAnimation";

export default function Home() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.contentWrap}>
                    <div className={styles.content}>
                        <h1 data-fade-el className={styles.title}>Люди дивляться те, що їх цікавить.</h1>
                        <div data-fade-el className={styles.description}>
                            <p>І лише іноді - це реклама. <br/>
                                Зробимо так, щоб Ваша реклама була цікавою,<br/>
                                поєднуючи досвід користувача з креативністю.</p>
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
            </div>
        </section>
    );
}
