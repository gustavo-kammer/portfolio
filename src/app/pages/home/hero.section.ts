import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { ScrollRevealDirective } from '../../core/scroll-reveal.directive';
import { NAME, TAGLINE, CITY } from '../../data/config';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ScrollRevealDirective],
  template: `
    <section id="hero" class="section section-border">
      <div class="container hero-layout">
        <!-- Left: name + tagline -->
        <div scrollReveal>
          <h1 class="h1" style="color: #1A1A1A;">{{ name }}</h1>
          <p class="hero-tagline">{{ tagline[lang()] }}</p>
        </div>

        <!-- Right: metadata block -->
        <div scrollReveal [scrollRevealDelay]="120">
          <hr class="hairline" style="margin-bottom: 1.5rem;" />
          <ul class="hero-meta-list" role="list">
            <li class="mono" style="color: #8A8A8A;">{{ t().hero.available }}</li>
            <li class="mono" style="color: #8A8A8A;">Based in Brazil</li>
            <li class="mono" style="color: #8A8A8A;">{{ currentYear }}</li>
          </ul>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="container">
        <div class="hero-scroll" aria-hidden="true">
          <span class="scroll-arrow">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <line
                x1="7"
                y1="1"
                x2="7"
                y2="13"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <polyline
                points="3,9 7,13 11,9"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <span class="mono" style="color: #8A8A8A;">{{ t().hero.scroll }}</span>
        </div>
      </div>
    </section>
  `,
})
export class HeroSectionComponent {
  protected readonly i18n = inject(I18nService);
  protected readonly t = this.i18n.t;
  protected readonly lang = this.i18n.lang;
  protected readonly name = NAME;
  protected readonly tagline = TAGLINE;
  protected readonly city = CITY;
  protected readonly currentYear = new Date().getFullYear();
}
