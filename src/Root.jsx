import {Outlet} from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function Root() {
  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}
