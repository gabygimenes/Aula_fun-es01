function calcularDesconto(preco, desconto) {
    
    let valorDesconto = preco * desconto / 100;

    return preco - valorDesconto;

}
let valorFinal = calcularDesconto(100,67);
console.log(valorFinal);