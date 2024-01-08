import { useEffect, useState } from 'react';

const useResponsiveLayout = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleResize = () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;
    const newIsMobile = newWidth <= 767 || window.outerWidth <= 767;

    setWidth(newWidth);
    setHeight(newHeight);
    setIsMobile(newIsMobile);
  };

  useEffect(() => {
    handleResize();
    setIsLoaded(true);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width,
    height,
    isMobile,
    isLoaded,
  };
};

export default useResponsiveLayout;
