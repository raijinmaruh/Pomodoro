// addEventListener('click', (e) => {});
const $setas = {
    cima: document.querySelectorAll(".seta-cima"),
    baixo: document.querySelectorAll(".seta-baixo"),
    limite: 60,
}

/* "Mas não seria mais fácil colocar direto em uma constante
 do que fazer um destructuring depois? É mais código!"
 
 R: estou testando a funcionalidade.
 */
const { cima, baixo } = $setas;

// Falta mudar os valores baseado no clique
cima.forEach( ( seta, indice ) => {

    const $valores = document.querySelectorAll(".etapa__numero");
    seta.addEventListener('click', _ => {
        console.log($setas.limite);
        console.log(indice);
        console.log($valores.item(indice));
    })

})



    // console.log($setas.baixo[indice]);

    // function changeNumber () { 
    // }
    
