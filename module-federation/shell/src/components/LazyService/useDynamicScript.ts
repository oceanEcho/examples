import { useEffect, useState } from 'react';

export const useDynamicScript = (url?: string): { ready: boolean; failed: boolean } => {
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!url) {
      return;
    }

    const script = document.createElement('script');

    script.src = url;
    script.type = 'text/javascript';
    script.async = true;

    setReady(false);
    setFailed(false);

    script.onload = (): void => {
      console.log(`Dynamic Script Loaded: ${url}`);
      setReady(true);
    };

    script.onerror = (): void => {
      console.error(`Dynamic Script Error: ${url}`);
      setReady(false);
      setFailed(true);
    };

    document.head.appendChild(script);

    return (): void => {
      console.log(`Dynamic Script Removed: ${url}`);
      document.head.removeChild(script);
    };
  }, [url]);

  return {
    ready,
    failed,
  };
};
