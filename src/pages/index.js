import React from "react"
import RootLayout from "../component/Layout/RootLayout";
import Banner from "@/component/UI/Banner";
import Work_company from "@/component/UI/Work_company";
import Whyme from "@/component/UI/Why_me";
import Experience from "@/component/UI/Experience";
import Skills from "@/component/UI/Skills";
import Projects from "@/component/UI/Projects";
import Testimonial from "@/component/UI/Testimonial";


const HomePage = (props) => {
  return (
    <div>
      <Banner />
      <div className="Work_company">
        <Work_company />
      </div>
      <div className="why_me">
        <Whyme/>
      </div>
      <div className="experience">
        <Experience/>
      </div>
      <div className="Skills">
        <Skills/>
      </div>
      <div className="Projects">
        <Projects/>
      </div>
      <div className="Projects">
        <Testimonial/>
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