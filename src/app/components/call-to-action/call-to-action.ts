import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-call-to-action',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './call-to-action.html',
  styleUrl: './call-to-action.scss',
})
export class CallToActionComponent {
  scrollToContact(): void {
    const el = document.querySelector('#contacto');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
