import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css'],
})
export class BasicosComponent implements OnInit {
  public miFormulario: FormGroup = this._formBuild.group({
    nombre: ['', [Validators.required, Validators.maxLength(10)]],
    precio: [0, [Validators.required, Validators.min(0)]],
    existencias: [0, [Validators.required, Validators.min(0)]],
  });

  public isValid!: boolean;

  constructor(private _formBuild: FormBuilder) {}

  ngOnInit(): void {
    // this.isValid = this.miFormulario.
  }

  campoEsValido(campo: string) {
    return (
      this.miFormulario.controls[campo].errors &&
      this.miFormulario?.controls[campo].touched
    );
  }

  guardar(): void {
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value)
    this.miFormulario.reset()
  }
}
