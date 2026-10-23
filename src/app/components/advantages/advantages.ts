import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Advantage {
  title: string;
  description: string;
}

@Component({
  selector: 'app-advantages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './advantages.html',
  styleUrl: './advantages.scss',
})
export class AdvantagesComponent {
  advantages: Advantage[] = [
    {
      title: 'Centralización de datos',
      description: 'Toda la información de tu flota en una única plataforma, accesible desde cualquier dispositivo.',
    },
    {
      title: 'Visualización de rutas en tiempo real',
      description: 'Mapas interactivos con seguimiento en vivo, historial de recorridos y reproducción de trayectos.',
    },
    {
      title: 'Adaptabilidad total',
      description: 'Configura alertas, reportes y paneles según los procesos operativos de tu empresa.',
    },
    {
      title: 'Reducción de costes operativos',
      description: 'Disminuye el consumo de combustible y el desgaste de vehículos con análisis de conducción eficiente.',
    },
    {
      title: 'Alertas automatizadas',
      description: 'Recibe notificaciones instantáneas de excesos de velocidad, desvíos de ruta y mantenimiento preventivo.',
    },
    {
      title: 'Reportes personalizables',
      description: 'Genera informes detallados por vehículo, conductor o periodo con un solo clic y expórtalos a PDF o Excel.',
    },
  ];
}
