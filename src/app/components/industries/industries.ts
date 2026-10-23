import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type IndustryIcon = 'delivery' | 'passengers' | 'logistics' | 'courier' | 'corporate';

interface Industry {
  icon: IndustryIcon;
  title: string;
  description: string;
  examples: string[];
}

@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './industries.html',
  styleUrl: './industries.scss',
})
export class IndustriesComponent {
  industries: Industry[] = [
    {
      icon: 'delivery',
      title: 'Delivery y última milla',
      description: 'Optimiza entregas urbanas con seguimiento puerta a puerta y pruebas de entrega digital.',
      examples: ['Rutas optimizadas por zonas', 'Tiempos de entrega garantizados', 'Notificaciones al cliente'],
    },
    {
      icon: 'passengers',
      title: 'Transporte de pasajeros',
      description: 'Garantiza la seguridad de tus viajeros con control de velocidad, rutas y horarios cumplidos.',
      examples: ['Control de velocidad en tiempo real', 'Alertas de desvío de ruta', 'Cumplimiento de itinerarios'],
    },
    {
      icon: 'logistics',
      title: 'Logística y distribución',
      description: 'Coordina flotas de larga distancia con control de combustible, mantenimiento y horas de conducción.',
      examples: ['Control de consumo de combustible', 'Mantenimiento predictivo', 'Cumplimiento normativo Tacógrafo'],
    },
    {
      icon: 'courier',
      title: 'Mensajería y paquetería',
      description: 'Gestiona múltiples paradas y asignaciones dinámicas con visibilidad total del estado de cada envío.',
      examples: ['Asignación dinámica de pedidos', 'Seguimiento individual de paquetes', 'Optimización de paradas múltiples'],
    },
    {
      icon: 'corporate',
      title: 'Flotas empresariales',
      description: 'Centraliza la gestión de vehículos corporativos con control de uso, asignaciones y reportes de costes.',
      examples: ['Control de uso por empleado', 'Reportes de coste por departamento', 'Reserva y asignación de vehículos'],
    },
  ];
}
