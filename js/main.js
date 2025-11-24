
function ordenarNumerosConIfElse() {
    // 1. Solicitar los 3 números al usuario y convertirlos a tipo Number
    const a = Number(prompt("Ingresa el primer número:"));
    const b = Number(prompt("Ingresa el segundo número:"));
    const c = Number(prompt("Ingresa el tercer número:"));

    let mayor, centro, menor;
    
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        console.error("❌ Error: Por favor, ingresa solo valores numéricos válidos.");
        return;
    }

    if (a === b && b === c) {
        const mensajeIguales = `¡Los tres números ingresados son iguales: ${a}!`;
        console.log("======================================");
        console.log(mensajeIguales);
        console.log(`Orden: ${a}, ${b}, ${c}`);
        console.log("======================================");
        return;
    }

    if (a >= b && a >= c) {
        mayor = a;

        if (b >= c) {
            centro = b;
            menor = c;
        } else { // c > b
            centro = c;
            menor = b;
        }
    }

    else if (b >= a && b >= c) {
        mayor = b;
        if (a >= c) {
            centro = a;
            menor = c;
        } else { // c > a
            centro = c;
            menor = a;
        }
    }

    else {
        mayor = c;
        if (a >= b) {
            centro = a;
            menor = b;
        } else { // b > a
            centro = b;
            menor = a;
        }
    }

    console.log("======================================");

    console.log(`🔽 Ordenados de **mayor a menor**: ${mayor}, ${centro}, ${menor}`);

    console.log(`🔼 Ordenados de **menor a mayor**: ${menor}, ${centro}, ${mayor}`);
    
    console.log("======================================");
}

ordenarNumerosConIfElse();