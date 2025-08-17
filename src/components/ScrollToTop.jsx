import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // Scroll to top when page is refreshed
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);

  return null;
};

export default ScrollToTop;
