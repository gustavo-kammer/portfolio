import { Component, Input, inject } from '@angular/core';
import { BrandColor } from '../../../data/types';
import { I18nService } from '../../../core/i18n.service';

@Component({
  selector: 'app-brand-palette',
  standalone: true,
  template: `
    <div class="bp-grid">
      @for (color of palette; track color.hex) {
        <div class="bp-item">
          <div
            class="bp-swatch"
            [style.background]="color.hex"
            [class.bp-swatch-bordered]="isLight(color.hex)"
          ></div>
          <div class="bp-info">
            @if (color.name) {
              <p class="bp-name">{{ color.name[lang()] }}</p>
            }
            <p class="bp-hex">{{ color.hex }}</p>
            <p class="bp-cmyk">
              C {{ color.cmyk.c }} / M {{ color.cmyk.m }} / Y {{ color.cmyk.y }} / K {{ color.cmyk.k }}
            </p>
          </div>
        </div>
      }
    </div>
  `,
  styles: [`
    .bp-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 1.5rem;
    }

    @media (max-width: 1024px) {
      .bp-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media (max-width: 640px) {
      .bp-grid {
        grid-template-columns: 1fr;
      }
    }

    .bp-item {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .bp-swatch {
      width: 100%;
      aspect-ratio: 1;
    }

    .bp-swatch-bordered {
      box-shadow: inset 0 0 0 1px #E4E1DC;
    }

    .bp-info {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
    }

    .bp-name {
      font-family: "JetBrains Mono", ui-monospace, monospace;
      font-size: 0.8125rem;
      color: #1A1A1A;
      margin: 0;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .bp-hex {
      font-family: "JetBrains Mono", ui-monospace, monospace;
      font-size: 0.8125rem;
      color: #1A1A1A;
      margin: 0;
      letter-spacing: 0.08em;
    }

    .bp-cmyk {
      font-family: "JetBrains Mono", ui-monospace, monospace;
      font-size: 0.6875rem;
      color: #8A8A8A;
      margin: 0;
    }
  `],
})
export class BrandPaletteComponent {
  @Input({ required: true }) palette!: BrandColor[];

  protected readonly lang = inject(I18nService).lang;

  protected isLight(hex: string): boolean {
    if (hex.length < 7) return false;
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.7;
  }
}
