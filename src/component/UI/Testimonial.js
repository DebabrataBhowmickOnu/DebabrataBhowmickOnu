import React, { useState, useEffect } from "react";
import styles from "@/styles/Testimonial.module.css";
import project from '../../assets/images/icon_image.png';
import Image from "next/image";

const testimonials = [
    {
        text: "“Aaronn was fantastic to work with from start to finish. We were looking for a simple, stand-out logo and he delivered. I tried designing the logo myself thinking I wouldn’t need to pay the money for a professional graphic designer but I was very wrong. Working with Aaronn was worth every penny and was surprisingly affordable! I remember him saying simplicity is key to a successful logo and boy he was right. I can’t thank Aaronn enough for his effort and professionalism. I would recommend him to anyone looking for a design!”",
        author: "-Martin Lee"
    },
    {
        text: "“Aaronn was fantastic to work with from start to finish. We were looking for a simple, stand-out logo and he delivered. I tried designing the logo myself thinking I wouldn’t need to pay the money for a professional graphic designer but I was very wrong. Working with Aaronn was worth every penny and was surprisingly affordable! I remember him saying simplicity is key to a successful logo and boy he was right. I can’t thank Aaronn enough for his effort and professionalism. I would recommend him to anyone looking for a design!”",
        author: "-Jessica Smith"
    },
    {
        text: "“Aaronn was fantastic to work with from start to finish. We were looking for a simple, stand-out logo and he delivered. I tried designing the logo myself thinking I wouldn’t need to pay the money for a professional graphic designer but I was very wrong. Working with Aaronn was worth every penny and was surprisingly affordable! I remember him saying simplicity is key to a successful logo and boy he was right. I can’t thank Aaronn enough for his effort and professionalism. I would recommend him to anyone looking for a design!”",
        author: "-Michael Brown"
    },
];

const Testimonial = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    // Auto-play effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        }, 8000);

        return () => clearInterval(interval); 
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

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

            <div className={styles.slider_item_container}>
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className={`${styles.slider_item} ${currentSlide === index ? styles.active : ''}`}
                    >
                        <p>{testimonial.text}</p>
                        <h3>{testimonial.author}</h3>
                    </div>
                ))}
            </div>

            <div className={styles.dot_pagination}>
                {testimonials.map((_, index) => (
                    <span
                        key={index}
                        className={`${styles.dot} ${currentSlide === index ? styles.activeDot : ''}`}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Testimonial;
