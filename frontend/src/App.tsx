import { Outlet, useLocation } from "react-router-dom";
import Footer from "./home/Footer";
import Homepage from "./home/Homepage";
import Navbar from "./home/Navbar";
import ScrollToTop from "./utils/ScrollToTop";

export default function App() {
  const location = useLocation();

  return (
    <>
    <Navbar />
    <ScrollToTop />
    {location.pathname === "/" ? <Homepage /> : <Outlet />}
    <Footer />
  </>  )
}
