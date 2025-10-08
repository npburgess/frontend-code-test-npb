import { useLocation } from 'react-router-dom';

export const useIsLinkActive = () => {
  const location = useLocation();
  
  const isLinkActive = (href: string): boolean => {
    if (href === '/') {
      return location.pathname === '/' || location.pathname === '/home';
    }
    return location.pathname === href;
  };

  return isLinkActive;
};
