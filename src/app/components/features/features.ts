import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type FeatureIcon = 'gps' | 'vehicles' | 'drivers' | 'cameras' | 'devices' | 'adapt';

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
      title: 'Monitoreo GPS',
      description: 'Seguimiento satelital en tiempo real con actualización cada 5 segundos y precisión de ubicación inferior a 10 metros.',
    },
    {
      icon: 'vehicles',
      title: 'Gestión de Vehículos',
      description: 'Registro completo de cada unidad: matrícula, seguro, ITV, mantenimiento preventivo y historial de incidencias.',
    },
    {
      icon: 'drivers',
      title: 'Administración de Conductores',
      description: 'Perfiles con licencia, horarios, descansos y métricas de conducción. Detecta conductas de riesgo automáticamente.',
    },
    {
      icon: 'cameras',
      title: 'Integración de Cámaras',
      description: 'Conecta cámaras ADAS y DMS para visualización en vivo, almacenamiento de eventos y descarga de grabaciones.',
    },
    {
      icon: 'devices',
      title: 'Gestión de Dispositivos',
      description: 'Administra todos los rastreadores GPS y sensores instalados desde un único panel con diagnósticos remotos.',
    },
    {
      icon: 'adapt',
      title: 'Adaptabilidad Empresarial',
      description: 'Configura alertas, reportes y paneles según los procesos operativos específicos de tu empresa.',
    },
  ];
}
