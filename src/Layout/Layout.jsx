import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { ToastContainer, Bounce } from "react-toastify";
import ScrollToTop from "../Components/ScrollToTop";

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <div className="font-poppins bg-lm-background dark:bg-dm-background">
        {/* toast */}
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
        />
        <Navbar />
        <div className="container mx-auto">
          <Outlet />
        </div>
        <div className="container mx-auto">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
