import React, { useEffect, useState } from 'react';

interface UseObserverProps {
  current: HTMLElement | null;
}

const useObserver: React.FC<UseObserverProps> = (obsRef) => {
  const [isIntersecting, setIntersecting] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting),
    );

    observer.observe(obsRef.current!);
    return () => {
      observer.disconnect();
    };
  }, [obsRef]);

  return isIntersecting;
};

export default useObserver;
