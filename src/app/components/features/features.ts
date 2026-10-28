import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type FeatureIcon = 'gps' | 'videowall' | 'vehicles' | 'drivers' | 'alerts' | 'adapt';

interface Feature {
  icon: FeatureIcon;
  title: string;
  description: string;
}

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.html',
  styleUrl: './features.scss',
})
export class FeaturesComponent {
  features: Feature[] = [
    {
      icon: 'gps',
      title: 'Rastreo GPS en tiempo real',
      description:
        'Seguimiento satelital con actualización cada 5 segundos y precisión inferior a 10 metros. Visualiza la ubicación de cada vehículo en el mapa.',
    },
    {
      icon: 'videowall',
      title: 'Video Wall de cámaras',
      description:
        'Centraliza las transmisiones de tus cámaras ADAS y DMS en un video wall único. Visualiza en vivo, almacena eventos y descarga grabaciones.',
    },
    {
      icon: 'vehicles',
      title: 'Gestión de Vehículos',
      description:
        'Registro completo de cada unidad: matrícula, seguro, ITV, mantenimiento preventivo e historial de incidencias en un solo lugar.',
    },
    {
      icon: 'drivers',
      title: 'Gestión de Conductores',
      description:
        'Perfiles con licencia, horarios y descansos. Asigna conductores a vehículos y detecta automáticamente conductas de riesgo al volante.',
    },
    {
      icon: 'alerts',
      title: 'Alertas automatizadas',
      description:
        'Recibe notificaciones instantáneas de excesos de velocidad, desvíos de ruta, entrada/salida de geocercas y mantenimiento preventivo.',
    },
    {
      icon: 'adapt',
      title: 'Adaptabilidad empresarial',
      description:
        'Configura alertas, reportes y paneles según los procesos operativos específicos de tu empresa y los requisitos de tu sector.',
    },
  ];
}
