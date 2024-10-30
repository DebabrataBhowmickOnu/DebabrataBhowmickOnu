import React from "react"
import ME from '../../assets/images/me.png'
import scroll from '../../assets/images/scroll_down.png'
import styles from "@/styles/Banner.module.css";
import Image from "next/image";
import Link from "next/link";
const Banner = () => {
    return (
        <div className={styles.banner_contener}>
            <div className={styles.banner_content}>
                <div>
                    <div className={styles.me_image}>
                        <Image
                            src={ME}
                            width={194}
                            height={194}
                            alt="Picture of the logo"
                        />
                    </div>
                    <div className={styles.banner_tex}>
                        <h1>I am  a Full Stack<br></br> <span className={styles.span1}>WordPress </span> <span>Developer</span></h1>
                    </div>
                </div>

            </div>
            <div className={styles.scroll_down}>
                <Link href="#">
                    <Image
                        src={scroll}
                        width={194}
                        height={194}
                        alt="Picture of the logo"
                    />
                </Link>
            </div>

        </div>
    )
};

export default Banner;
