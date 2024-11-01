import Image from "next/image";
import React from "react";
import whyme from '../../assets/images/whyme.png';
import styles from "@/styles/Whyme.module.css";

const Whyme = () => {
    return (
        <div className={styles.whyme_container} id="Why_Me">
            <div className={styles.Whyme_content}>
                <h2>Why me?</h2>
                <p className={styles.frist_content}>Hi There! I am Debabrata Onu</p>
                <p>
                    A Freelance Full Stack Web Developer with more than 4 Years of experience. I thoughtfully craft brand-focused design, expertly build responsive and well-functional websites with great user experiences. Check out my latest projects! Let&apos;s chat and drive more conversions together!
                </p>
            </div>
            <div className={styles.image_container}>
                <Image
                    src={whyme}
                    width={267}
                    height={235}
                    alt="Picture of the logo"
                />
            </div>
        </div>
    );
};

export default Whyme;
