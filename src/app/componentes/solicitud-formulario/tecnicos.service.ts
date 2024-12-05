// src/app/servicios/tecnicos.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TecnicosService {

  constructor() { }

  obtenerTecnicos() {
    return [
      {
        nombre: 'Juan Pérez',
        especialidad: 'Reparación de Hardware',
        foto: 'assets/tecnico1.jpg' // Asegúrate de tener esta imagen en la carpeta assets
      },
      {
        nombre: 'Ana López',
        especialidad: 'Instalación de Software',
        foto: 'assets/tecnico2.jpg'
      },
      {
        nombre: 'Carlos Gómez',
        especialidad: 'Mantenimiento de Red',
        foto: 'assets/tecnico3.jpg'
      }
    ];
  }
}
