import Image from "next/image";
import React from "react"
import logo1 from '../../assets/images/logo1.png'
import logo2 from '../../assets/images/logo2.png'
import logo3 from '../../assets/images/logo3.png'
import logo4 from '../../assets/images/logo4.png'
import logo5 from '../../assets/images/logo5.png'
import styles from "@/styles/Work_company.module.css";

const Work_company = () => {
    return (
        <div className={styles.company_logo}>
            <Image
                src={logo1}
                width={124}
                height={34}
                alt="Picture of the logo"
            />
            <Image
                src={logo2}
                width={124}
                height={34}
                alt="Picture of the logo"
            />
            <Image
                src={logo3}
                width={124}
                height={34}
                alt="Picture of the logo"
            />
            <Image
                src={logo4}
                width={124}
                height={34}
                alt="Picture of the logo"
            />
            <Image
                src={logo5}
                width={124}
                height={34}
                alt="Picture of the logo"
            />


        </div>
    )
};

export default Work_company;
