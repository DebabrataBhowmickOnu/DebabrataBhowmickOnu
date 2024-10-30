import React from "react"
import Navbar from "../UI/Navbar";

const RootLayout = ({children}) => {
    return (
        <div className="main_container">
            <div>
                <Navbar/>
            </div>


            <section className="container">
               {children}
            </section>


            <footer>
                <p>&copy; 2024 YourTemplate. All Rights Reserved.</p>
            </footer>
        </div>
    )
};

export default RootLayout;
