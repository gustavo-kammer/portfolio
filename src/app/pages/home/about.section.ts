import { Component, signal, inject } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { ScrollRevealDirective } from '../../core/scroll-reveal.directive';
import { BIO_SHORT, BIO_LONG, SKILLS, PORTRAIT } from '../../data/config';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ScrollRevealDirective],
  template: `
    <section id="about" class="section section-border">
      <div class="container">
        <div scrollReveal style="margin-bottom: clamp(3rem, 6vw, 5rem);">
          <p class="mono" style="color: #8A8A8A; margin: 0 0 0.75rem;">{{ t().about.title }}</p>
          <hr class="hairline" />
        </div>

        <div class="about-grid">
          <div scrollReveal>
            <div class="portrait-wrapper">
              <img
                src="assets/images/eu.jpeg"
                alt="Foto de perfil"
                class="portrait-img"
                loading="lazy"
                width="400"
                height="500"
              />
            </div>
          </div>

          <!-- Right: bio + skills -->
          <div scrollReveal [scrollRevealDelay]="120">
            <p class="about-bio">{{ bioShort[lang()] }}</p>

            <!-- Skills: 3 colunas com título, hairline e itens -->
            <div class="skills-columns">
              @for (group of skillGroups; track group.key) {
                <div class="skills-col">
                  <p class="mono skills-col-title">{{ group.label[lang()] }}</p>
                  <hr class="hairline skills-col-divider" />
                  <ul class="skills-col-list" role="list">
                    @for (item of group.items; track item) {
                      <li class="mono skills-col-item">{{ item }}</li>
                    }
                  </ul>
                </div>
              }
            </div>

            <!-- Expandable bio long -->
            @if (hasBioLong) {
              <button
                class="expand-btn"
                (click)="expanded.set(!expanded())"
                [attr.aria-expanded]="expanded()"
              >
                {{ expanded() ? t().about.read_less : t().about.read_more }}
              </button>

              <div
                class="bio-long"
                [class.collapsed]="!expanded()"
                [class.expanded]="expanded()"
                [attr.aria-hidden]="!expanded()"
              >
                <p class="about-bio" style="margin-top: 1.5rem;">{{ bioLong[lang()] }}</p>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AboutSectionComponent {
  protected readonly i18n = inject(I18nService);
  protected readonly t = this.i18n.t;
  protected readonly lang = this.i18n.lang;

  protected readonly bioShort = BIO_SHORT;
  protected readonly bioLong = BIO_LONG;
  protected readonly portrait = PORTRAIT;
  protected readonly expanded = signal(false);
  protected readonly hasBioLong = BIO_LONG.pt.length > 0 && BIO_LONG.en.length > 0;

  protected readonly skillGroups = [
    { key: 'design', label: SKILLS.design.label, items: SKILLS.design.items },
    { key: 'development', label: SKILLS.development.label, items: SKILLS.development.items },
    { key: 'process', label: SKILLS.process.label, items: SKILLS.process.items },
  ];
}
