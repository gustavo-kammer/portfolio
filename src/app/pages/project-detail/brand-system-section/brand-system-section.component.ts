import { Component, Input, OnInit, OnDestroy, inject } from '@angular/core';
import { BrandSystem } from '../../../data/types';
import { I18nService } from '../../../core/i18n.service';
import { ScrollRevealDirective } from '../../../core/scroll-reveal.directive';
import { BrandPaletteComponent } from './brand-palette.component';
import { BrandTokensComponent } from './brand-tokens.component';

@Component({
  selector: 'app-brand-system-section',
  standalone: true,
  imports: [ScrollRevealDirective, BrandPaletteComponent, BrandTokensComponent],
  template: `
    @if (brandSystem) {
      <section
        class="bss-wrapper"
        [style.--brand-font-family]="brandSystem.fontFamily.name"
      >
        <div class="container">
          <div scrollReveal>
            <!-- Section header -->
            <div class="bss-header">
              <span class="bss-label">
                {{ lang() === 'pt' ? 'SISTEMA VISUAL' : 'VISUAL SYSTEM' }}
              </span>
              @if (brandSystem.manualReference) {
                <span class="bss-label">
                  {{ brandSystem.manualReference[lang()] }}
                </span>
              }
            </div>
            <hr class="bss-hairline" />

            <!-- Typography block -->
            <p class="bss-block-title">
              {{ lang() === 'pt' ? 'TIPOGRAFIA' : 'TYPOGRAPHY' }}
            </p>

            <div class="bss-type-grid">
              @for (font of brandSystem.fontFamily.fonts; track font.weight) {
                <div class="bss-font-card">
                  <div
                    class="bss-display brand-typography-display"
                    [style.font-weight]="font.weight"
                  >{{ font.sample ?? 'Aa' }}</div>
                  <hr class="bss-font-divider" />
                  <p class="bss-font-name">{{ font.family }} {{ font.label }}</p>
                  <div
                    class="bss-font-samples brand-typography-sample"
                    [style.font-weight]="font.weight"
                  >
                    <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                    <p>abcdefghijklmnopqrstuvwxyz</p>
                    <p>0123456789</p>
                  </div>
                </div>
              }
            </div>

            <!-- Color block — tokens or simple palette -->
            @if (colorRenderMode === 'tokens') {
              <p class="bss-block-title bss-color-title">
                {{ lang() === 'pt' ? 'TOKENS DE COR' : 'COLOR TOKENS' }}
              </p>
              <app-brand-tokens [groups]="brandSystem.tokenGroups!" />
            } @else if (colorRenderMode === 'palette') {
              <p class="bss-block-title bss-color-title">
                {{ lang() === 'pt' ? 'PALETA DE CORES' : 'COLOR PALETTE' }}
              </p>
              <app-brand-palette [palette]="brandSystem.palette!" />
            }
          </div>
        </div>
      </section>
    }
  `,
  styles: [`
    :host {
      display: block;
    }

    .bss-wrapper {
      padding-block: clamp(6rem, 12vh, 10rem);
      border-bottom: 1px solid #E4E1DC;
    }

    .brand-typography-display,
    .brand-typography-sample {
      font-family: var(--brand-font-family), sans-serif;
    }

    .bss-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .bss-label {
      font-family: "JetBrains Mono", ui-monospace, monospace;
      font-size: 0.8125rem;
      line-height: 1.5;
      color: #8A8A8A;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    .bss-hairline {
      border: 0;
      border-top: 1px solid #E4E1DC;
      margin-block: 1.5rem;
    }

    .bss-block-title {
      font-family: "JetBrains Mono", ui-monospace, monospace;
      font-size: 0.8125rem;
      line-height: 1.5;
      color: #8A8A8A;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin: 0 0 2rem;
    }

    .bss-color-title {
      margin-top: 4rem;
    }

    /* ── Typography grid ── */

    .bss-type-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }

    @media (max-width: 640px) {
      .bss-type-grid {
        grid-template-columns: 1fr;
      }
    }

    .bss-font-card {
      background: #FFFFFF;
      border: 1px solid #E4E1DC;
      padding: clamp(2rem, 4vw, 3rem);
    }

    .bss-display {
      font-size: clamp(6rem, 12vw, 10rem);
      line-height: 1;
      color: #1A1A1A;
      margin: 0;
    }

    .bss-font-divider {
      border: 0;
      border-top: 1px solid #E4E1DC;
      margin: 1.5rem 0 1rem;
    }

    .bss-font-name {
      font-size: 0.9375rem;
      font-weight: 500;
      color: #1A1A1A;
      margin: 0 0 1rem;
    }

    .bss-font-samples {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .bss-font-samples p {
      font-size: 0.875rem;
      color: #4A4A4A;
      margin: 0;
      word-break: break-all;
    }
  `],
})
export class BrandSystemSectionComponent implements OnInit, OnDestroy {
  @Input() brandSystem?: BrandSystem;

  protected readonly lang = inject(I18nService).lang;

  get colorRenderMode(): 'tokens' | 'palette' | 'none' {
    if (this.brandSystem?.tokenGroups?.length) return 'tokens';
    if (this.brandSystem?.palette?.length) return 'palette';
    return 'none';
  }

  ngOnInit(): void {
    const url = this.brandSystem?.fontFamily.googleFontsUrl;
    if (!url) return;
    if (document.querySelector(`link[href="${url}"]`)) return;

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    link.dataset['brandSystem'] = 'true';
    document.head.appendChild(link);
  }

  ngOnDestroy(): void {
    const url = this.brandSystem?.fontFamily.googleFontsUrl;
    if (!url) return;
    const link = document.querySelector(`link[href="${url}"][data-brand-system="true"]`);
    link?.remove();
  }
}
