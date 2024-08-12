import ReactDOM from "react-dom/client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Props from "./Props";
import Props1 from "./Props1";
import Button from "./Button"
import UpdateNum from "./UpdateNum";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Navbar />
    <Home />
    <About />
    <Service /> */}
    {/* <Props1/> */}
    {/* <Button/> */}
    <UpdateNum/>
  </React.StrictMode>
);
