import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';  // Importa FormGroup y Validators
import { TecnicosService } from '../../servicios/tecnicos.service';  // Ruta corregida
import { SolicitudFormularioService } from '../../servicios/solicitud-formulario/solicitud-formulario.service'; // Ruta corregida

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent implements OnInit {
  formularioForm: FormGroup;  // Declara el tipo de formulario como FormGroup
  datos_formulario: any;
  tecnicos: any[] = [];  // Variable para almacenar los técnicos

  constructor(
    private formBuild: FormBuilder,
    private solicitudFormularioSrv: SolicitudFormularioService,
    private tecnicosService: TecnicosService  // Inyectamos el servicio de técnicos
  ) {
    // Inicialización del formulario con validaciones
    this.formularioForm = this.formBuild.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      mensaje: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Cargar los técnicos al iniciar el componente
    this.tecnicos = this.tecnicosService.obtenerTecnicos();
  }

  // Función para enviar el formulario
  enviarDatos(): void {
    if (this.formularioForm.invalid) {
      alert("Por favor completa el formulario correctamente.");
      return;
    }

    this.solicitudFormularioSrv.registrarFormulario(this.formularioForm.value).subscribe(
      (response: any) => {
        this.datos_formulario = response.solicitud_formulario;
        console.log(this.datos_formulario);
        alert("Datos guardados correctamente");
        this.formularioForm.reset();
      }, 
      error => {
        console.log(error);
        alert("Ocurrió un error al guardar los datos.");
      }
    );
  }
}
