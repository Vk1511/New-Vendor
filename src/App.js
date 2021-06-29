import React, { useState } from "react";
import VendorMenu from "./Components/VendorMenu/VendorMenu";
import Sidebar from "./Components/Sidebar/Sidebar";
import Content from "./Components/Content/Content";
import "./App.css";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <VendorMenu setToggle={setToggle} toggle={toggle} />
      <Sidebar toggle={toggle} />
      <Content />
    </>
  );
}

export default App;
