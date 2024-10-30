import React from "react"
import RootLayout from "../component/Layout/RootLayout";
import Banner from "@/component/UI/Banner";
import Work_company from "@/component/UI/Work_company";

const HomePage = (props) => {
  return (
    <div>
      <Banner />
      <div className="lg:my-28 my-16">
        <Work_company />
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