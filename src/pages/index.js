import React from "react"
import RootLayout from "../component/Layout/RootLayout";
import Banner from "@/component/UI/Banner";

const HomePage = (props) => {
  return (
    <div>
      <Banner/>
    </div>
  )
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return (

    <RootLayout>{page}</RootLayout>

  )
}