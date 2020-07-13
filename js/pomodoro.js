const $inicio_botao = document.querySelector(".clock__botao");
$inicio_botao.addEventListener('click' , _ => window.open("/views/inicio.html", "_self"));

let valor_trabalho = sessionStorage.getItem("trabalho");

let minutos = 3;
let segundos = 59;
let temporizador;

/* 
Essa função irá implementar a cada iteração "i = 1".
Caso o número em i seja maior, o código assume que o código
dentro do for terá que ser feito i = n vezes.
O que pode prejudicar a saída, já que ele executaria
Ex caso i = 3:
3:59 
3:58
3:57
de uma só vez.
*/
for (let i = 0; i < 1; i++) {
	let segundos_contados = segundos;
	let minutos_contados = minutos;

	temporizador = setInterval( _ => {
		console.log(`${minutos_contados}:${segundos_contados}`);
		segundos_contados--;
			if (segundos_contados < 0) {
				minutos_contados--;
				segundos_contados = segundos;
			} if (minutos_contados === 0 && segundos_contados === 0) {
				clearInterval(temporizador);
			}
	},1000); 
}