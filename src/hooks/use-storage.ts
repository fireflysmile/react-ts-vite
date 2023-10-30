// eslint-disable-next-line max-lines-per-function
export default function useStorage() {
  const parseJSON = <T>(value: string | null): T | undefined => {
    try {
      return value === 'undefined' ? undefined : JSON.parse(value ?? '');
    } catch {
      return undefined;
    }
  };

  const setSessionStorage = <T>(key: string, value: T): void => {
    if (typeof window !== 'undefined') {
      window.sessionStorage.setItem(key, JSON.stringify(value));
    }
  };

  const setLocalStorage = <T>(key: string, value: T): void => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  };

  const getSessionStorage = <T>(key: string): T | null => {
    if (typeof window !== 'undefined') {
      const value = window.sessionStorage.getItem(key);
      try {
        if (value) {
          return parseJSON(value);
        }
        return value as unknown as T;
      } catch (e) {
        // handle error
      }
      return value as unknown as T;
    }
    return null;
  };

  const getLocalStorage = <T>(key: string): T | null => {
    if (typeof window !== 'undefined') {
      const value = window.localStorage.getItem(key);
      try {
        if (value) {
          return parseJSON(value);
        }
        return value as unknown as T;
      } catch (e) {
        // handle error
      }
      return value as unknown as T;
    }
    return null;
  };

  const removeSessionStorage = (key: string): void => {
    if (typeof window !== 'undefined') {
      window.sessionStorage.removeItem(key);
    }
  };

  const removeLocalStorage = (key: string): void => {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(key);
    }
  };

  const clearAllSessionStorage = (): void => {
    if (typeof window !== 'undefined') {
      window.sessionStorage.clear();
    }
  };

  const clearAllLocalStorage = (): void => {
    if (typeof window !== 'undefined') {
      window.localStorage.clear();
    }
  };

  return {
    setLocalStorage,
    setSessionStorage,
    getSessionStorage,
    getLocalStorage,
    removeSessionStorage,
    removeLocalStorage,
    clearAllSessionStorage,
    clearAllLocalStorage,
  };
}
