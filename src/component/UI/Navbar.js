import React from "react"
import styles from "@/styles/Navbar.module.css";
import Image from "next/image";
import logo from '../../assets/images/Logo.png';
import arrow from '../../assets/images/Arrow_icon.png';
import Link from "next/link";
const Navbar = () => {
    return (
        <div className={styles.nav_container}>

            <div>
                <Image
                    src={logo}
                    width={63}
                    height={64}
                    alt="Picture of the logo"
                    className={styles.logo}
                />
            </div>
            <div className={styles.nav_item}>
                <ul>
                    <li><Link href="#">Why Me?</Link></li>
                    <li><Link href="#">Skills</Link></li>
                    <li><Link href="#">Portfolio</Link></li>
                    <li><Link href="#">Testimonial</Link></li>
                    <button><Link href="#">GET IN TOUCH </Link></button>
                </ul>
            </div>


        </div>
    )
};

export default Navbar;
