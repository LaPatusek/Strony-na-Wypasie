import { useEffect, useState } from 'react';

interface UseObserverProps {
  current: HTMLElement | null;
}

const useObserver = (obsRef: UseObserverProps): boolean => {
  const [isIntersecting, setIntersecting] = useState<boolean>(false);

  useEffect(() => {
    if (!obsRef.current) return;

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
