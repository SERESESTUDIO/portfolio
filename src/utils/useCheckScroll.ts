import { useEffect, useState } from "react";

export const useCheckScroll = () => {
  const [isOnTop, setIsOnTop] = useState(false);
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", ()=>handleScroll());
  }, []);
  const handleScroll = () => {
    setIsOnTop(window.scrollY < (window.innerHeight / 2) ? true : false);
  };
  return {
    isOnTop,
  };
};
