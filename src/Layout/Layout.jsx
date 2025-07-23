import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Layout = () => {
  return (
    <div className="font-poppins bg-lm-background dark:bg-dm-background">
      <Navbar />
      <div className="container mx-auto">
        <Outlet />
      </div>
      <div className="container mx-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
