import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  navLinks = [
    { label: 'Funcionalidades', anchor: '#funcionalidades' },
    { label: 'Cómo funciona', anchor: '#como-funciona' },
    { label: 'Sectores', anchor: '#sectores' },
    { label: 'Ventajas', anchor: '#ventajas' },
    { label: 'FAQ', anchor: '#faq' },
    { label: 'Contacto', anchor: '#contacto' },
  ];

  legalLinks = [
    { label: 'Aviso legal', anchor: '#' },
    { label: 'Política de privacidad', anchor: '#' },
    { label: 'Términos de servicio', anchor: '#' },
    { label: 'Política de cookies', anchor: '#' },
  ];

  scrollTo(anchor: string): void {
    const el = document.querySelector(anchor);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
