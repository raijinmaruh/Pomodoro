const $botao_inicio = document.querySelector(".clock__botao");
$botao_inicio.addEventListener('click' , _ => window.open("/views/inicio.html", "_self"));

// Diretamente do stack overflow
// Função para fazer com que o número de zeros a esqueda seja suficiente
Number.prototype.pad = function(tamanho = 2) {
  var string = String(this);
  while (string.length < (tamanho || 2)) {string = "0" + string;}
  return string;
}

const temporizador_principal = document.querySelector(".clock__numero");
const botao_iniciar = document.querySelector(".clock__start");
let ativo = document.querySelector(".botao__inicia");
let pausado = document.querySelector(".botao__pausa");
const valor_trabalho = sessionStorage.getItem("trabalho");
let estado = true;

temporizador_principal.textContent = `${valor_trabalho}:00`;

botao_iniciar.addEventListener('click', decrementar);

function decrementar() {
	estado = false;
	mudarEstado(estado);
	let minutos = valor_trabalho - 1;
	const SEGUNDOS = 60;
		
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

function pausar(){
	
}

function mudarEstado(estadoAtual) {
	let escondido = 'escondido';
	if (estado) {
		ativo.classList.remove(escondido);
		pausado.classList.add(escondido);
	} else {
		ativo.classList.add(escondido);
		pausado.classList.remove(escondido);
	}
}