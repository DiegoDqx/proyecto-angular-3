// src/app/servicios/servicios.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor() { }

  obtenerServicios() {
    return [
      {
        nombre: 'Instalación Windows 10 PRO',
        descripcion: 'Instalación rápida y optimizada de Windows 10 PRO.',
        precio: '$15,000 + IVA',
        imagen: 'assets/windows10.jpg'
      },
      {
        nombre: 'Reparación de Hardware',
        descripcion: 'Soluciones para reparar y optimizar el hardware de tu computadora.',
        precio: '$10,000 + IVA',
        imagen: 'assets/reparacion_hardware.jpg'
      },
      {
        nombre: 'Mantenimiento de Red',
        descripcion: 'Instalación y configuración de redes de alta velocidad.',
        precio: '$12,000 + IVA',
        imagen: 'assets/mantenimiento_red.jpg'
      },
      {
        nombre: 'Instalación de Software',
        descripcion: 'Instalación de software especializado para tu empresa o computadora personal.',
        precio: '$8,000 + IVA',
        imagen: 'assets/instalacion_software.jpg'
      },
      {
        nombre: 'Soporte Técnico Remoto',
        descripcion: 'Asistencia técnica a distancia para resolver problemas en tu computadora.',
        precio: '$5,000 + IVA',
        imagen: 'assets/soporte_tecnico_remoto.jpg'
      },
      {
        nombre: 'Reparación de Laptop',
        descripcion: 'Servicio de reparación especializado en laptops y notebooks.',
        precio: '$9,000 + IVA',
        imagen: 'assets/reparacion_laptop.jpg'
      }
    ];
  }
}
