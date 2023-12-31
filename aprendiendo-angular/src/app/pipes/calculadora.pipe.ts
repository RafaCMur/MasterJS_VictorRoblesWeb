import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'calculadora'
})
export class CalculadoraPipe implements PipeTransform {

    // value | calculadora: value_two
    // param1               param2
    transform(value: number, value_two: number) {
        const operaciones = `
            Suma: ${value + value_two} -
            Resta: ${value - value_two} -
            Multiplicación: ${value * value_two} -
            División: ${value / value_two}
        `
        return operaciones;
    }
}