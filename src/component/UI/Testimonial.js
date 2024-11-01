import React, { useEffect } from "react";
import styles from "@/styles/Testimonial.module.css";
import project from '../../assets/images/icon_image.png';
import Image from "next/image";
import { tns } from "tiny-slider"; 
import 'tiny-slider/dist/tiny-slider.css'; 

const Testimonial = () => {
    useEffect(() => {
        // Initialize Tiny Slider
        const slider = tns({
            container: '.slider_item_container',
            items: 3,
            slideBy: 'page',
            autoplay: true,
            controls: false,
            speed: 3000,
            nav: true,
            mouseDrag: true,
            autoplayButtonOutput: false,
            responsive: {
                0: {
                    items: 1,
                    gutter: 15,
                },
                768: {
                    items: 1,
                    gutter: 15,
                },
                981: {
                    items: 1,
                },
                1200: {
                    items: 3,
                }
            }
         
        });

        return () => {
            slider.destroy();
        };
    }, []);

    return (
        <div className={styles.Testimonial_container}>
            <div className={styles.Testimonial_container_header}>
                <h2>Customer Testimonial</h2>
                <div>
                    <Image
                        src={project}
                        width={199}
                        height={183}
                        alt="Logo"
                        className={styles.logo}
                    />
                </div>
            </div>

            <div className="slider_item_container">
                <div>
                    <p>Aaronn was fantastic to work with from start to finish. We were looking for a </p>
                    <h3>-Michael Brown</h3>
                </div>
                <div>
                    <p>Aaronn was fantastic to work with from start to finish...</p>
                    <h3>-Michael Brown</h3>
                </div>
                <div>
                    <p>Aaronn was fantastic to work with from start to finish...</p>
                    <h3>-Michael Brown</h3>
                </div>
                <div>
                    <p>Aaronn was fantastic to work with from start to finish...</p>
                    <h3>-Michael Brown</h3>
                </div>
                <div>
                    <p>Aaronn was fantastic to work with from start to finish...</p>
                    <h3>-Michael Brown</h3>
                </div>
                <div>
                    <p>Aaronn was fantastic to work with from start to finish...</p>
                    <h3>-Michael Brown</h3>
                </div>
               
            </div>

            <div className={styles.dot_pagination}></div>
        </div>
    );
};

export default Testimonial;
