import { useEffect } from 'react';

const useSmoothScroll = () => {
  useEffect(() => {
    const handleLinkClick = (e) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute('href');
      if (href.startsWith('#')) {
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleLinkClick);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleLinkClick);
      });
    };
  }, []);
};

export default useSmoothScroll;
