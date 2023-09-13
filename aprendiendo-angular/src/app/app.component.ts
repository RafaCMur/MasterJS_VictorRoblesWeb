import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public title = 'Master de JavaScripty Angular';
  public mostrarVideojuegos: boolean;
  public descripcion: string;
  public config;

  constructor() {
    this.title = Configuracion.titulo;
    this.mostrarVideojuegos = true;
    this.descripcion = Configuracion.descripcion;
    this.config = Configuracion;
  }

  showVideojuegos(value: boolean) {
    this.mostrarVideojuegos = value;
  }
}
