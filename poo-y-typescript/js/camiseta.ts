
//Interface
interface CamisetaBase {
    setColor(color);
    getColor();
}


//Decorador
function estampar(logo: string) {
    return function (target: Function) {
        target.prototype.estampacion = function () {
            console.log('Camiseta estampada con el logo de: ' + logo)
        }
    }
}


// Clase (molde del objeto)
// @estampar('Tu1Millon')
class Camiseta implements CamisetaBase {

    constructor(
        public color: string,
        public modelo: string,
        public marca: string,
        public talla: string,
        public precio: number
    ) { }

    // Métodos (funciones o acciones del objeto)
    public setColor(color: string) {
        this.color = color
    }

    public getColor() {
        return this.color
    }
}


// Clase hija
class Sudadera extends Camiseta {
    public capucha: boolean

    setCapucha(capucha: boolean) {
        this.capucha = capucha
    }

    getCapucha(): boolean {
        return this.capucha
    }
}


let camiseta = new Camiseta('Rojo', 'manga larga', 'nike', 'L', 12)
console.log(camiseta)

let sudadera_nike = new Sudadera('Azul', 'manga larga', 'nike', 'L', 12)
sudadera_nike.setCapucha(true)
sudadera_nike.setColor('Gris jaspeado')
console.log(sudadera_nike)
