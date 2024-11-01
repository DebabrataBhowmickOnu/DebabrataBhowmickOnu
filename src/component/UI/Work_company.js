import Image from "next/image";
import React, { useEffect } from "react";
import logo1 from '../../assets/images/logo1.png';
import logo2 from '../../assets/images/logo2.png';
import logo3 from '../../assets/images/logo3.png';
import logo4 from '../../assets/images/logo4.png';
import logo5 from '../../assets/images/logo5.png';
import styles from "@/styles/Work_company.module.css";
import 'tiny-slider/dist/tiny-slider.css';
import { tns } from "tiny-slider";

const Work_company = () => {
    useEffect(() => {
        const slider = tns({
            container: '.my-slider',
            items: 8,
            gutter: 20,
            loop: true,
            autoplay: true,
            autoplayHoverPause: true,
            autoplayButtonOutput: false,
            controls: false,
            nav: false,
            autoplayDirection: 'forward',
            speed: 4000,
            autoplayTimeout: 0,
            preventActionWhenRunning: true,
            mouseDrag: true,
            responsive: {
                0: {
                    items: 3,
                    gutter: 15,
                },
                768: {
                    items: 6,
                    gutter: 15,
                },
                981: {
                    items: 8,
                }
            }
        });

        return () => {
            slider.destroy();
        };
    }, []);

    return (
        <div className={styles.company_logo}>
            <div className="my-slider">
                <div>
                    <Image src={logo1} width={124} height={34} alt="Logo 1" />
                </div>
                <div>
                    <Image src={logo2} width={124} height={34} alt="Logo 2" />
                </div>
                <div>
                    <Image src={logo3} width={124} height={34} alt="Logo 3" />
                </div>
                <div>
                    <Image src={logo4} width={124} height={34} alt="Logo 4" />
                </div>
                <div>
                    <Image src={logo5} width={124} height={34} alt="Logo 5" />
                </div>
                <div>
                    <Image src={logo5} width={124} height={34} alt="Logo 5" />
                </div>
                <div>
                    <Image src={logo5} width={124} height={34} alt="Logo 5" />
                </div>
                <div>
                    <Image src={logo5} width={124} height={34} alt="Logo 5" />
                </div>
                <div>
                    <Image src={logo5} width={124} height={34} alt="Logo 5" />
                </div>
               
            </div>
        </div>
    );
};

export default Work_company;
