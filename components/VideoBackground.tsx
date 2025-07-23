'use client';

import { useEffect, useState } from 'react';

interface VideoBackgroundProps {
  videoUrl: string;
  posterUrl: string;
  className?: string;
  children?: React.ReactNode;
}

export default function VideoBackground({ 
  videoUrl, 
  posterUrl, 
  className = '', 
  children 
}: VideoBackgroundProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = document.createElement('video');
    video.src = videoUrl;
    video.onloadeddata = () => setIsVideoLoaded(true);
    video.onerror = () => setHasError(true);
  }, [videoUrl]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Video Background */}
      {isVideoLoaded && !hasError && (
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
          poster={posterUrl}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}
      
      {/* Fallback Image Background */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${posterUrl})` }}
      />
      
      {/* Content Overlay */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}