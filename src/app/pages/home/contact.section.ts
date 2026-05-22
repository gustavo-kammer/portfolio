import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { ScrollRevealDirective } from '../../core/scroll-reveal.directive';
import { EMAIL, CITY, SOCIALS, NAME } from '../../data/config';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ScrollRevealDirective],
  template: `
    <section id="contact" class="section">
      <div class="container">

        <div scrollReveal>
          <p class="mono" style="color: #8A8A8A; margin: 0 0 0.75rem;">{{ t().contact.available }}</p>
          <hr class="hairline" style="margin-bottom: 2rem;">
          <p style="color: #4A4A4A; font-size: 1.125rem; margin: 0;">{{ t().contact.opening }}</p>
          <a
            [href]="'mailto:' + email"
            class="email-link"
            [attr.aria-label]="'Enviar email para ' + email"
          >{{ email }}</a>
        </div>

        <!-- Social links -->
        @if (hasSocials) {
          <div class="social-links" scrollReveal [scrollRevealDelay]="80">
            @if (socials['linkedin']) {
              <a [href]="socials['linkedin']" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                LinkedIn
              </a>
            }
            @if (socials['behance']) {
              <a [href]="socials['behance']" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="Behance">
                Behance
              </a>
            }
            @if (socials['dribbble']) {
              <a [href]="socials['dribbble']" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="Dribbble">
                Dribbble
              </a>
            }
            @if (socials['github']) {
              <a [href]="socials['github']" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                GitHub
              </a>
            }
          </div>
        }

        <!-- Footer bar -->
        <div class="footer-bar" style="margin-top: clamp(3rem, 6vw, 5rem);">
          <span class="mono" style="color: #8A8A8A;">&copy; {{ currentYear }} {{ name }} &middot; {{ city }}</span>
          <button
            class="lang-btn"
            (click)="i18n.toggle()"
            [attr.aria-label]="t().nav.toggle_lang"
          >
            {{ i18n.lang() === 'pt' ? 'PT' : 'EN' }} /
            {{ i18n.lang() === 'pt' ? 'EN' : 'PT' }}
          </button>
        </div>

      </div>
    </section>
  `,
})
export class ContactSectionComponent {
  protected readonly i18n = inject(I18nService);
  protected readonly t = this.i18n.t;
  protected readonly email = EMAIL;
  protected readonly city = CITY;
  protected readonly socials = SOCIALS;
  protected readonly name = NAME;
  protected readonly currentYear = new Date().getFullYear();
  protected readonly hasSocials = Object.values(SOCIALS).some(v => v !== null);
}
