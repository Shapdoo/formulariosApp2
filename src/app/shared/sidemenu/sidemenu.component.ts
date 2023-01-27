import { Component } from '@angular/core';

interface MenuItem{
  texto: string
  ruta: string
}


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent {

  public templateMenu: MenuItem[] = [
    {
      texto: 'Basicos',
      ruta: 'template/basicos',
    },
    {
      texto: 'Dinámicos',
      ruta: 'template/dinamicos'
    },
    {
      texto: 'Swtiches',
      ruta: 'template/switches'
    }
  ]

  public reactiveMenu: MenuItem[] = [
    {
      texto: 'Basicos',
      ruta: 'reactive/basicos',
    },
    {
      texto: 'Dinámicos',
      ruta: 'reactive/dinamicos'
    },
    {
      texto: 'Swtiches',
      ruta: 'reactive/switches'
    }
  ]

  public authMenu: MenuItem[] = [
    {
      texto: 'Registro',
      ruta: 'auth/registro'
    },
    {
      texto: 'Login',
      ruta: 'auth/login'
    }
  ]

}
