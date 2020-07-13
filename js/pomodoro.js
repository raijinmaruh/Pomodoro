// Diretamente do stack overflow
Number.prototype.pad = function(tamanho = 2) {
  var string = String(this);
  while (string.length < (tamanho || 2)) {string = "0" + string;}
  return string;
}

const $inicio_botao = document.querySelector(".clock__botao");
$inicio_botao.addEventListener('click' , _ => window.open("/views/inicio.html", "_self"));
const temporizador_principal = document.querySelector(".clock__numero");
let valor_trabalho = sessionStorage.getItem("trabalho");

temporizador_principal.textContent = `${valor_trabalho}:00`;

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

function decrementar(minutos) {
	const SEGUNDOS = 3;
		for (let i = 0; i < 1; i++) {
		let segundos_contados = SEGUNDOS;
		let minutos_contados = minutos;

		let temporizador = setInterval( _ => {
			temporizador_principal.textContent = `${minutos_contados}:${segundos_contados.pad()}`;
			segundos_contados--;
				if (segundos_contados < 0) {
					minutos_contados--;
					segundos_contados = SEGUNDOS;
				} if (minutos_contados === 0 && segundos_contados === 0) {
					clearInterval(temporizador);
				}
		},1000);
	}
}