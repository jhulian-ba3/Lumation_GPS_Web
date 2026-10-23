import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ComparisonRow {
  feature: string;
  traditional: string;
  fleetControl: string;
}

@Component({
  selector: 'app-comparison',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comparison.html',
  styleUrl: './comparison.scss',
})
export class ComparisonComponent {
  rows: ComparisonRow[] = [
    {
      feature: 'Gestión de información',
      traditional: 'Llamadas, hojas de cálculo y archivos separados por área.',
      fleetControl: 'Toda la información centralizada en una única plataforma.',
    },
    {
      feature: 'Seguimiento GPS',
      traditional: 'Reportes manuales o sistemas sin visualización en tiempo real.',
      fleetControl: 'Mapa GPS interactivo con seguimiento en vivo y reproducción de rutas.',
    },
    {
      feature: 'Alertas operativas',
      traditional: 'Detección tardía de incidentes mediante llamadas o revisiones periódicas.',
      fleetControl: 'Notificaciones instantáneas de exceso de velocidad, desvíos y paradas no autorizadas.',
    },
    {
      feature: 'Reportes y análisis',
      traditional: 'Recopilación manual de datos con procesos lentos y propensos a errores.',
      fleetControl: 'Reportes automáticos y personalizables con exportación a PDF y Excel.',
    },
    {
      feature: 'Comunicación con conductores',
      traditional: 'Llamadas telefónicas y mensajería independiente de la plataforma.',
      fleetControl: 'Gestión integrada de conductores y comunicación desde el panel central.',
    },
    {
      feature: 'Escalabilidad',
      traditional: 'Limitada por la capacidad de coordinación manual del equipo.',
      fleetControl: 'Crecimiento sin fricción: añade vehículos y dispositivos en minutos.',
    },
  ];
}
