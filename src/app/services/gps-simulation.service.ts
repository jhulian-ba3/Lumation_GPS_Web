import { Injectable, signal, computed, OnDestroy } from '@angular/core';

export type SimulationState = 'idle' | 'running' | 'paused';

export interface RoutePoint {
  x: number;
  y: number;
  lat: number;
  lng: number;
  label: string;
}

export interface SimSnapshot {
  progress: number;
  state: SimulationState;
  currentPoint: RoutePoint;
  heading: number;
  speedKmh: number;
  elapsedSeconds: number;
  distanceKm: number;
}

@Injectable({ providedIn: 'root' })
export class GpsSimulationService implements OnDestroy {
  private readonly tickIntervalMs = 80;
  private readonly totalDurationSec = 45;
  private readonly totalDistanceKm = 28.4;

  readonly routePoints: RoutePoint[] = [
    { x: 8,  y: 78, lat: 40.4168, lng: -3.7038, label: 'Depósito Central' },
    { x: 18, y: 65, lat: 40.4321, lng: -3.6892, label: 'Calle Alcalá' },
    { x: 30, y: 58, lat: 40.4456, lng: -3.6745, label: 'Glorieta Europa' },
    { x: 42, y: 45, lat: 40.4589, lng: -3.6601, label: 'Av. de América' },
    { x: 55, y: 38, lat: 40.4712, lng: -3.6458, label: 'Nudo Sur' },
    { x: 68, y: 30, lat: 40.4834, lng: -3.6312, label: 'Rotonda Norte' },
    { x: 82, y: 22, lat: 40.4967, lng: -3.6167, label: 'Polígono Industrial' },
    { x: 92, y: 14, lat: 40.5089, lng: -3.6023, label: 'Centro Logístico' },
  ];

  readonly progress = signal(0);
  readonly state = signal<SimulationState>('idle');
  readonly elapsedSeconds = signal(0);

  private timerId: ReturnType<typeof setInterval> | null = null;

  readonly snapshot = computed<SimSnapshot>(() => {
    const p = this.progress();
    const pt = this.interpolatePoint(p);
    const prev = this.interpolatePoint(Math.max(0, p - 2));
    const heading = this.calculateHeading(prev, pt);
    const speedKmh = this.state() === 'running' ? 48 + Math.sin(p * 0.3) * 12 : 0;
    const distanceKm = (p / 100) * this.totalDistanceKm;

    return {
      progress: p,
      state: this.state(),
      currentPoint: pt,
      heading,
      speedKmh: Math.round(Math.max(0, speedKmh)),
      elapsedSeconds: this.elapsedSeconds(),
      distanceKm: Math.round(distanceKm * 10) / 10,
    };
  });

  private interpolatePoint(progress: number): RoutePoint {
    const p = Math.max(0, Math.min(100, progress));
    const segments = this.routePoints.length - 1;
    const segmentLength = 100 / segments;
    const segIndex = Math.min(Math.floor(p / segmentLength), segments - 1);
    const localT = (p - segIndex * segmentLength) / segmentLength;

    const a = this.routePoints[segIndex];
    const b = this.routePoints[segIndex + 1];

    return {
      x: a.x + (b.x - a.x) * localT,
      y: a.y + (b.y - a.y) * localT,
      lat: a.lat + (b.lat - a.lat) * localT,
      lng: a.lng + (b.lng - a.lng) * localT,
      label: localT < 0.5 ? a.label : b.label,
    };
  }

  private calculateHeading(from: RoutePoint, to: RoutePoint): number {
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const angle = Math.atan2(-dy, dx) * (180 / Math.PI);
    return Math.round((angle + 360) % 360);
  }

  play(): void {
    if (this.state() === 'running') return;
    if (this.progress() >= 100) this.reset();
    this.state.set('running');
    this.startTimer();
  }

  pause(): void {
    if (this.state() !== 'running') return;
    this.state.set('paused');
    this.stopTimer();
  }

  reset(): void {
    this.stopTimer();
    this.progress.set(0);
    this.elapsedSeconds.set(0);
    this.state.set('idle');
  }

  private startTimer(): void {
    this.stopTimer();
    this.timerId = setInterval(() => {
      const current = this.progress();
      const increment = 100 / (this.totalDurationSec * (1000 / this.tickIntervalMs));
      const next = current + increment;

      if (next >= 100) {
        this.progress.set(100);
        this.state.set('idle');
        this.stopTimer();
      } else {
        this.progress.set(next);
        this.elapsedSeconds.update(s => s + this.tickIntervalMs / 1000);
      }
    }, this.tickIntervalMs);
  }

  private stopTimer(): void {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }

  formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  getRoutePathD(): string {
    const pts = this.routePoints;
    let d = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 1; i < pts.length; i++) {
      const cp1x = (pts[i - 1].x + pts[i].x) / 2;
      const cp1y = pts[i - 1].y;
      const cp2x = cp1x;
      const cp2y = pts[i].y;
      d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${pts[i].x} ${pts[i].y}`;
    }
    return d;
  }
}
