let caracteres = $('.paragraph-description').text();
let explode_caracteres = caracteres.split(" ").length;
let all_participants = document.querySelectorAll('.participants');

$(document).ready(function () {
    disable_f5();
    alter_count(explode_caracteres);
    count_time();
    countCaracteresAndWords();
    reloadGame();
    hidden_score();

    $('#data_table').DataTable({
        "language": {
            "lengthMenu": "Exibindo _MENU_ registros por página",
            "zeroRecords": "Nenhum registro foi encontrado",
            "info": "Exibindo _START_ a _END_ de _TOTAL_ registros",
            "infoEmpty": "Nenhum registro foi encontrado",
            "processing": "Processando...",
            "infoFiltered": "(_MAX_ registros por página)",
            "search": "",
            "searchPlaceholder": "Pesquisar",
            "paginate": {
                "first": "Primeira",
                "last": "Última",
                "next": "Próxima",
                "previous": "Anterior"
            }
        },

        "responsive": true,

        "ordering": false,

        lengthMenu: [
            [10, 25, 50, -1],
            [10, 25, 50, 'Todos'],
        ],

    });
});

// $(function () {      ATALHO PARA CHAMAR O READY
//
// });

//DESCRIPTION REFERENCE
function alter_count(size) {
    $('.full_words').text(size + ' palavras');
}


let textArea = $('.text-area');


//CONT TYPING GAMER
function countCaracteresAndWords() {
    textArea.on('input', function () {
        // COUNT WORDS
        let content = textArea.val();
        let qtdWords = content.split(/\S+/).length - 1;
        $('.count-words').text(qtdWords);

        // COUNT CHARACTERS
        let characters = textArea.val().length;
        $('.count-characters').text(characters);

        validate_comparation();
    });
}


//COMPARE TEXT REFERENCE
function validate_comparation() {
    let value_digitation = textArea.val();
    let description = caracteres;
    let comparation = description.substr(0,value_digitation.length);

    if (value_digitation == comparation){
        textArea.addClass('border-success-text-area');
        textArea.removeClass('border-error-text-area');
    }else {
        textArea.addClass('border-error-text-area');
        textArea.removeClass('border-success-text-area');
    }

    if (value_digitation.length == 0){
        textArea.removeClass('border-success-text-area');
    }
}

// Time during game
function count_time(seconds) {
    textArea.on('focus', function () {
        seconds = $('.seconds').text();
        if (seconds == 0) {
            seconds = 5;
        }
            let interval = setInterval(function () {
                let count_time = seconds--;
                $('.seconds').text(count_time);
                $('#reset').addClass('remove');
                disable_f5();
                if (count_time == 0) {
                    clearInterval(interval);
                    $('#reset').toggleClass('remove');
                    textArea.attr('disabled', true);
                }
            }, 1000);
    });
}


// Include name score
function include_score() {
    insert_score('Pedro Paulo de Souza');
}


// Refresh Game
function reloadGame() {
    let reset = $('#reset');
    reset.click(function () {
        textArea.removeClass('border-error-text-area');
        textArea.attr('disabled', false);
        if (textArea.val() !== '') {
            include_score();
        }
        textArea.val('');
        $('.seconds').text('5');
        count_time();
    })
}


// Show and hide score
function hidden_score() {
    $('#hide-score').click(function () {
        let table = $('.score-board');
        table.addClass('d-none');
        let icon = $('.bi-eye-slash-fill').addClass('d-none');
        let result = $('.bi-eye-fill').removeClass('d-none');

        result.click(function () {
            result.addClass('d-none');
            icon.removeClass('d-none');
            table.removeClass('d-none');
        })

    });
}


// Disable f5 during game play
function disable_f5 () {
    window.onkeydown = function (e) {
        if (e.keyCode === 116) {
            e.keyCode = 0;
            e.returnValue = false;
            return false;
        }

    };
}


// Insert gamer
function insert_score(name) {
    let body_table = $('.score-board').find('tbody');
    let count_characters = $('.count-words').text();

    let html = "<tr class='participants add_effect_line'>"+"<td class='name'>"+name+"</td>"+"<td class='points'>"+count_characters+"</td>"+"<td>"+"<i class='bi bi-trash-fill' title='Remover pontuação'></i>"+"</td>"+"</tr>";

    body_table.prepend(html);
}


// Remove participants
all_participants.forEach(function (participant) {
    participant.addEventListener("click", function (event) {
       let click = event.target.parentNode.parentNode;
       click.classList.add('effect_remove');

       setTimeout(function () {
           click.remove();
       },1200);
    })
});


