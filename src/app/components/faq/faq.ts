import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
})
export class FaqComponent {
  openIndex = signal<number | null>(0);

  items: FaqItem[] = [
    {
      question: '¿Cuánto tiempo toma implementar ROUTELQ en mi flota?',
      answer:
        'La implementación típica toma entre 2 y 5 días hábiles, dependiendo del número de vehículos y los dispositivos instalados. Nuestro equipo acompaña el proceso de configuración inicial y capacitación del personal.',
    },
    {
      question: '¿Qué dispositivos GPS son compatibles con la plataforma?',
      answer:
        'ROUTELQ es compatible con la mayoría de rastreadores GPS del mercado que soporten protocolos estándar. Verificamos la compatibilidad de tus dispositivos actuales antes de la implementación.',
    },
    {
      question: '¿Puedo acceder a la plataforma desde mi teléfono móvil?',
      answer:
        'Sí, la plataforma es totalmente responsiva y funciona desde cualquier dispositivo con conexión a internet: ordenador, tablet o smartphone. No requiere instalación de aplicaciones adicionales.',
    },
    {
      question: '¿Qué pasa con mis datos si cancelo el servicio?',
      answer:
        'Mantienes la propiedad total de tus datos. Al finalizar el contrato puedes solicitar la exportación completa de tu historial en formatos estándar (CSV y Excel) durante un periodo de 30 días.',
    },
    {
      question: '¿La plataforma funciona sin conexión a internet?',
      answer:
        'Los dispositivos GPS continúan registrando posiciones sin conexión. Una vez restablecida la comunicación, los datos se sincronizan automáticamente con la plataforma, garantizando que no se pierda información.',
    },
    {
      question: '¿Cuántos vehículos puedo gestionar con la plataforma?',
      answer:
        'No existe un límite fijo. La plataforma escala desde pequeñas flotas de 5 vehículos hasta operaciones con cientos de unidades. El precio se ajusta según el número de dispositivos activos.',
    },
    {
      question: '¿Ofrecen capacitación para mi equipo?',
      answer:
        'Sí, incluimos sesiones de capacitación inicial para administradores y operadores. También disponemos de documentación, tutoriales en vídeo y soporte técnico durante todo el periodo de contrato.',
    },
    {
      question: '¿Es posible integrar ROUTELQ con otros sistemas?',
      answer:
        'Contamos con una API REST que permite integrar la plataforma con sistemas ERP, CRM y herramientas de gestión existentes. Evaluamos cada caso particular para asegurar la compatibilidad.',
    },
    {
      question: '¿Qué nivel de soporte técnico reciben los clientes?',
      answer:
        'Ofrecemos soporte técnico por correo electrónico y teléfono en horario laboral. Para planes empresariales disponemos de soporte prioritario con tiempos de respuesta garantizados por contrato.',
    },
  ];

  toggle(index: number): void {
    this.openIndex.update(current => (current === index ? null : index));
  }
}
