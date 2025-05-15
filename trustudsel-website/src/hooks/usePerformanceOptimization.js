import { useState, useEffect } from 'react';

/**
 * Custom hook for performance optimizations
 * Detects device capabilities and connection speeds to optimize the user experience
 */
const usePerformanceOptimization = () => {
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isSlowConnection, setIsSlowConnection] = useState(false);
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);
  
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsReducedMotion(prefersReducedMotion);
    
    // Check if device is low-end
    const checkDeviceMemory = () => {
      // Use device memory API if available (Chrome only)
      if ('deviceMemory' in navigator) {
        // Less than 4GB of RAM is considered low-end
        return navigator.deviceMemory < 4;
      }
      
      // Fallback - check for user agent signals of low-end devices
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
      
      // If we can't determine, assume desktop is high-end and mobile might be low-end
      return isMobile;
    };
    
    setIsLowEndDevice(checkDeviceMemory());
    
    // Check for slow connection
    const checkConnectionSpeed = () => {
      if ('connection' in navigator) {
        const connection = navigator.connection;
        
        if (connection) {
          // If user has enabled data-saving mode or has slow connection
          if (connection.saveData || 
              connection.effectiveType === 'slow-2g' || 
              connection.effectiveType === '2g' || 
              connection.effectiveType === '3g') {
            return true;
          }
        }
      }
      
      return false;
    };
    
    setIsSlowConnection(checkConnectionSpeed());
    
    // Add event listeners for changes
    if ('connection' in navigator && navigator.connection) {
      const updateConnectionStatus = () => {
        setIsSlowConnection(checkConnectionSpeed());
      };
      
      navigator.connection.addEventListener('change', updateConnectionStatus);
      return () => navigator.connection.removeEventListener('change', updateConnectionStatus);
    }
  }, []);
  
  // Helper functions that components can use
  const getAnimationConfig = (fullAnimations, reducedAnimations) => {
    if (isReducedMotion || isSlowConnection || isLowEndDevice) {
      return reducedAnimations;
    }
    return fullAnimations;
  };
  
  return {
    isReducedMotion,
    isSlowConnection,
    isLowEndDevice,
    // Should enable heavy animations?
    shouldEnableAnimations: !(isReducedMotion || isSlowConnection || isLowEndDevice),
    // Helper to get appropriate animation configuration
    getAnimationConfig
  };
};

export default usePerformanceOptimization; 