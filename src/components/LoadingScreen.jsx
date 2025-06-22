import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-darkBlueThm z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Loading Animation */}
        <div className="relative">
          <div className="w-20 h-20 border-4 border-greyThm border-t-cyanThm rounded-full animate-spin mx-auto mb-6"></div>
          <div
            className="absolute inset-0 w-20 h-20 border-4 border-transparent border-t-whiteThm/30 rounded-full animate-spin mx-auto"
            style={{
              animationDuration: "0.8s",
              animationDirection: "reverse",
            }}></div>
        </div>

        {/* Loading Text */}
        <h2 className="text-2xl font-bold text-whiteThm mb-2">Loading...</h2>
        <p className="text-whiteThm/70">
          Preparing an amazing experience for you
        </p>
        {/* Progress Bar */}
        <div className="w-64 h-1 bg-greyThm rounded-full mx-auto mt-6 overflow-hidden">
          <div className="h-full bg-cyanThm rounded-full loading-progress"></div>
        </div>
      </div>
    </div>
  );
}
