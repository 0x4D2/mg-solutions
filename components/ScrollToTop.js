// components/ScrollToTop.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const ScrollToTop = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      // Sofortiger Reset
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      
      // Container Reset
      const mainContainer = document.querySelector('.main-container');
      if (mainContainer) mainContainer.scrollTop = 0;
      
      // Fallback nach 100ms
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
        if (mainContainer) mainContainer.scrollTop = 0;
      }, 100);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return null;
};

export default ScrollToTop;