import i18n from 'config/i18n';
import icons from 'assets/data/icons.json';

export function windowRedirect(url: string) {
  if (typeof window !== 'undefined') {
    window.location.href = url;
  }
}

export function windowOpen(url: string) {
  if (typeof window !== 'undefined') {
    window.open(url, '_blank');
  }
}

export function isCorrectIconName(name: ReactNode): boolean {
  return isString(name) && has(icons, name);
}

export function translate(key: string, data: {} = {}): string {
  return i18n.t(key, data);
}

export function uuidv4(): string {
  return ('' + [1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (ch) => {
    const c = Number(ch);
    return (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16);
  });
}
