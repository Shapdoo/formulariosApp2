import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit {

  public miFormulario: FormGroup = this._formBuilder.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    condiciones: [false, Validators.requiredTrue]
  })

  public persona = {
    genero: 'F',
    notificaciones: true
  }

  constructor(
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.miFormulario.reset({
      ...this.persona,
      condiciones: false
    })
  }

  guardar(){
    const formValue = { ...this.miFormulario.value }
    delete formValue.condiciones

    this.persona = formValue
  }
}
