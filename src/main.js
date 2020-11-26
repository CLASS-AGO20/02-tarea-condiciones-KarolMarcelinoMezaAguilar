export default class App {

    // Funcion que determine si un número es par
    esPar(numero){
        
        let par;

        if(numero % 2 === 0){
            par = "true";
        }else{
            par = "false";
        }

        return par;

    }

    // Función que determina si un número es múltiplo de otro
    esMultiplo(numero1, numero2){

        let multiplo;

        if(numero1 % numero2 === 0){
            multiplo = "true"
        }else{
            multiplo = "false"
        }

        return multiplo;

    }


    // Función que calcule el salario de un trabajador
    calcularSalario(tipoTrabajador, horasTrabajadas){
        
        let salario;

        switch(tipoTrabajador){
            case 1:
                salario = 20 * horasTrabajadas;
                break;
            case 2:
                salario = 22 * horasTrabajadas;
                break;
            case 3:
                salario = 25 * horasTrabajadas;
                break
            default:
                salario = -1;
        }

        return salario;

    }

    
    // Función que convierta una calificación en letra


    // Función que diga el número más cercano a 100


    // Función que haga una operación 


    // Función que haga rentas de películas


    // Función que calcule el costo de boletos de teatro


    // Función que determine si un número está dentro de un rango

}

let app = new App();

// F1
console.log(app.esPar(8));
console.log(app.esPar(5));

// F2
console.log(app.esMultiplo(15, 3));
console.log(app.esMultiplo(21, 9));

// F3
console.log(app.calcularSalario(1, 10));
console.log(app.calcularSalario(3, 10));
console.log(app.calcularSalario(2, 10));

// F4


// F5


// F6


// F7


// F8


// F9

