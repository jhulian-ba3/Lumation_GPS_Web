import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { BenefitsComponent } from './components/benefits/benefits';
import { GpsDemoComponent } from './components/gps-demo/gps-demo';
import { FeaturesComponent } from './components/features/features';
import { HowItWorksComponent } from './components/how-it-works/how-it-works';
import { IndustriesComponent } from './components/industries/industries';
import { AdvantagesComponent } from './components/advantages/advantages';
import { ComparisonComponent } from './components/comparison/comparison';
import { FaqComponent } from './components/faq/faq';
import { CallToActionComponent } from './components/call-to-action/call-to-action';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    BenefitsComponent,
    GpsDemoComponent,
    FeaturesComponent,
    HowItWorksComponent,
    IndustriesComponent,
    AdvantagesComponent,
    ComparisonComponent,
    FaqComponent,
    CallToActionComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  title = 'fleet-control';
}
