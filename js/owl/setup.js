$('.owl-carousel').owlCarousel({
    loop:true, /* se tivesse false só iria até o final da lista, não ia fazer o loop e iniciar a lista ao arrastar para o lado */
    margin:12,
    nav:true, /* setinhas abaixos das capas */
    responsive:{ 
        0:{ /* quando a tela tiver próximo de 0px ou mais pode colocar só 1 elemento */
            items:1
        },
        600:{ /* quando a tela tiver 600px ou menos pode colocar até 3 elementos */
            items:3
        },
        1000:{ /* quando a tela tiver 1000px ou mais pode colocar até 5 elementos */
            items:5
        }
    }
})