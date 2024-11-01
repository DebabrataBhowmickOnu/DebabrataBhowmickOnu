import React from "react"
import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";

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
               <Footer/>
            </footer>
        </div>
    )
};

export default RootLayout;
