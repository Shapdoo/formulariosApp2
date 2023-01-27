import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css'],
})
export class DinamicosComponent implements OnInit {
  @ViewChild('miFormulario')
  public miFormulario!: NgForm;

  public nuevoJuego: string = '';

  public persona: Persona = {
    nombre: 'Piero',
    favoritos: [
      { id: 1, nombre: 'Metal Gear' },
      { id: 2, nombre: 'Death Stranding' },
    ],
  };

  constructor() {}

  ngOnInit(): void {
    console.log({ favoritos: this.persona.favoritos })
  }

  guardar(): void {}

  agregarJuego(): void {

    console.log('nuevo juego', this.nuevoJuego)

    const nuevoJuego: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push({ ...nuevoJuego })
    this.nuevoJuego = ''
  }

  eliminar(index: number): void {
    this.persona.favoritos.splice(index, 1)
  }

  campoInvalido(): boolean {
    return (
      this.miFormulario?.controls['nombre']?.invalid &&
      this.miFormulario?.controls['nombre']?.touched
    );
  }
}
