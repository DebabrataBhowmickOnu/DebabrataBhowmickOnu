import React from "react"
import styles from "@/styles/Projects.module.css";
import project from '../../assets/images/project1.png';
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
    return (
        <div className={styles.project_container}>
            <h2>Selected projects</h2>
            <div className={styles.project_contain_container}>
                {/* project1  */}
                <div className={styles.project_contain}>
                    <div>
                        <Image
                            src={project}
                            width={335}
                            height={227}
                            alt="Logo"
                            className={styles.logo}
                        />
                    </div>
                    <h3>interdum mauris amet.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Massa lectus est interdum mauris amet.</p>
                    <div className={styles.button_container}>
                        <button>Web Development</button>
                        <button>Web Design</button>
                    </div>
                    <Link href="#" className={styles.project_link}>Live Prevuew</Link>

                </div>
                {/* project2  */}
                <div className={styles.project_contain}>
                    <div>
                        <Image
                            src={project}
                            width={335}
                            height={227}
                            alt="Logo"
                            className={styles.logo}
                        />
                    </div>
                    <h3>interdum mauris amet.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Massa lectus est interdum mauris amet.</p>
                    <div className={styles.button_container}>
                        <button>Web Development</button>
                        <button>Web Design</button>
                    </div>
                    <Link href="#" className={styles.project_link}>Live Prevuew</Link>

                </div>
                 {/* project3  */}
                <div className={styles.project_contain}>
                    <div>
                        <Image
                            src={project}
                            width={335}
                            height={227}
                            alt="Logo"
                            className={styles.logo}
                        />
                    </div>
                    <h3>interdum mauris amet.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Massa lectus est interdum mauris amet.</p>
                    <div className={styles.button_container}>
                        <button>Web Development</button>
                        <button>Web Design</button>
                    </div>
                    <Link href="#" className={styles.project_link}>Live Prevuew</Link>

                </div>
                 {/* project4  */}
                <div className={styles.project_contain}>
                    <div>
                        <Image
                            src={project}
                            width={335}
                            height={227}
                            alt="Logo"
                            className={styles.logo}
                        />
                    </div>
                    <h3>interdum mauris amet.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Massa lectus est interdum mauris amet.</p>
                    <div className={styles.button_container}>
                        <button>Web Development</button>
                        <button>Web Design</button>
                    </div>
                    <Link href="#" className={styles.project_link}>Live Prevuew</Link>

                </div>
            </div>
            <div className={styles.project_contain_container2}>
                {/* project1  */}
                <div className={styles.project_contain}>
                    <div>
                        <Image
                            src={project}
                            width={335}
                            height={227}
                            alt="Logo"
                            className={styles.logo}
                        />
                    </div>
                    <h3>interdum mauris amet.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Massa lectus est interdum mauris amet.</p>
                    <div className={styles.button_container}>
                        <button>Web Development</button>
                        <button>Web Design</button>
                    </div>
                    <Link href="#" className={styles.project_link}>Live Prevuew</Link>

                </div>
                {/* project2  */}
                <div className={styles.project_contain}>
                    <div>
                        <Image
                            src={project}
                            width={335}
                            height={227}
                            alt="Logo"
                            className={styles.logo}
                        />
                    </div>
                    <h3>interdum mauris amet.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Massa lectus est interdum mauris amet.</p>
                    <div className={styles.button_container}>
                        <button>Web Development</button>
                        <button>Web Design</button>
                    </div>
                    <Link href="#" className={styles.project_link}>Live Prevuew</Link>

                </div>
                 {/* project3  */}
                <div className={styles.project_contain}>
                    <div>
                        <Image
                            src={project}
                            width={335}
                            height={227}
                            alt="Logo"
                            className={styles.logo}
                        />
                    </div>
                    <h3>interdum mauris amet.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Massa lectus est interdum mauris amet.</p>
                    <div className={styles.button_container}>
                        <button>Web Development</button>
                        <button>Web Design</button>
                    </div>
                    <Link href="#" className={styles.project_link}>Live Prevuew</Link>

                </div>
               
            </div>

        </div>
    )
};

export default Projects;
