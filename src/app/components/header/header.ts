import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent {
  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);

  navLinks = [
    { label: '¿Qué es?', anchor: '#que-es' },
    { label: 'Funcionalidades', anchor: '#funcionalidades' },
    { label: 'Demostración', anchor: '#demostracion' },
    { label: 'Ventajas', anchor: '#ventajas' },
    { label: 'FAQ', anchor: '#faq' },
    { label: 'Contacto', anchor: '#contacto' },
  ];

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 20);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  scrollTo(anchor: string): void {
    this.closeMobileMenu();
    const el = document.querySelector(anchor);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
