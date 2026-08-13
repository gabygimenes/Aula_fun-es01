function calcularSalario(salario, bonus) {
    
    let valorBonus = salario*bonus /100;
    let salarioFinal =salario + valorBonus;

    return salarioFinal;
}

let salario = calcularSalario(30000,700)

console.log(`Salário final: R$ ${salario}`);