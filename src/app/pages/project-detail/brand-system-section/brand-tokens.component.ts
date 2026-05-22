import { Component, Input, inject } from '@angular/core';
import { BrandTokenGroup } from '../../../data/types';
import { I18nService } from '../../../core/i18n.service';

@Component({
  selector: 'app-brand-tokens',
  standalone: true,
  template: `
    <div class="bt-groups">
      @for (group of groups; track group.groupName.en) {
        <div class="bt-group">
          <p class="bt-group-title">{{ group.groupName[lang()] }}</p>
          @if (group.description) {
            <p class="bt-group-desc">{{ group.description[lang()] }}</p>
          }
          <hr class="bt-divider" />
          @if (hasReferenceTokens(group)) {
            <p class="bt-ref-legend">
              ↳ {{ lang() === 'pt' ? 'indica referência a outro token' : 'indicates reference to another token' }}
            </p>
          }
          <div class="bt-grid">
            @for (token of group.tokens; track token.name) {
              <div class="bt-item">
                <div
                  class="bt-swatch"
                  [style.background]="token.hex"
                  [class.bt-swatch-bordered]="isLight(token.hex)"
                ></div>
                <div class="bt-info">
                  <p class="bt-name">{{ token.name }}</p>
                  @if (token.referencesToken) {
                    <p class="bt-ref">↳ {{ token.referencesToken }}</p>
                  }
                  <p class="bt-hex">{{ token.hex }}</p>
                </div>
              </div>
            }
          </div>
        </div>
      }
    </div>
  `,
  styles: [`
    .bt-groups {
      display: flex;
      flex-direction: column;
      gap: clamp(3rem, 6vh, 5rem);
    }

    .bt-group-title {
      font-family: "JetBrains Mono", ui-monospace, monospace;
      font-size: 0.8125rem;
      color: #8A8A8A;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin: 0 0 0.35rem;
    }

    .bt-group-desc {
      font-size: 0.875rem;
      color: #4A4A4A;
      margin: 0;
      max-width: 72ch;
      line-height: 1.55;
    }

    .bt-divider {
      border: 0;
      border-top: 1px solid #E4E1DC;
      margin: 0.75rem 0;
    }

    .bt-ref-legend {
      font-family: "JetBrains Mono", ui-monospace, monospace;
      font-size: 0.6875rem;
      color: #8A8A8A;
      margin: 0 0 1.25rem;
    }

    .bt-grid {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 1rem;
    }

    @media (max-width: 1024px) {
      .bt-grid {
        grid-template-columns: repeat(4, 1fr);
      }
    }

    @media (max-width: 640px) {
      .bt-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    .bt-item {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .bt-swatch {
      width: 100%;
      aspect-ratio: 1;
    }

    .bt-swatch-bordered {
      box-shadow: inset 0 0 0 1px #E4E1DC;
    }

    .bt-info {
      display: flex;
      flex-direction: column;
      gap: 0.15rem;
    }

    .bt-name {
      font-family: "JetBrains Mono", ui-monospace, monospace;
      font-size: 0.6875rem;
      color: #1A1A1A;
      margin: 0;
      word-break: break-all;
    }

    .bt-ref {
      font-family: "JetBrains Mono", ui-monospace, monospace;
      font-size: 0.625rem;
      color: #8A8A8A;
      margin: 0;
      word-break: break-all;
    }

    .bt-hex {
      font-family: "JetBrains Mono", ui-monospace, monospace;
      font-size: 0.6875rem;
      color: #1A1A1A;
      margin: 0;
      letter-spacing: 0.05em;
    }
  `],
})
export class BrandTokensComponent {
  @Input({ required: true }) groups!: BrandTokenGroup[];

  protected readonly lang = inject(I18nService).lang;

  protected isLight(hex: string): boolean {
    if (hex.length < 7) return false;
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.7;
  }

  protected hasReferenceTokens(group: BrandTokenGroup): boolean {
    return group.tokens.some((t) => !!t.referencesToken);
  }
}
