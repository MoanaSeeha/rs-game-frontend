import React from "react";

import Container from "./Container";
import Info from "./Info";
import Contact from "./Contact";

const Main = () => {
  return (
    <div className="main pt-52 md:pt-32 lg:pt-28 relative overflow-x-hidden">
      <Container/>
      <Info/>
      <Contact/>
    </div>
  )
}

export default Main