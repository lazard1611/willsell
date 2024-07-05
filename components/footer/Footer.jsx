import styles from './footer.module.css'; 

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerRow}>
                    <div className={styles.footerColumn}>
                        <div className={styles.footerText}>Poland, Wroclaw, 50-381 </div>
                        <div className={styles.footerText}>Marie Curie-Sklodowska 12 </div>                     
                    </div>
                    <div className={styles.footerColumn}>
                        <a
                            href="#"            
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                                <div className={styles.footerText}>your@willsell.agency</div>
                        </a>
                        <a
                            href="#"            
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                                <div className={styles.footerText}>+48 696 385 345</div>  
                        </a>                
                    </div>
                    <div className={styles.footerSocial}>
                        <a
                        href="#"            
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            <div className={styles.footerText}>facebook</div>
                        </a>
                        <a
                            href="#"            
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <div className={styles.footerText}>instagram</div>  
                        </a>                   
                    </div>
                </div>
            </div>           
            
        </footer>
    )
}

export {Footer}