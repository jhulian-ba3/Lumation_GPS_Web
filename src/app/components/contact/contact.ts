import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  isSubmitting = signal(false);
  showSuccess = signal(false);

  form!: FormGroup;

  companyTypes = [
    { value: '', label: 'Selecciona una opción' },
    { value: 'delivery', label: 'Delivery / Última milla' },
    { value: 'logistica', label: 'Logística y distribución' },
    { value: 'pasajeros', label: 'Transporte de pasajeros' },
    { value: 'carga', label: 'Transporte de carga' },
    { value: 'construccion', label: 'Construcción y maquinaria' },
    { value: 'otro', label: 'Otro' },
  ];

  interests = [
    { value: '', label: 'Selecciona una opción' },
    { value: 'demo', label: 'Demostración de la plataforma' },
    { value: 'precio', label: 'Información de precios' },
    { value: 'implementacion', label: 'Asesoría de implementación' },
    { value: 'integracion', label: 'Integración con sistemas actuales' },
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      company: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[+0-9\s()-]{7,20}$/)]],
      companyType: ['', [Validators.required]],
      vehicleCount: ['', [Validators.required, Validators.min(1), Validators.max(9999)]],
      interest: ['', [Validators.required]],
    });
  }

  isInvalid(controlName: string): boolean {
    const control = this.form.get(controlName);
    if (!control) return false;
    return control.invalid && (control.dirty || control.touched);
  }

  onSubmit(): void {
    if (this.form.invalid) {
      Object.keys(this.form.controls).forEach(key => {
        this.form.get(key)?.markAsTouched();
      });
      return;
    }

    this.isSubmitting.set(true);
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.showSuccess.set(true);
      this.form.reset();
    }, 1800);
  }

  closeModal(): void {
    this.showSuccess.set(false);
  }
}
