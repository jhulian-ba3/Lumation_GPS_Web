import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type BenefitIcon = 'route' | 'vehicle' | 'driver' | 'adapt';

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
      icon: 'route',
      title: 'Seguimiento de rutas',
      description: 'Visualiza el recorrido de cada vehículo en tiempo real y optimiza trayectos al instante.',
    },
    {
      icon: 'vehicle',
      title: 'Gestión centralizada de vehículos',
      description: 'Controla todo tu parque móvil desde un único panel con datos consolidados y alertas.',
    },
    {
      icon: 'driver',
      title: 'Organización de conductores y dispositivos',
      description: 'Asigna conductores, gestiona dispositivos GPS y mantén todo sincronizado sin fricción.',
    },
    {
      icon: 'adapt',
      title: 'Adaptabilidad a diferentes operaciones',
      description: 'Configura la plataforma según las necesidades específicas de tu industria y flota.',
    },
  ];
}
