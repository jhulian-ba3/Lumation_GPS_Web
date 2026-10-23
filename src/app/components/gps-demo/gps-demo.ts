import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GpsSimulationService } from '../../services/gps-simulation.service';

type Tab = 'live' | 'video';

@Component({
  selector: 'app-gps-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gps-demo.html',
  styleUrl: './gps-demo.scss',
})
export class GpsDemoComponent {
  private gps = inject(GpsSimulationService);

  activeTab = signal<Tab>('live');

  readonly snapshot = this.gps.snapshot;
  readonly routePoints = this.gps.routePoints;
  readonly routePathD = this.gps.getRoutePathD();

  readonly isRunning = computed(() => this.snapshot().state === 'running');
  readonly isPaused = computed(() => this.snapshot().state === 'paused');
  readonly isIdle = computed(() => this.snapshot().state === 'idle');
  readonly isComplete = computed(() => this.snapshot().progress >= 100);

  readonly currentX = computed(() => this.snapshot().currentPoint.x);
  readonly currentY = computed(() => this.snapshot().currentPoint.y);
  readonly progressPercent = computed(() => Math.round(this.snapshot().progress));
  readonly formattedTime = computed(() => this.gps.formatTime(this.snapshot().elapsedSeconds));

  readonly vehicleTransform = computed(() => {
    const s = this.snapshot();
    return `translate(${s.currentPoint.x}, ${s.currentPoint.y}) rotate(${s.heading - 90})`;
  });

  readonly completedDashArray = computed(() => '100');
  readonly completedDashOffset = computed(() => `${100 - this.snapshot().progress}`);

  headingLabel(): string {
    const h = this.snapshot().heading;
    const sectors: Array<[number, number, string]> = [
      [338, 360, 'N'], [0, 22, 'N'],
      [23, 67, 'NE'], [68, 112, 'E'],
      [113, 157, 'SE'], [158, 202, 'S'],
      [203, 247, 'SO'], [248, 292, 'O'],
      [293, 337, 'NO'],
    ];
    for (const [min, max, label] of sectors) {
      if (h >= min && h <= max) return label;
    }
    return 'N';
  }

  setTab(tab: Tab): void {
    this.activeTab.set(tab);
    if (tab === 'video') this.gps.pause();
  }

  onPlay(): void {
    this.gps.play();
  }

  onPause(): void {
    this.gps.pause();
  }

  onReset(): void {
    this.gps.reset();
  }

  playVideo(): void {
    this.activeTab.set('live');
    this.gps.play();
  }
}
