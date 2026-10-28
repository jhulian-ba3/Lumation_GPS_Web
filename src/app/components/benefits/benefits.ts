import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type BenefitIcon = 'monitoring' | 'routes' | 'cameras'|'alerts';

interface Benefit {
  icon: BenefitIcon;
  title: string;
  description: string;
}

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './benefits.html',
  styleUrl: './benefits.scss',
})
export class BenefitsComponent {
  benefits: Benefit[] = [
    {
      icon: 'monitoring',
      title: 'Monitoreo en tiempo real',
      description:
        'Visualiza la ubicación, velocidad y estado de cada vehículo de tu flota desde un panel centralizado, con actualización continua y datos precisos.',
    },
    {
      icon: 'routes',
      title: 'Seguimiento de rutas',
      description:
        'Reproduce el recorrido de cada unidad, compara rutas planificadas con las reales y optimiza trayectos para reducir tiempos y costes.',
    },
    {
      icon: 'cameras',
      title: 'Cámaras y video wall',
      description:
        'Integra cámaras ADAS y DMS, visualiza las transmisiones en vivo desde un video wall y almacena los eventos relevantes para su revisión.',
    },{
      icon: 'alerts',
      title: 'Alertas y gestión',
      description:
        'Configura notificaciones automáticas ante excesos de velocidad, desvíos de ruta no autorizados y administra conductores de forma eficiente.',
    }
  ];
}
