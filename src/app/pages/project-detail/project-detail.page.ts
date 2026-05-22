import { Component, inject, computed } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { I18nService } from '../../core/i18n.service';
import { HeaderComponent } from '../../shared/header/header.component';
import { ScrollRevealDirective } from '../../core/scroll-reveal.directive';
import { PROJECTS } from '../../data/projects';
import { BrandSystemSectionComponent } from './brand-system-section/brand-system-section.component';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [RouterLink, HeaderComponent, ScrollRevealDirective, BrandSystemSectionComponent],
  template: `
    <app-header />

    <main id="main-content">
      @if (project(); as proj) {
        <!-- Header area -->
        <div class="project-detail-header">
          <div class="container">
            <a routerLink="/" fragment="projects" class="mono back-link">
              {{ t().project_detail.back }}
            </a>

            <div scrollReveal style="margin-top: 3rem;">
              <h1 class="h1" style="color: #1A1A1A; margin-bottom: 1rem;">
                {{ proj.title[lang()] }}
              </h1>
              <p
                style="color: #4A4A4A; font-size: 1.125rem; max-width: 60ch; line-height: 1.65; margin: 0;"
              >
                {{ proj.description[lang()] }}
              </p>
            </div>

            <div class="project-detail-meta" scrollReveal [scrollRevealDelay]="120">
              <div class="meta-item">
                <span class="meta-label">{{ t().project_detail.year_label }}</span>
                <span class="meta-value mono">{{ proj.year }}</span>
              </div>
              <div class="meta-item">
                <span class="meta-label">{{ t().project_detail.role_label }}</span>
                <span class="meta-value mono">{{ proj.role }}</span>
              </div>
              @if (proj.client) {
                <div class="meta-item">
                  <span class="meta-label">{{ t().project_detail.client_label }}</span>
                  <span class="meta-value mono">{{ proj.client }}</span>
                </div>
              }
              @if (proj.externalUrl) {
                <div class="meta-item">
                  <a
                    [href]="proj.externalUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="social-link"
                    style="align-self: flex-end;"
                  >
                    {{ t().project_detail.view_live }}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      style="display:inline; margin-left:4px;"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 10L10 2M10 2H5M10 2V7"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              }
            </div>
          </div>
        </div>

        <!-- Hero image -->
        @if (proj.hero) {
          <div scrollReveal>
            <img
              [src]="proj.hero"
              [alt]="proj.title[lang()]"
              class="project-hero-img"
              loading="eager"
              decoding="async"
              width="1280"
              height="1000"
            />
          </div>
        }

        <!-- Challenge / Context -->
        <div class="section section-border">
          <div class="container">
            <div scrollReveal>
              <p class="mono" style="color: #8A8A8A; margin: 0 0 1.5rem;">
                {{ t().project_detail.challenge }}
              </p>
              <p
                style="color: #4A4A4A; font-size: 1.0625rem; line-height: 1.75; max-width: 68ch; margin: 0;"
              >
                {{ proj.context[lang()] }}
              </p>
            </div>
          </div>
        </div>

        <app-brand-system-section [brandSystem]="proj.brandSystem" />

        <!-- Gallery -->
        <div class="section section-border">
          <div class="container">
            @for (image of proj.gallery; track image.src; let i = $index) {
              <div class="gallery-item" scrollReveal [scrollRevealDelay]="i * 80">
                <p class="mono gallery-caption">{{ image.caption[lang()] }}</p>
                <img
                  [src]="image.src"
                  [alt]="image.caption[lang()]"
                  class="gallery-img"
                  [class.mobile-device]="image.device === 'mobile'"
                  loading="lazy"
                  width="1280"
                  height="800"
                />
              </div>
            } @empty {
              <p class="mono" style="color: #8A8A8A; text-align: center; padding: 2rem 0;">
                {{ t().project_detail.gallery_empty }}
              </p>
            }
          </div>
        </div>

        <!-- Prev / Next navigation -->
        @if (prevProject() || nextProject()) {
          <div class="nav-between">
            @if (prevProject(); as prev) {
              <a [routerLink]="['/projects', prev.slug]" class="nav-between-link">
                <span class="mono" style="color: #8A8A8A;">{{ t().project_detail.prev }}</span>
                <span class="h3">{{ prev.title[lang()] }}</span>
              </a>
            } @else {
              <div></div>
            }
            @if (nextProject(); as next) {
              <a [routerLink]="['/projects', next.slug]" class="nav-between-link next">
                <span class="mono" style="color: #8A8A8A;">{{ t().project_detail.next }}</span>
                <span class="h3">{{ next.title[lang()] }}</span>
              </a>
            }
          </div>
        }
      } @else {
        <!-- 404 state -->
        <div class="section container" style="text-align: center; padding-top: 12rem;">
          <p class="h2">Projeto não encontrado.</p>
          <a
            routerLink="/"
            class="mono social-link"
            style="margin-top: 2rem; display: inline-block;"
          >
            {{ t().project_detail.back }}
          </a>
        </div>
      }
    </main>
  `,
})
export class ProjectDetailPage {
  private readonly route = inject(ActivatedRoute);
  protected readonly i18n = inject(I18nService);
  protected readonly t = this.i18n.t;
  protected readonly lang = this.i18n.lang;

  private readonly slug = toSignal(this.route.paramMap.pipe(map((p) => p.get('slug') ?? '')));

  protected readonly project = computed(() => {
    const slug = this.slug();
    return PROJECTS.find((p) => p.slug === slug) ?? null;
  });

  protected readonly currentIndex = computed(() =>
    PROJECTS.findIndex((p) => p.slug === this.slug()),
  );

  protected readonly prevProject = computed(() => {
    const i = this.currentIndex();
    return i > 0 ? PROJECTS[i - 1] : null;
  });

  protected readonly nextProject = computed(() => {
    const i = this.currentIndex();
    return i >= 0 && i < PROJECTS.length - 1 ? PROJECTS[i + 1] : null;
  });
}
