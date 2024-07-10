"use client"
import styles from './footer.module.css';
// import FadeInSection from "@/hoc/fadeAnimation";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            
                <div className="container">
                    <div className={styles.footerRow}>
                        <div className={styles.footerColumn}>
                            <ul  className={styles.footerList}>
                                <li className={styles.footerItem}>
                                    <div className={styles.footerText}>Poland, Wroclaw, 50-381 </div>
                                </li>
                                <li className={styles.footerItem}>
                                    <div className={styles.footerText}>Marie Curie-Sklodowska 12 </div>
                                </li>
                            </ul>
                            <ul className={styles.footerList}>
                                <li className={styles.footerItem}>
                                    <a
                                        href="mailto:your@willsell.agency"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.footerLink}
                                    >
                                        <div className={styles.footerText}>your@willsell.agency</div>
                                    </a>
                                </li>

                                <li className={styles.footerItem}>
                                    <a
                                        href="tel:+48696385345"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.footerLink}
                                    >
                                        <div className={styles.footerText}>+48 696 385 345</div>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className={styles.footerSocial}>
                            <div className={styles.footerSocialWrap}>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.footerSocialLink}
                                >
                                    <div className={styles.footerText}>facebook</div>
                                </a>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.footerSocialLink}
                                >
                                    <div className={styles.footerText}>instagram</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
               
        </footer>
    )
}

export {Footer}
