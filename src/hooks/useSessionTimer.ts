import { useEffect, useRef, useState } from "react";

export const useSessionTimer = () => {
  const [duration, setDuration] = useState(0);
 const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);


  useEffect(() => {
    const startTime = Date.now();

    intervalRef.current = setInterval(() => {
      setDuration(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return duration;
};
