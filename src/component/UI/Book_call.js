import React from "react"
import styles from "@/styles/BookCall.module.css";
import skills1 from '../../assets/images/skills1.png';
import { InlineWidget } from "react-calendly";

const BookCall = () => {
    return (
        <div className={styles.bookCall_container}>
            <div className={styles.bookCall_contain}>
                <h2>Book a <span>Call now!</span></h2>
                <p>Lets collaborate to bring your vision to life. Contact me today to discuss your project and <br></br>
                    lets embark on a journey to elevate your online presence together.</p>
            </div>

            <div className={styles.contact_container}>
                <div>
                    <h3>30 Minute Meeting</h3>
                    <p>30 Min</p>

                </div>
                <div>
                    <InlineWidget
                        url="https://calendly.com/shuvoghosh1610/30-minutes-meeting"
                        styles={{ height: "100vh" }}
                    />
                </div>
            </div>

        </div>
    )
};

export default BookCall;
