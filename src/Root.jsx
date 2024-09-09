import {Outlet} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";

export default function Root() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}
