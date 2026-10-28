import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { BenefitsComponent } from './components/benefits/benefits';
import { FeaturesComponent } from './components/features/features';
import { GpsDemoComponent } from './components/gps-demo/gps-demo';
import { AdvantagesComponent } from './components/advantages/advantages';
import { FaqComponent } from './components/faq/faq';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    BenefitsComponent,
    FeaturesComponent,
    GpsDemoComponent,
    AdvantagesComponent,
    FaqComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  title = 'routeiq';
}
