function myFunction1() {
    let inputValue = document.getElementById("myInput").value;
    document.getElementById("results").innerHTML = "Botón 1 presionado, valor del input: " + inputValue;
}

function myFunction2() {
    let inputValue = document.getElementById("myInput").value;
    document.getElementById("results").innerHTML = "Botón 2 presionado, valor del input: " + inputValue;
}
function myFunction3() {
    let inputValue = document.getElementById("myInput").value;
    document.getElementById("results").innerHTML = "Botón 3 presionado, valor del input: " + inputValue;
}
function myFunction4() {
    let inputValue = document.getElementById("myInput").value;
    document.getElementById("results").innerHTML = "Botón 4 presionado, valor del input: " + inputValue;
}

class Calculadora {
    constructor() {
        this.display = 0;
    }

    sumar(n) {
        this.display += n;
        return this.display;
    }

    restar(k) {
        this.display -= k;
        return this.display;
    }

    multiplicar(p) {
        this.display *= p;
        return this.display;
    }

    dividir(l) {
        if (l !== 0) {
            this.display /= l;
            return this.display;
        } else {
            console.log("Error: División por cero");
            return "Error";
        }
    }
}

// Crear instancia de la calculadora
const calculadora = new Calculadora();

// Agregar eventos a los botones
document.getElementById('sumar').addEventListener('click', () => {
    document.getElementById('display').innerText = calculadora.sumar(5);
});

document.getElementById('restar').addEventListener('click', () => {
    document.getElementById('display').innerText = calculadora.restar(2);
});

document.getElementById('multiplicar').addEventListener('click', () => {
    document.getElementById('display').innerText = calculadora.multiplicar(4);
});

document.getElementById('dividir').addEventListener('click', () => {
    document.getElementById('display').innerText = calculadora.dividir(3);
});