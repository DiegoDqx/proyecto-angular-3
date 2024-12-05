import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/servicios/servicios.service'; // Corregir la ruta del servicio

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  servicios: any[] = []; // Declaramos el tipo de servicios

  constructor(private serviciosService: ServiciosService) {}

  ngOnInit(): void {
    // Obtener los servicios desde el servicio y asignarlos a la variable servicios
    this.servicios = this.serviciosService.obtenerServicios();
  }
}
