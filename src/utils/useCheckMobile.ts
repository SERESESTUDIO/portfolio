import { useEffect, useState } from "react";

export const useCheckMobile = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(()=>{
      checkIfIsMobile();
      window.addEventListener('resize', ()=>checkIfIsMobile());
    },[]);
    const checkIfIsMobile = () =>{
      const isMobile = window.matchMedia("(any-pointer:coarse)").matches;
      setIsMobile((window.innerWidth < 800 || isMobile) ? true : false);
    };
  return {
    isMobile
  }
}
