import {
  Component,
  AfterViewInit,
  OnDestroy,
  inject,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { ScrollRevealDirective } from '../../core/scroll-reveal.directive';
import { VERSATILITY_CROPS } from '../../data/projects';

@Component({
  selector: 'app-versatility',
  standalone: true,
  imports: [ScrollRevealDirective],
  template: `
    <section id="versatility" class="section section-border">
      <div class="container versatility-grid">
        <!-- Left: sticky title -->
        <div class="versatility-sticky" scrollReveal>
          <p class="mono" style="color: #8A8A8A; margin: 0 0 2rem;">UI/UX</p>
          <p class="h2" style="color: #1A1A1A;">
            {{ t().versatility.line1 }}<br />
            {{ t().versatility.line2 }}
          </p>
        </div>

        <!-- Right: crop stack -->
        <div class="crop-stack">
          @for (crop of crops; track crop.src; let i = $index) {
            <div class="crop-item" #cropEl>
              <img
                [src]="crop.src"
                [alt]="crop.alt[lang()]"
                class="crop-img"
                loading="lazy"
                decoding="async"
                width="800"
                height="1000"
              />
              <p class="mono crop-tag">{{ crop.styleTag[lang()] }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class VersatilitySectionComponent implements AfterViewInit, OnDestroy {
  @ViewChildren('cropEl') cropEls!: QueryList<ElementRef<HTMLElement>>;

  protected readonly i18n = inject(I18nService);
  protected readonly t = this.i18n.t;
  protected readonly lang = this.i18n.lang;
  protected readonly crops = VERSATILITY_CROPS;

  private observers: IntersectionObserver[] = [];

  ngAfterViewInit(): void {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    this.cropEls.forEach((elRef, i) => {
      const el = elRef.nativeElement;
      el.classList.add('will-animate');

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => el.classList.add('revealed'), 60 + i * 70);
            observer.disconnect();
          }
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
      );
      observer.observe(el);
      this.observers.push(observer);
    });
  }

  ngOnDestroy(): void {
    this.observers.forEach((o) => o.disconnect());
  }
}
