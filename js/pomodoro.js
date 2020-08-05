const $botao_inicio = document.querySelector(".clock__botao");
const $temporizador_principal = document.querySelector(".clock__numero");
const $botao_iniciar = document.querySelector(".clock__start");
const $valor_trabalho = parseInt(sessionStorage.getItem("trabalho"));
let ativo = document.querySelector(".botao__inicia");
let pausado = document.querySelector(".botao__pausa");
let estado = false; // true == ativo; | false == pausado;
let segundos = 60;
let minutos = $valor_trabalho - 1;
// Função para fazer com que o número de zeros a esqueda seja suficiente
Number.prototype.pad = function(tamanho) {
  var string = String(this);
  while (string.length < (tamanho || 2)) {string = "0" + string;}
  return string;
}

$temporizador_principal.textContent = `${$valor_trabalho.pad()}:00`;
$botao_iniciar.addEventListener('click', mudarEstado);

function retomar() {
	/* 
	caso seja feita uma parada, o número que 
	será enviado a variável segundos é uma string, 
	por isso a necessidade do parseInt
	*/
	let segundos_contados = parseInt(segundos);
	let minutos_contados = parseInt(minutos);
	return decrementar = setInterval( _ => {
		segundos_contados--;
		$temporizador_principal.textContent = `${minutos_contados.pad()}:${segundos_contados.pad()}`;
		if (minutos_contados == 0 && segundos_contados == 0) {
			clearInterval(decrementar);
			mudarEstado();
		}
		if (segundos_contados == 0) {
			minutos_contados--;
			segundos_contados = 60;
		}
	},1000);
}

function pausar(tarefa){
	clearInterval(tarefa);
	let minutos_restantes = $temporizador_principal.textContent.slice(0,2);
	let segundos_restantes = $temporizador_principal.textContent.slice(3,5);
	segundos = segundos_restantes;
	minutos = minutos_restantes;
	if (minutos_restantes > 0) {
		minutos--;
		segundos = 60;
	}
}

function mudarEstado() {
	if (estado) {
		estado = false;
		pausar(decrementar);
		ativo.classList.toggle('escondido');
		pausado.classList.toggle('escondido');
	}
	else {
		estado = true;
		retomar();
		pausado.classList.toggle('escondido');
		ativo.classList.toggle('escondido');
	}
}

$botao_inicio.addEventListener('click' , _ => window.open("./inicio.html", "_self"));