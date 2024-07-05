import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.logoWrap}>
          <Image
            className={styles.logo}
            src="/logo.svg"
            alt="Will sell Logo"
            width={690}
            height={387}
            priority
          />
        </div>

        <div className={styles.decorWrap}>
          <Image
            className={styles.decor}
            src="/apple.png"
            alt="Apple"
            width={400}
            height={400}
            priority
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Ludzie oglądają to,<br/> co ich interesuje.</h1>  
          <div className={styles.description}>
            <p>I tylko czasami - to jest reklama. <br/>
            Zróbmy, aby Twoja reklama była interesująca,<br/> 
            łącząc doświadczenie użytkownika z kreatywnością.</p>
          </div>              
        </div>
      </div>      
    </section>
  );
}
