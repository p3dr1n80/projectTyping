<?php
    require_once "includes/Includes.php";
    $link = new Includes();
?>

<!doctype html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta charset="UTF-8">
    <?=$link->insert_head_links()?>
    <title>DEVs</title>
</head>

<body>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link">Home <span class="sr-only">(current)</span></a>
            </li>
        </ul>
    </div>
</nav>
<main class="container mt-5" id="main-values">
    <div class="title-page">
        <h1 class="title">Typing Velocity</h1>
    </div>

    <div class="description-page">
        <label class="mt-3"><strong>Palavra a ser digitada:</strong></label>
        <p class="paragraph-description">Hoje é um ótimo dia para codar</p>
    </div>

    <div class="list">
        <div class="icon-document">
            <i class="bi bi-file-text-fill"></i>
            <span class="full_words"></span>
        </div>

        <div class="icon-alarm">
            <i class="bi bi-alarm-fill"></i>
            <span class="seconds">5</span> <span>segundos</span>
        </div>
    </div>


    <div class="field-typing">
        <textarea class="text-area" maxlength="300" rows="7" placeholder="Digite aqui"></textarea>
    </div>

    <div class="actions">
        <a id="reset" class="mb-2 mr-2"><i class="bi bi-bootstrap-reboot" title="Reiniciar o jogo"></i></a>
        <a id="hide-score"><i class="bi bi-eye-slash-fill" title="Ocultar placar"></i></a>
        <a id="vis-score"><i class="bi bi-eye-fill d-none" title="Mostrar placar"></i></a>
    </div>

    <div class="field-counts">
        <i class="characters"><span class="count-characters">0</span> caracteres</i>
        <i><span class="count-words">0</span> palavras</i>
    </div>

    <section class="score-board">
        <h3 class="board" id="board">Placar</h3>
        <table class="table bg-light" id="data_table">
            <thead class="bg-dark">
            <tr>
                <th class="head-name">Nome</th>
                <th class="head-number-characters">Número de palavras</th>
                <th class="actions-score">Ações</th>
            </tr>
            </thead>
            <tbody>
            <tr class="participants add_effect_line">
                <td class="name">Pedro Silva</td>
                <td class="points">9</td>
                <td>
                    <i class="bi bi-trash-fill" title="Remover pontuação"></i>
                </td>
            </tr>
            <tr class="participants add_effect_line">
                <td>Natacha Alves</td>
                <td>12</td>
                <td>
                    <i class="bi bi-trash-fill" title="Remover pontuação"></i>
                </td>
            </tr>
            </tbody>
        </table>
    </section>

</main>

<?=$link->insert_scripts()?>
</body>

</html>
