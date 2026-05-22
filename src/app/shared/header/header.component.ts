import { Component, signal, inject, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../core/i18n.service';
import { NAME } from '../../data/config';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header class="site-header" [class.scrolled]="scrolled()">
      <div class="container header-inner">
        <a routerLink="/" class="brand-link" aria-label="Voltar ao topo">{{ name }}</a>

        <nav class="desktop-nav" aria-label="Navegação principal">
          <a routerLink="/" fragment="projects" class="nav-link">{{ t().nav.work }}</a>
          <a routerLink="/" fragment="about" class="nav-link">{{ t().nav.about }}</a>
          <a routerLink="/" fragment="contact" class="nav-link">{{ t().nav.contact }}</a>
          <button
            class="lang-btn"
            (click)="i18n.toggle()"
            [attr.aria-label]="t().nav.toggle_lang"
          >{{ i18n.lang() === 'pt' ? 'EN' : 'PT' }}</button>
        </nav>

        <button
          class="hamburger-btn"
          (click)="menuOpen.set(!menuOpen())"
          [attr.aria-expanded]="menuOpen()"
          [attr.aria-label]="menuOpen() ? t().nav.close_menu : t().nav.open_menu"
          aria-controls="mobile-menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            @if (menuOpen()) {
              <line x1="3" y1="3" x2="19" y2="19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <line x1="19" y1="3" x2="3" y2="19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            } @else {
              <line x1="3" y1="7" x2="19" y2="7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <line x1="3" y1="15" x2="19" y2="15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            }
          </svg>
        </button>
      </div>
    </header>

    @if (menuOpen()) {
      <div
        id="mobile-menu"
        class="mobile-overlay"
        role="dialog"
        aria-modal="true"
        [attr.aria-label]="t().nav.open_menu"
      >
        <button
          class="mobile-close-btn"
          (click)="menuOpen.set(false)"
          [attr.aria-label]="t().nav.close_menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            <line x1="3" y1="3" x2="19" y2="19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="19" y1="3" x2="3" y2="19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </button>

        <nav class="mobile-nav" aria-label="Navegação principal">
          <a routerLink="/" fragment="projects" class="mobile-nav-link" (click)="menuOpen.set(false)">
            {{ t().nav.work }}
          </a>
          <a routerLink="/" fragment="about" class="mobile-nav-link" (click)="menuOpen.set(false)">
            {{ t().nav.about }}
          </a>
          <a routerLink="/" fragment="contact" class="mobile-nav-link" (click)="menuOpen.set(false)">
            {{ t().nav.contact }}
          </a>
        </nav>

        <div class="mobile-overlay-footer">
          <button class="lang-btn" (click)="i18n.toggle()" [attr.aria-label]="t().nav.toggle_lang">
            {{ i18n.lang() === 'pt' ? 'EN' : 'PT' }}
          </button>
        </div>
      </div>
    }
  `,
})
export class HeaderComponent {
  protected readonly i18n = inject(I18nService);
  protected readonly t = this.i18n.t;
  protected readonly name = NAME;
  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 24);
  }
}
