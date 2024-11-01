import React from "react"
import RootLayout from "../component/Layout/RootLayout";
import Banner from "@/component/UI/Banner";
import Work_company from "@/component/UI/Work_company";
import Whyme from "@/component/UI/Why_me";
import Experience from "@/component/UI/Experience";
import Skills from "@/component/UI/Skills";
import Projects from "@/component/UI/Projects";
import Testimonial from "@/component/UI/Testimonial";
import BookCall from "@/component/UI/Book_call";
import SocialMedia from "@/component/UI/SocialMedia";


const HomePage = (props) => {
  return (
    <div>
      <Banner />
      <div className="Work_company content-container">
        <Work_company />
      </div>
      <div className="why_me content-container">
        <Whyme/>
      </div>
      <div className="experience content-container">
        <Experience/>
      </div>
      <div className="Skills content-container">
        <Skills/>
      </div>
      <div className="Projects content-container">
        <Projects/>
      </div>
      <div className="Projects content-container">
        <Testimonial/>
      </div>
      <div className="BookCall content-container">
        <BookCall/>
      </div>
      <div className="SocialMedia">
        <SocialMedia/>
      </div>
    </div>
  )
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return (

    <RootLayout>{page}</RootLayout>

  )
}