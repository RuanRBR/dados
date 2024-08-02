//string
let primeiroNome = "Nome"
let ultimoNome = "Sobrenome"
let nomeCompleto = primeiroNome + " " + ultimoNome

console.log(nomeCompleto)

//numero
let n1 = 10
let n2 = 20

let soma = n1 + n2
let sub = n1 - n2
let multi = n1 * n2
let div = n1 * n2

console.log(soma + '\n' + sub + '\n' + multi + '\n' + div)

//booleanos
let estaChovendo = true
if(estaChovendo){
    console.log("está chovendo")
}else{
    console.log("não esta chovendo")
}

//null e undefined

let  resposta = null
let nota
console.log("Resposta = " + resposta)
console.log("Nota = " + nota)

//symbol

let idUnico = Symbol("id")
let produto = {
    [idUnico]: 123
}
console.log(produti[idUnico])
