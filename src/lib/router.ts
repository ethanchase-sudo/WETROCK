import { useState, useEffect, useCallback } from 'react';

// Automatically gets your base path (/WETROCK) from Vite's base config
const BASE_PATH = import.meta.env.BASE_URL.replace(/\/$/, '');

function normalizePath(pathname: string): string {
  if (BASE_PATH && pathname.startsWith(BASE_PATH)) {
    const stripped = pathname.slice(BASE_PATH.length);
    return stripped === '' ? '/' : stripped;
  }
  return pathname || '/';
}

export function useRouter() {
  const [path, setPath] = useState(() => normalizePath(window.location.pathname));

  useEffect(() => {
    const onPop = () => setPath(normalizePath(window.location.pathname));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = useCallback((to: string) => {
    // Add the base path (/WETROCK) when pushing to browser history
    const fullTarget = `${BASE_PATH}${to.startsWith('/') ? to : '/' + to}`;
    const currentNormalized = normalizePath(window.location.pathname);

    if (to === currentNormalized) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    window.history.pushState({}, '', fullTarget);
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
