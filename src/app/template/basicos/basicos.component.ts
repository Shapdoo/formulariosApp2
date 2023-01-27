import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css'],
})
export class BasicosComponent {
  @ViewChild('miFormulario')
  public miFormulario!: NgForm;

  public initialStateForm = {
    producto: 'RTX 4080ti',
    precio: 10,
    stock: 10,
  };

  constructor() {}

  nombreInvalido(): boolean {
    return (
      this.miFormulario?.controls['producto']?.invalid &&
      this.miFormulario?.controls['producto']?.touched
    );
  }

  precioInvalido(): boolean {
    return (
      this.miFormulario?.controls['precio']?.touched &&
      this.miFormulario?.controls['precio']?.value < 0
    );
  }

  stockInvalido(): boolean {
    return (
      this.miFormulario?.controls['stock']?.touched &&
      this.miFormulario?.controls['stock']?.value < 0
    );
  }

  guardar() {
    this.miFormulario.reset({
      producto: 'Algo',
      precio: 0,
      existencias: 0
    })
  }
}
