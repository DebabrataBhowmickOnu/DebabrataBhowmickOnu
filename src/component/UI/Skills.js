import React from "react"
import styles from "@/styles/Skills.module.css";
import skills1 from '../../assets/images/skills1.png';
import skills2 from '../../assets/images/skill2.png';
import skills3 from '../../assets/images/skills3.png';
import skills4 from '../../assets/images/skill4.png';
import Image from "next/image";

const Skills = () => {
    return (
        <div className={styles.skills_container}>
            <h2>Skills</h2>
            <div className={styles.skills_contain}>
                <div className={styles.skills_1}>
                    <div className={styles.skills_img}>
                        <Image
                            src={skills1}
                            width={35}
                            height={35}
                            alt="Logo"
                            className={styles.logo}
                        />
                    </div>
                    <h3>Front End Development</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript ( react, angular)</li>
                        <li>next Js </li>
                    </ul>

                </div>
                <div className={styles.skills_1}>
                    <div className={styles.skills_img}>
                        <Image
                            src={skills2}
                            width={35}
                            height={35}
                            alt="Logo"
                            className={styles.logo}
                        />
                    </div>
                    <h3>Back End Development</h3>
                    <ul>
                        <li>PHP</li>
                        <li>laravel</li>
                        <li>express Js</li>
                        <li>sql</li>
                        <li>mysql</li>
                        <li>mongodb</li>
                    </ul>
                </div>
                <div className={styles.skills_1}>
                    <div className={styles.skills_img}>
                        <Image
                            src={skills3}
                            width={35}
                            height={35}
                            alt="Logo"
                            className={styles.logo}
                        />
                    </div>
                    <h3>Web Design</h3>
                    <ul>
                        <li>UI/UX</li>
                        <li>Figma / Scratch</li>
                    </ul>
                </div>
                <div className={styles.skills_1}>
                    <div className={styles.skills_img}>
                        <Image
                            src={skills4}
                            width={35}
                            height={35}
                            alt="Logo"
                            className={styles.logo}
                        />
                    </div>
                    <h3>CMS</h3>
                    <ul>
                        <li>Wordpress</li>
                        <li>webflow</li>
                        <li>shopify</li>
                        <li>wix</li>
                    </ul>
                </div>
            </div>

        </div>
    )
};

export default Skills;
