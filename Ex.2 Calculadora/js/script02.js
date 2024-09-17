let opcao = parseInt(prompt("Digite uma das opções aritmética : \n 1.Soma \n 2.Subtração \n 3.Multiplicação \n 4.Divisão "))
if (opcao == 1) {/* Soma */
    let numero01 = parseInt(prompt("Digite um valor : "))
    let numero02 = parseInt(prompt("Digite outro valor : "))
    let resultado = numero01 + numero02
    alert("Resultado é " + resultado)
} else
if (opcao == 2) {/* subtração  */
    let numero03 = parseInt(prompt("Digite um valor : "))
    let numero04 = parseInt(prompt("Digite outro valor : "))
    let resultado = numero03 - numero04
    alert("Resultado é " + resultado)
} else
if (opcao == 3) {/* multriplicação */
    let numero05 = parseInt(prompt("Digite um valor : "))
    let numero06 = parseInt(prompt("Digite outro valor : "))
    let resultado = numero05 * numero06
    alert("Resultado é " + resultado)
} else
if (opcao == 4) {/* divisão */
    let numero07 = parseInt(prompt("Digite um valor : "))
    let numero08 = parseInt(prompt("Digite outro valor : "))
    let resultado = numero07 / numero08
    alert("Resultado é " + resultado)
} else {
    alert("Opção Invalída")
}
