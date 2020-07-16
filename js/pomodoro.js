// Diretamente do stack overflow
// Função para fazer com que o número de zeros a esqueda seja suficiente
Number.prototype.pad = function(tamanho = 2) {
  var string = String(this);
  while (string.length < (tamanho || 2)) {string = "0" + string;}
  return string;
}

const temporizador_principal = document.querySelector(".clock__numero");
const iniciar = document.querySelector(".clock__start");
const $inicio_botao = document.querySelector(".clock__botao");
$inicio_botao.addEventListener('click' , _ => window.open("/views/inicio.html", "_self"));
let valor_trabalho = sessionStorage.getItem("trabalho");

temporizador_principal.textContent = `${valor_trabalho}:00`;
iniciar.addEventListener('click', decrementar); 
/* 
Essa função irá implementar a cada iteração "i = 1".
Caso o número em i seja maior, o loop assume que o código
dentro do for terá que ser feito i = n vezes.
A saída seria executada três no caso abaixo.
Ex: caso i = 3:
3:59 
3:58
3:57
de uma só vez.
*/

function decrementar() {
	let minutos = valor_trabalho - 1;
	const SEGUNDOS = 60;
		for (let i = 0; i < 1; i++) {
		let segundos_contados = SEGUNDOS;
		let minutos_contados = minutos;
		let temporizador = setInterval( _ => {
			segundos_contados--;
			temporizador_principal.textContent = `${minutos_contados}:${segundos_contados.pad()}`;
				if (minutos_contados === 0 && segundos_contados === 0) {
					temporizador_principal.textContent;
					clearInterval(temporizador);
				}
				if (segundos_contados === 0) {
					minutos_contados--;
					segundos_contados = SEGUNDOS;
				}
		},1000);
	}
}