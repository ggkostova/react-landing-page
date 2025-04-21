import { useState, useEffect } from "react";

const useScreenWidth = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth > 1024); 
    };
  
    useEffect(() => {
      checkScreenSize(); 
      window.addEventListener('resize', checkScreenSize);
  
      return () => {
        window.removeEventListener('resize', checkScreenSize);
      };
    }, []);

    return isLargeScreen;
};


export default useScreenWidth;
