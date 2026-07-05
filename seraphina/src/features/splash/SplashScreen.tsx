import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboarding/1');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <main
      className="relative min-h-dvh w-full flex flex-col items-center justify-center px-5 overflow-hidden bg-cream-gradient"
      onClick={() => navigate('/onboarding/1')}
      role="presentation"
      aria-label="Angel AI splash screen — tap to continue"
    >
      {/* Atmospheric blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary-container/30 blur-[100px] rounded-full animate-pulse-glow" />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-secondary-container/20 blur-[120px] rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>

      {/* Central cluster */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Logo */}
        <div className="relative mb-6 group">
          <div className="absolute inset-0 bg-primary-container/40 rounded-full blur-2xl animate-pulse-glow opacity-40" />
          <div className="relative w-24 h-24 flex items-center justify-center bg-white rounded-full shadow-nav transition-transform duration-500 hover:scale-105 overflow-hidden p-2">
            <img src="/logo.png" alt="Angel AI Logo" className="w-full h-full object-contain" />
          </div>
        </div>

        {/* Title & tagline */}
        <div className="animate-fade-up space-y-2" style={{ animationDelay: '0.3s', opacity: 0 }}>
          <h1 className="font-jakarta font-bold text-display-lg text-primary tracking-tight">
            Angel AI
          </h1>
          <p className="font-jakarta text-body-lg text-on-surface-variant/80 italic">
            Your AI Guardian
          </p>
        </div>
      </div>

      {/* Bottom loading indicator */}
      <div className="absolute bottom-16 w-full flex flex-col items-center animate-fade-up" style={{ animationDelay: '0.8s', opacity: 0 }}>
        <div className="flex gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0s' }} />
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0.2s' }} />
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0.4s' }} />
        </div>
        <span className="font-inter text-label-sm text-on-surface-variant/60 tracking-widest uppercase">
          Securely Initializing
        </span>
      </div>
    </main>
  );
}
