import React, { ReactNode, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

interface LayoutWrapperProps {
  children: ReactNode;
}
const Layout: React.FC<LayoutWrapperProps> = ({ children }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    const html = document.documentElement;
    const originalScrollBehavior = html.style.scrollBehavior;

    html.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    html.style.scrollBehavior = originalScrollBehavior;
  }, [pathname]);
  return (
    <div className="relative min-h-screen flex flex-col justify-between">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
