// addEventListener('click', (e) => {});
const $setas = {
    cima: document.querySelectorAll(".seta-cima"),
    baixo: document.querySelectorAll(".seta-baixo"),
    limites: [25, 5, 4]
}

/* "Mas não seria mais fácil colocar direto em uma constante
 do que fazer um destructuring depois? É mais código!"
 
 R: estou testando a funcionalidade.
 */
const { cima, baixo } = $setas;
const $valores = document.querySelectorAll(".etapa__numero");
// Tempo limite de cada campo
const [trabalho, pausa, sessao] = $setas.limites;
cima.forEach( ( seta, indice ) => {
    
    seta.addEventListener('click', _ => {
        const valor = $valores[indice];
        const limite = [trabalho, pausa, sessao];
        if (valor.textContent < limite[indice]){
            valor.textContent++;
        }
    })
})

baixo.forEach( ( seta, indice ) => {
    
    seta.addEventListener('click', _ => {
        const valor = $valores[indice];
        const limite = 0;
        if (valor.textContent > limite){
            valor.textContent--;
        }
    })
})