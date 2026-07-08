import React, { useEffect, useState, type ReactNode } from 'react';
import {
  nativePlatform,
  nativeSplashScreen,
  nativeStatusBar,
  nativeApp,
  nativeNetwork,
  nativeOrientation,
} from './services';
import { PlatformContext } from './context';
import type { PlatformInfo, NetworkStatusInfo } from './types';

export function PlatformProvider({ children }: { children: ReactNode }) {
  const [platformInfo, setPlatformInfo] = useState<PlatformInfo>({
    platform: 'web',
    isNative: false,
    isIOS: false,
    isAndroid: false,
    isWeb: true,
    isTablet: false,
  });
  const [networkStatus, setNetworkStatus] = useState<NetworkStatusInfo>({
    connected: true,
    connectionType: 'wifi',
  });

  useEffect(() => {
    const initializePlatform = async () => {
      try {
        const info = await nativePlatform.getInfo();
        setPlatformInfo(info);
        if (info.isNative && !info.isTablet) {
          await nativeOrientation.lockPortrait();
        }
      } catch {
        // Defaults already describe the web fallback.
      }

      try {
        const status = await nativeNetwork.getStatus();
        setNetworkStatus(status);
      } catch {
        setNetworkStatus({ connected: navigator.onLine, connectionType: navigator.onLine ? 'wifi' : 'none' });
      }

      try {
        await nativeStatusBar.setStyle(true);
        await nativeStatusBar.setBackgroundColor('#fff8f7');
      } catch {
        // Status bar is native-only and optional.
      }
    };

    void initializePlatform();

    // 2. Initialize network & listener
    const removeNetListener = nativeNetwork.onStatusChange(setNetworkStatus);

    // 4. Hide Splash Screen smoothly once React has mounted
    const timer = setTimeout(() => {
      void nativeSplashScreen.hide();
    }, 400);

    // 5. Android Native Back Button behavior
    const removeBackListener = nativeApp.onBackButton((canGoBack) => {
      const path = window.location.pathname;
      const isRootPath = path === '/' || path === '/home' || path === '/auth';

      if (!isRootPath && canGoBack && window.history.length > 1) {
        window.history.back();
      } else {
        // Exit app gracefully if on root screen in Android
        nativeApp.exitApp();
      }
    });

    return () => {
      clearTimeout(timer);
      removeNetListener();
      removeBackListener();
    };
  }, []);

  return (
    <PlatformContext.Provider value={{ platformInfo, networkStatus }}>
      {children}
      {/* Graceful Offline UI Banner */}
      {!networkStatus.connected && (
        <div
          role="alert"
          className="fixed top-0 left-0 right-0 z-[100] bg-error text-on-error px-4 py-2 text-center font-inter text-label-sm font-semibold shadow-md transition-all duration-300"
          style={{ paddingTop: 'max(8px, env(safe-area-inset-top))' }}
        >
          ⚠️ You are offline. Safety features and Evidence Vault are running in offline cached mode.
        </div>
      )}
    </PlatformContext.Provider>
  );
}
