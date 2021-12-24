let pesoDaPeça = 98

if (pesoDaPeça >= 100) {
    console.log("Peça cadastrada")
} else {
    console.log("Cadastro negado, devido a peça ter menos de 100g")
}

let numeroDePeças = 8

if (numeroDePeças <= 10) {
    console.log("Peça cadastrada")
} else {
    console.log("Cadastro negado, o armazem só suporta até 10 peças")
}

let nomePeça = "Pn"
let TamanhoDoNome = nomePeça.length

if (TamanhoDoNome < 3) {
    console.log("Peça não cadastrada. Nome muito curto")
} else {
    console.log("Peça cadastrada")
}