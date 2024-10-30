

import React, { useState } from "react";
import styles from "@/styles/Navbar.module.css";
import Image from "next/image";
import logo from '../../assets/images/Logo.png';
import menuIcon from '../../assets/images/menu-icon.png';
import closeIcon from '../../assets/images/close-icon.png';
import Link from "next/link";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className={styles.nav_container}>
            <div>
                <Image
                    src={logo}
                    width={63}
                    height={64}
                    alt="Logo"
                    className={styles.logo}
                />
            </div>

            {/* Menu Icon */}
            <div className={styles.menu_icon} onClick={toggleMenu}>
                <Image
                    src={menuIcon}
                    width={30}
                    height={30}
                    alt={isMenuOpen ? "Close Icon" : "Menu Icon"}
                />
            </div>

            {/* Navigation Menu */}
            <div className={`${styles.nav_item} ${isMenuOpen ? styles.show_menu : ''}`}>
                <div>
                    <div className={styles.mobile_menu_item}>
                        <div>
                            <Image
                                src={logo}
                                width={63}
                                height={64}
                                alt="Logo"
                                className={styles.logo}
                            />
                        </div>
                        <div className={styles.close_menu_icon} onClick={closeMenu}>
                            <Image
                                src={closeIcon}
                                width={30}
                                height={30}
                                alt="Close Icon"
                            />
                        </div>
                    </div>
                    <ul>
                        <li onClick={closeMenu}><Link href="#Why_Me">Why Me?</Link></li>
                        <li onClick={closeMenu}><Link href="#">Skills</Link></li>
                        <li onClick={closeMenu}><Link href="#">Portfolio</Link></li>
                        <li onClick={closeMenu}><Link href="#">Testimonial</Link></li>
                        <button onClick={closeMenu}><Link href="#">GET IN TOUCH</Link></button>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
