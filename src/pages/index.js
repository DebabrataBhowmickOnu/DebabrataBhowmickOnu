import React from "react"
import RootLayout from "../component/Layout/RootLayout";

const HomePage = (props) => {
  return (
    <div>
      <h1>This is Home page</h1>
    </div>
  )
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return (

    <RootLayout>{page}</RootLayout>

  )
}