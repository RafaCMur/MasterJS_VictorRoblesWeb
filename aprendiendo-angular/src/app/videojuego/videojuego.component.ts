import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";

@Component ({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {
    public titulo: string;
    public listado: string;

    constructor() {
        this.titulo = "Componente de videojuego";
        this.listado = "Listado de los juegos más populares";
    }

    // Se ejecuta cuando se carga el componente
    ngOnInit() {
        //console.log("Se ha cargado el componente: videojuego");
    }

    // Se ejecuta cada vez que se produzca un cambio en el componente o en la aplicación
    ngDoCheck() {
        //console.log("DoCheck ejecutado!!");
    }

    ngOnDestroy(): void {
        //console.log("OnDestroy ejecutado!!");
    }

    cambiarTitulo() {
        this.titulo = "Nuevo título del componente";
    }
}
