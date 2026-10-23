import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Step {
  num: number;
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './how-it-works.html',
  styleUrl: './how-it-works.scss',
})
export class HowItWorksComponent {
  steps: Step[] = [
    {
      num: 1,
      title: 'Registra tu flota',
      description: 'Da de alta cada vehículo con su matrícula, modelo y documentación en menos de 2 minutos por unidad.',
      icon: 'register',
    },
    {
      num: 2,
      title: 'Asocia conductores y dispositivos',
      description: 'Vincula cada conductor con su licencia y asigna los rastreadores GPS correspondientes a cada vehículo.',
      icon: 'link',
    },
    {
      num: 3,
      title: 'Consulta la información',
      description: 'Accede a datos en tiempo real: ubicación, velocidad, rutas, alertas y reportes desde cualquier dispositivo.',
      icon: 'query',
    },
    {
      num: 4,
      title: 'Supervisa tu operación',
      description: 'Toma decisiones basadas en dashboards, métricas de eficiencia y alertas automatizadas de tu flota.',
      icon: 'monitor',
    },
  ];
}
