const movimentoformulario = document.querySelector (".formulario-conte-problema")
const mascara = document.querySelector(".mascara-formulario")
const ver = document.getElementById('p')

function formulario(){
    movimentoformulario.style.left = "50%"
    movimentoformulario.style.top = "25%"
    movimentoformulario.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function removerformulario(){
    mascara.style.visibility = "hidden"
    movimentoformulario.style.left = "-280px"
    movimentoformulario.style.top = "25%"
    movimentoformulario.style.transform = "translateX(0)"
}

function responsividade(){
    if (window.innerWidth < 1024) {
        ver.style.color = "black"
      } else {
        ver.style.color = "blue"
      }

    window.addEventListener('load', responsividade);
    window.addEventListener('resize', responsividade);
}