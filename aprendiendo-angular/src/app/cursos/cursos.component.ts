import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {

  public nombre: string;
  public followers: number;

  constructor(
    private _route: ActivatedRoute,  // Para obtener los parámetros de la URL
    private _router: Router  // Para redireccionar a otra página
  ) {this.nombre = ''; this.followers = 0;}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.nombre = params['nombre'];
      this.followers = +params['followers'];  // El + convierte el string en un entero

      if (this.nombre == 'ninguno') {
        this._router.navigate(['/home']);
      }
      
    });
  }

  redirigir() {
    this._router.navigate(['/zapatillas']);
  }
}
