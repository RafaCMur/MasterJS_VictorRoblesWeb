import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent implements OnInit {
    public titulo: string = 'Componente de zapatillas';
    public zapatillas: Array<Zapatilla>;
    public marcas: string[];
    public color: string;
    public mi_marca: string;

    constructor() {
        this.marcas = [];
        this.mi_marca = 'Fila';
        this.color = 'blue';
        this.zapatillas = [
            new Zapatilla('Nike Arimax', 'Nike', 'Rojas', 40, true),
            new Zapatilla('Reebook Classic', 'Reebook', 'Blanco', 80, true),
            new Zapatilla('Reebook Spartan', 'Reebook', 'Negra', 180, true),
            new Zapatilla('Nike Runner MD', 'Nike', 'Negras', 60, true),
            new Zapatilla('Adidas Yezzy', 'Adidas', 'Gris', 180, false),
        ];
    }

    ngOnInit() {
        console.log(this.zapatillas);
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
