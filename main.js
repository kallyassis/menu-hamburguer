$(document).ready(function(){
    $('#carousel-imgs').slick({
        autoplay:true,
    });

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    });

    $('#telefone').mask('(00)00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
            },
            veiculoDeInteresse: {
                required: false,
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: 'por favor, insira seu nome',
            email: 'Esse campo é Obrigatório',
            telefone: 'Esse campo é Obrigatório',
            mensagem: 'Esse campo é Obrigatório'
        },
        submitHandler: function(event, form) {
            event.preventDefault();
            console.log(form)
        },
        invalidHandler: function(event, validador) {
            let camposIncorreto = validador.numberOfInvalids();
            if (camposIncorreto) {
                alert(`Existem ${camposIncorreto} campos incorretos`);
            }
        }
    })

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');

        const nomeVeiculo = ($(this).parent().find('h3').text());

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })

});