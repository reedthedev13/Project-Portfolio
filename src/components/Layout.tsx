import type { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./NavBar";
import { Footer } from "../pages/Footer";

interface LayoutProps {
  children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children || <Outlet />}</main>
      <Footer />
    </>
  );
};

export default Layout;
