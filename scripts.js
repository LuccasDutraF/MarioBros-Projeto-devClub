const movimentoformulario = document.querySelector (".formulario-conte-problema")
const mascara = document.querySelector(".mascara-formulario")

function formulario(){
    movimentoformulario.style.left = "50%"
    movimentoformulario.style.top = "25%"
    movimentoformulario.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function removerformulario(){
    if (window.innerWidth > 1024) 
      {
      mascara.style.visibility = "hidden"
      movimentoformulario.style.top = "25%"
      movimentoformulario.style.left = "-280px"
      movimentoformulario.style.transform = "translateX(0)"
      } 
      else if (window.innerWidth > 768) 
      {
      mascara.style.visibility = "hidden"
      movimentoformulario.style.left = "-270px"
      movimentoformulario.style.top = "32%"
      movimentoformulario.style.transform = "translateX(0)"
      } 
      else if (window.innerWidth >= 375) 
      {
      mascara.style.visibility = "hidden"
      movimentoformulario.style.left = "-270px"
      movimentoformulario.style.top = "32%"
      movimentoformulario.style.transform = "translateX(0)"
      }
      else if(window.innerWidth > 0) 
      {
      mascara.style.visibility = "hidden"
      movimentoformulario.style.left = "-190px"
      movimentoformulario.style.top = "32%"
      movimentoformulario.style.transform = "translateX(0)"
      }
}

    window.addEventListener('load', removerformulario);
    window.addEventListener('resize', removerformulario);