import { useEffect, useState } from "react";

export const useSkeletonLoading = (loading: boolean, delay: number = 100) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  useEffect(() => {
    if (!loading) {
      const timeoutId = setTimeout(() => setLoaded(true), delay);
      return () => clearTimeout(timeoutId);
    } else {
      setLoaded(false);
    }
  }, [loading, delay]);

  return loaded;
};
