import React from "react"
import styles from "@/styles/Experience.module.css";
import expertise from '../../assets/images/expertise.png';
import Image from "next/image";

const Experience = () => {
    return (
        <div className={styles.experience_container}>
            <div className={styles.experience_image}>
                <Image
                    src={expertise}
                    width={446}
                    height={366}
                    alt="expertise"
                    className={styles.expertise}
                />
            </div>
            <div className={styles.experience_content}>
                <h2>My <span>Experience</span></h2>
                <div className={styles.experience1}>
                    <h3><span>Angular Developer | Resultier |</span> April 2022 - December 2022 </h3>
                    <p>
                        I worked, with a very diverse team of brilliant developers on a cutting-edge health-tech application built using latest Angular versions and took charge of crafting and solving intricate frontend logic. Notably, I successfully tackled complex data-table and form interactions, including the challenging HCFA contributing to the applications seamless and efficient user experience.
                    </p>
                </div>

                <div className={styles.experience2}>
                    <h3><span>Angular Developer | Resultier | </span> April 2022 - December 2022 </h3>
                    <p>
                        I worked with a very diverse team of brilliant developers on a cutting-edge health-tech application built using latest Angular versions and took charge of crafting and solving intricate frontend logic. Notably I successfully tackled complex data-table and form interactions including the challenging HCFA contributing to the applications seamless and efficient user experience.
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Experience;
