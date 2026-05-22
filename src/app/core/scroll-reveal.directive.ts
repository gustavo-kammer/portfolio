import { Directive, ElementRef, OnInit, OnDestroy, inject, Input, numberAttribute } from '@angular/core';

@Directive({
  selector: '[scrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input({ transform: numberAttribute }) scrollRevealDelay = 0;

  private el = inject(ElementRef);
  private observer: IntersectionObserver | null = null;

  ngOnInit(): void {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const el: HTMLElement = this.el.nativeElement;
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = `opacity 600ms cubic-bezier(0.22, 1, 0.36, 1) ${this.scrollRevealDelay}ms, transform 600ms cubic-bezier(0.22, 1, 0.36, 1) ${this.scrollRevealDelay}ms`;

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          this.observer!.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
