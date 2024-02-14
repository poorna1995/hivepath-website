import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//component that will scroll the window up on every navigation

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
