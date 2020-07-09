const $inicio_botao = document.querySelector(".clock__botao");
$inicio_botao.addEventListener('click' , _ => window.open("/views/inicio.html", "_self"));

let valor_trabalho = sessionStorage.getItem("trabalho");

let minutes = 3;
let seconds = new Date;
seconds.getSeconds();

// function countdown () {}

while ( minutes >= 0 ) {

	for ( seconds = 59; seconds >= 0; seconds--) {
		console.log(`${minutes}:${seconds}`);
	}
	minutes--;
}