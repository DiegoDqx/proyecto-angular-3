import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // Asegúrate de que BrowserModule esté importado

// Asegúrate de que ReactiveFormsModule esté importado para los formularios reactivos
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Importa los módulos necesarios para trabajar con HTTP
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { UbicanosComponent } from './componentes/ubicanos/ubicanos.component';
import { ContactanosComponent } from './componentes/contactanos/contactanos.component';
import { FooterComponent } from './componentes/footer/footer.component';

// Corregir la ruta de SolicitudesContactosComponent
import { SolicitudesContactosComponent } from './componentes/solicitudes-contactos/solicitudes-contactos.component'; // Ruta corregida

import { ServiciosComponent } from './componentes/servicios/servicios.component';

// Importar los servicios
import { ServiciosService } from './componentes/servicios/servicios.service'; // Ruta correcta
import { SolicitudFormularioService } from './componentes/solicitud-formulario/solicitud-formulario.service'; // Ruta correcta
import { TecnicosService } from './componentes/solicitud-formulario/tecnicos.service'; // Ruta correcta

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    UbicanosComponent,
    ContactanosComponent,
    FooterComponent,
    SolicitudesContactosComponent, // Asegúrate de que este componente esté correctamente importado
    ServiciosComponent // Agregar el componente Servicios
  ],
  imports: [
    BrowserModule, // Necesario para una aplicación Angular
    AppRoutingModule, // Para las rutas
    FormsModule, // Si usas formularios
    ReactiveFormsModule, // Si usas formularios reactivos
    HttpClientModule // Necesario para hacer peticiones HTTP
  ],
  providers: [
    ServiciosService, // Registrar el servicio de servicios
    SolicitudFormularioService, // Registrar el servicio de formulario
    TecnicosService // Registrar el servicio de técnicos
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
