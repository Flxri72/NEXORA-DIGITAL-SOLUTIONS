import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';

interface PageOverlayProps {
  isVisible: boolean;
}

export function PageOverlay({ isVisible }: PageOverlayProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoEnded, setIsVideoEnded] = useState(false);

  useEffect(() => {
    if (isVisible && videoRef.current) {
      videoRef.current.play();
    }
  }, [isVisible]);

  const handleVideoEnd = () => {
    setIsVideoEnded(true);
  };

  return (
    <div
      className={cn(
        'fixed inset-0 z-[9999] bg-[#05060B] flex items-center justify-center transition-opacity duration-1000',
        isVisible && !isVideoEnded ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        onEnded={handleVideoEnd}
        className="w-full h-full object-cover"
        muted
        playsInline
      >
        <source src="/images/0327(1).mp4" type="video/mp4" />
      </video>
    </div>
  );
}
