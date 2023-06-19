function countMovesToEqualizeArray(array) {
    if (array.length === 1) return Math.ceil(array[0] / 2);

    const soma = array.reduce((prev, curr) => curr + prev);
    const metade = Math.ceil(soma / 2);
    let contador = 1;
    let numeroAtual = array[0];

    for (let i = 1; i < array.length - 1; i++) {
        numeroAtual = numeroAtual + array[i];

        contador++;
        if (numeroAtual >= metade) break;
    }

    let array1 = array.slice(0, contador).reduce((prev, curr) => curr + prev);

    let array2 = array
        .slice(contador, array.length)
        .reduce((prev, curr) => curr + prev);

    if (array1 === array2) return 0;

    return Math.abs(array1 - array2);
}

// Example usage
const array1 = [70925];
console.log(countMovesToEqualizeArray(array1));

const array2 = [1, 4, 4];
console.log(countMovesToEqualizeArray(array2));

const array3 = [12, 12, 12];
console.log(countMovesToEqualizeArray(array3));
