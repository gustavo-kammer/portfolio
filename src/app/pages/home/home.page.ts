import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { HeroSectionComponent } from './hero.section';
import { VersatilitySectionComponent } from './versatility.section';
import { ProjectsSectionComponent } from './projects.section';
import { AboutSectionComponent } from './about.section';
import { ContactSectionComponent } from './contact.section';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroSectionComponent,
    VersatilitySectionComponent,
    ProjectsSectionComponent,
    AboutSectionComponent,
    ContactSectionComponent,
  ],
  template: `
    <app-header />
    <main id="main-content">
      <app-hero />
      <app-versatility />
      <app-projects />
      <app-about />
      <app-contact />
    </main>
  `,
})
export class HomePage {}
