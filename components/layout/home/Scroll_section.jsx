import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const ScrollNextsection = () => {
  const [isTopHeader, setIsTopHeader] = useState(false);
  const handleScrollToBottom = () => {
    const height = window.innerHeight;
    window.scrollTo({
      top: height,
      behavior: "smooth",
    });
  };
  const changePositionOfHeader = () => {
    if (window.scrollY > window.innerHeight / 2) {
      !isTopHeader && setIsTopHeader(true);
    } else {
      setIsTopHeader(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changePositionOfHeader);
    return () => window.removeEventListener("scroll", changePositionOfHeader);
  }, []);
  return (
    <div
      className="header_scroll_div__container py-3 d-flex align-items-center justify-content-center"
      onClick={handleScrollToBottom}
      style={{
        cursor: "pointer",
        position: "relative",
        transform: "translate(-18%,-90%)",
      }}
    >
      <img src="/images/home/Group 60.png" />
    </div>
  );
};

export default ScrollNextsection;
