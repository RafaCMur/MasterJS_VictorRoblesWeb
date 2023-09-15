import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';


@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {

  public user: any;
  public userId: number;
  public fecha: Date;

  constructor(
    private _peticionesService: PeticionesService
  ) {
    this.fecha = new Date(2019, 5, 20);
    this.userId = 1;
  }

  ngOnInit() {
    this.cargaUsuario();
  }

  cargaUsuario() {
    this.user = false;
    //Suscribe recoge la respuesta de la petición AJAX y la guarda en la variable result
    this._peticionesService.getUser(this.userId).subscribe({
      next: (result: any) => {
        this.user = result.data;
        console.log(this.user);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
}
