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
    { label: '¿Qué es?', anchor: '#que-es' },
    { label: 'Funcionalidades', anchor: '#funcionalidades' },
    { label: 'Demostración', anchor: '#demostracion' },
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

  socialLinks = [
    { label: 'LinkedIn', icon: 'linkedin', url: '#' },
    { label: 'X', icon: 'x', url: '#' },
    { label: 'YouTube', icon: 'youtube', url: '#' },
  ];

  scrollTo(anchor: string): void {
    const el = document.querySelector(anchor);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
