import { Injectable, signal, computed } from '@angular/core';
import pt from '../data/i18n/pt.json';
import en from '../data/i18n/en.json';

export type Lang = 'pt' | 'en';

type Translations = typeof pt;

@Injectable({ providedIn: 'root' })
export class I18nService {
  readonly lang = signal<Lang>(this.loadSavedLang());
  readonly t = computed<Translations>(() => (this.lang() === 'pt' ? pt : en) as Translations);

  toggle(): void {
    const next: Lang = this.lang() === 'pt' ? 'en' : 'pt';
    this.lang.set(next);
    try {
      localStorage.setItem('lang', next);
    } catch {
      // localStorage unavailable (SSR / private mode)
    }
  }

  private loadSavedLang(): Lang {
    try {
      const saved = localStorage.getItem('lang');
      return saved === 'en' ? 'en' : 'pt';
    } catch {
      return 'pt';
    }
  }
}
