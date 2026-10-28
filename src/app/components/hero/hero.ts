import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent {
  fleetStats = [
    { label: 'Vehículos activos', value: '48', icon: 'vehicle', change: '+3 hoy' },
    { label: 'En ruta', value: '31', icon: 'route', change: '64.5%' },
    { label: 'Alertas', value: '2', icon: 'alert', change: 'Atención' },
    { label: 'Eficiencia', value: '94%', icon: 'efficiency', change: '+2.1%' },
  ];

  routePoints = [
    { x: 12, y: 72 },
    { x: 22, y: 58 },
    { x: 35, y: 52 },
    { x: 48, y: 40 },
    { x: 58, y: 32 },
    { x: 68, y: 25 },
    { x: 80, y: 20 },
  ];

  get routePathD(): string {
    const pts = this.routePoints;
    let d = `M ${pts[0].x}% ${pts[0].y}%`;
    for (let i = 1; i < pts.length; i++) {
      const cp1x = (pts[i - 1].x + pts[i].x) / 2;
      const cp1y = pts[i - 1].y;
      const cp2x = cp1x;
      const cp2y = pts[i].y;
      d += ` C ${cp1x}% ${cp1y}%, ${cp2x}% ${cp2y}%, ${pts[i].x}% ${pts[i].y}%`;
    }
    return d;
  }

  vehicles = [
    { x: 48, y: 40, id: 'FC-021', status: 'active' },
    { x: 22, y: 58, id: 'FC-014', status: 'idle' },
    { x: 80, y: 20, id: 'FC-033', status: 'active' },
  ];

  scrollToContact(): void {
    const el = document.querySelector('#contacto');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToFeatures(): void {
    const el = document.querySelector('#funcionalidades');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
