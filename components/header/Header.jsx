import styles from './header.css';
import Image from "next/image";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__logo">
                    <Image
                        className="header__logo_img"
                        src="/logo.svg"
                        alt="Will sell Logo"
                        width={690}
                        height={387}
                        priority
                    />
                </div>
            </div>

        </header>
    )
}

export {Header}
