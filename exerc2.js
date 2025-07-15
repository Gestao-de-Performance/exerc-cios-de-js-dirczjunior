let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let soma = 0;

numeros.forEach(function (n) {
    soma += n;
});

let media = soma / numeros.length;
console.log(media);