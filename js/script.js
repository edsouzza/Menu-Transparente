window.addEventListener("scroll",function(){
    const header = document.querySelector('#header')
    header.classList.toggle('rolagem',window.scrollY > 900) 

    /*O valor zero indica que logo que inicia a scrolagem o efeito será executado
      se desejar que o efeito aconteça na troca de seção indique um valor maior e
      vá testando até atingir o ponto desejado
    */
})