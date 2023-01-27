import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css'],
})
export class DinamicosComponent implements OnInit {
  
  public miFormulario: FormGroup = this._formBuilder.group({
    nombre: ['', [Validators.required]],
    favoritos: this._formBuilder.array(
      [
        ['Metal Gear', Validators.required],
        ['Death Stranding', Validators.required],
      ],
      Validators.required
    ),
  });

  public nuevoFavorito: FormControl = this._formBuilder.control(
    '',
    Validators.required
  );

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  borrar(index: number) {
    this.favoritosArr.removeAt(index);
  }

  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  agregarFavorito() {
    if (this.nuevoFavorito.invalid) {
      return;
    }

    this.favoritosArr.push(
      this._formBuilder.control(this.nuevoFavorito.value, Validators.required)
    )

    this.miFormulario.reset()
  }

  campoEsValido(control: string): boolean | null {
    return (
      this.miFormulario.controls[control].errors &&
      this.miFormulario.controls[control].touched
    );
  }

  guardar(): void {
    if ( this.miFormulario.invalid ){
      this.miFormulario.markAllAsTouched()
      return
    }

    console.log(this.miFormulario.value)
  }
}
