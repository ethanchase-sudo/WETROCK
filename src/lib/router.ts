import { useState, useEffect, useCallback } from 'react';

export function useRouter() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = useCallback((to: string) => {
    if (to === window.location.pathname) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    window.history.pushState({}, '', to);
    setPath(to);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return { path, navigate };
}

export function matchRoute(pattern: string, actual: string): Record<string, string> | null {
  const patternParts = pattern.split('/').filter(Boolean);
  const actualParts = actual.split('/').filter(Boolean);

  if (patternParts.length !== actualParts.length) return null;

  const params: Record<string, string> = {};
  for (let i = 0; i < patternParts.length; i++) {
    if (patternParts[i].startsWith(':')) {
      params[patternParts[i].slice(1)] = decodeURIComponent(actualParts[i]);
    } else if (patternParts[i] !== actualParts[i]) {
      return null;
    }
  }
  return params;
}
