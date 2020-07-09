/* "Mas não seria mais fácil colocar direto em uma constante
 do que fazer um destructuring depois? É mais código!"
 
 R: estou testando a funcionalidade.
 */
const $setas = {
    cima: document.querySelectorAll(".seta-cima"),
    baixo: document.querySelectorAll(".seta-baixo"),
    limites: [25, 5, 3]
}
const { cima, baixo } = $setas;

// Valores padrões
const $valores = document.querySelectorAll(".etapa__numero");
const valor_trabalho = $valores[0];
const valor_pausa = $valores[1];
const valor_sessao = $valores[2];
valor_trabalho.defaultValue = 25;
valor_pausa.defaultValue = 5;
valor_sessao.defaultValue = 3;

// Tempo limite de cada campo
const [trabalho, pausa, sessao] = $setas.limites;

cima.forEach( ( seta, indice ) => {
    
    seta.addEventListener('click', _ => {
        const valor = $valores[indice];
        const limite = [trabalho, pausa, sessao];
        if (valor.value < limite[indice]){
            valor.value++;
        }
    })
})

baixo.forEach( ( seta, indice ) => {
    
    seta.addEventListener('click', _ => {
        const valor = $valores[indice];
        const limite = 0;
        if (valor.value > limite){
            valor.value--;
        }
    })
})

// Setar o temporizador
const $continuar_btn = document.querySelector(".continuar-btn");

$continuar_btn.addEventListener("click", _ => {
    sessionStorage.setItem("trabalho", valor_trabalho.value);
    sessionStorage.setItem("pausa", valor_pausa.value);
    sessionStorage.setItem("sessao", valor_sessao.value);
    /* 
    Nesse caso, a window será redirecionada para a mesma página, utilizando o "_self".
    Caso esse argumento não seja passado, a página é recarregada em uma outra aba. 
    Default: _blank
    */
    window.open("/views/pomodoro.html", "_self");
});