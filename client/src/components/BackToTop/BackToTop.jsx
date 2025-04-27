import { useEffect, useState } from "react";
import { FiChevronUp } from "react-icons/fi"; // Cleaner ">" style upward

import "./BackToTop.css";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`back-to-top-button ${isVisible ? "show" : ""}`}
    >
      <FiChevronUp size={28} />
    </button>
  );
};

export default BackToTop;
