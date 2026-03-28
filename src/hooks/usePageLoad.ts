import { useEffect, useState } from 'react';

export function usePageLoad(delay: number = 100) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    // Wait for video to end or delay whichever is longer
    const handlePageReady = () => {
      // Give video time to play and fade out (video duration + fade animation)
      // Typical video duration: 3-5 seconds + 1 second fade = 4-6 seconds
      const videoAndFadeDuration = 5500; // 5.5 seconds

      setTimeout(() => {
        setShowOverlay(false);
        setTimeout(() => {
          setIsLoaded(true);
        }, 500);
      }, Math.max(delay, videoAndFadeDuration));
    };

    if (document.readyState === 'complete') {
      handlePageReady();
    } else {
      window.addEventListener('load', handlePageReady);
      return () => window.removeEventListener('load', handlePageReady);
    }
  }, [delay]);

  return { isLoaded, showOverlay };
}
