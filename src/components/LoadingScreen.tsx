import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  minDuration?: number;
}

export function LoadingScreen({ minDuration = 800 }: LoadingScreenProps) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, minDuration);

    return () => clearTimeout(timer);
  }, [minDuration]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[10000] bg-[#05050A] flex items-center justify-center">
      <div className="text-center space-y-6">
        <img 
          src="https://ik.imagekit.io/d9541kfaqh/logo.png" 
          alt="AgenticFlow" 
          width="80" 
          height="80"
          className="w-20 h-20 mx-auto animate-pulse"
        />
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-[#39FF14] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-[#39FF14] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 bg-[#39FF14] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
}

export function Spinner({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4',
  };

  return (
    <div
      className={`${sizeClasses[size]} border-[#39FF14]/30 border-t-[#39FF14] rounded-full animate-spin`}
      role="status"
      aria-label="Loading"
    />
  );
}
