import { Component, signal, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../core/i18n.service';
import { ScrollRevealDirective } from '../../core/scroll-reveal.directive';
import { PROJECTS, TYPE_LABELS } from '../../data/projects';
import { ProjectType } from '../../data/types';

type Filter = 'all' | ProjectType;

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink, ScrollRevealDirective],
  template: `
    <section id="projects" class="section section-border">
      <div class="container">

        <div scrollReveal style="margin-bottom: clamp(2rem, 4vw, 3rem);">
          <p class="mono" style="color: #8A8A8A; margin: 0 0 0.75rem;">{{ t().projects.title }}</p>
          <hr class="hairline">
        </div>

        <!-- Filter bar -->
        <div class="filter-bar" role="group" [attr.aria-label]="t().projects.title" scrollReveal [scrollRevealDelay]="80">
          <button
            class="filter-btn"
            [class.active]="activeFilter() === 'all'"
            (click)="activeFilter.set('all')"
            [attr.aria-pressed]="activeFilter() === 'all'"
          >{{ t().projects.filter_all }}</button>
          @for (f of domainFilters; track f.key) {
            <button
              class="filter-btn"
              [class.active]="activeFilter() === f.key"
              (click)="activeFilter.set(f.key)"
              [attr.aria-pressed]="activeFilter() === f.key"
            >{{ f.label[lang()] }}</button>
          }
        </div>

        <!-- Projects grid -->
        <div class="projects-grid">
          @for (project of filteredProjects(); track project.slug; let i = $index) {
            <article
              class="project-card"
              scrollReveal
              [scrollRevealDelay]="(i % 3) * 80"
            >
              <a
                [routerLink]="['/projects', project.slug]"
                class="project-card-link"
                [attr.aria-label]="'Ver projeto ' + project.title[lang()]"
              >
                <img
                  [src]="project.thumbnail"
                  [alt]="project.title[lang()]"
                  class="project-thumbnail"
                  loading="lazy"
                  width="800"
                  height="600"
                >
                <hr class="project-divider">
                <h3 class="h3 project-title">{{ project.title[lang()] }}</h3>
                <p class="project-desc">{{ project.description[lang()] }}</p>
                <p class="mono project-meta">
                  {{ project.year }} · {{ typeLabel(project.type) }} · {{ project.role }}
                </p>
              </a>
            </article>
          }
        </div>

      </div>
    </section>
  `,
})
export class ProjectsSectionComponent {
  protected readonly i18n = inject(I18nService);
  protected readonly t = this.i18n.t;
  protected readonly lang = this.i18n.lang;

  protected readonly activeFilter = signal<Filter>('all');

  protected readonly domainFilters = (Object.keys(TYPE_LABELS) as ProjectType[]).map(key => ({
    key,
    label: TYPE_LABELS[key],
  }));

  protected readonly filteredProjects = computed(() => {
    const f = this.activeFilter();
    return f === 'all' ? PROJECTS : PROJECTS.filter(p => p.type === f);
  });

  protected typeLabel(type: ProjectType): string {
    return TYPE_LABELS[type][this.lang()];
  }
}
