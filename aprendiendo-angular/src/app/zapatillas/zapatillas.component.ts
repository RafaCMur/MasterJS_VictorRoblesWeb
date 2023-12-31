import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { ZapatillaService } from '../services/zapatilla.service';

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    providers: [ZapatillaService]
})

export class ZapatillasComponent implements OnInit {
    public titulo: string = 'Componente de zapatillas';
    public zapatillas: Array<Zapatilla>;
    public marcas: string[];
    public color: string;
    public mi_marca: string;

    constructor(
        private _zapatillaService: ZapatillaService
        ) {
        this.marcas = [];
        this.mi_marca = 'Fila';
        this.color = 'blue'
        this.zapatillas = [];
    }

    ngOnInit() {
        this.zapatillas = this._zapatillaService.getZapatillas()
        this.getMarcas();
    }

    getMarcas(){
        this.zapatillas.forEach((zapatilla) => {
            if (this.marcas.indexOf(zapatilla.marca) < 0) this.marcas.push(zapatilla.marca);
        });
        console.log(this.marcas);
    }

    getMarca(){
        alert(this.mi_marca);
    }

    addMarca(){
        this.marcas.push(this.mi_marca);
    }

    borrarMarca(indice: number){
        this.marcas.splice(indice, 1) // Le paso el indice y la cantidad de elementos a borrar a partir de ese indice
    }

    onBlur(){
        console.log('Has salido del input');
    }

    mostrarPalabra(){
        alert(this.mi_marca);
    }
}
