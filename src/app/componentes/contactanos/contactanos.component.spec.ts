// src/app/contactanos/contactanos.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactanosComponent } from './contactanos.component';
import { FormBuilder } from '@angular/forms';
import { SolicitudFormularioService } from '../solicitud-formulario/solicitud-formulario.service';
import { TecnicosService } from '../servicios/tecnicos.service'; // Corregido

describe('ContactanosComponent', () => {
  let component: ContactanosComponent;
  let fixture: ComponentFixture<ContactanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactanosComponent],
      providers: [FormBuilder, SolicitudFormularioService, TecnicosService] // Asegúrate de proveer el servicio
    }).compileComponents();

    fixture = TestBed.createComponent(ContactanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load technicians', () => {
    expect(component.tecnicos.length).toBeGreaterThan(0);
  });
});
