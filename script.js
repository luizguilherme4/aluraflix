function voltar() {
    document.body.classList.remove(document.body.classList.item(1));

    var mudaHeader = document.querySelector("header img");
    mudaHeader.classList.remove("aluraflix-logo");

    var mudaMain = document.querySelector("main");
    mudaMain.innerHTML = `<h1>Minha lista de favoritos:</h1>
    <div class="filmes-capa">
        <img src="img/viagemdechihiroCapa.svg" onclick="mostrafilme1()">
        <img src="img/forrestgumpCapa.svg" onclick="mostrafilme2()">
        <img src="img/oshowdetrumanCapa.svg" onclick="mostrafilme3()">
        <img src="img/starwarsCapa.svg" onclick="mostrafilme4()">
    </div>`
}

function mostrafilme1() {
    document.body.classList.add("background-chihiro");

    var opacidade = document.createElement("div");
    opacidade.classList.add("background-opacidade");

    var body = document.querySelector("body");
    body.innerHTML = "";

    opacidade.innerHTML = `<header>
    <img src="img/aluraflixLogo.svg" class="aluraflix-logo" onclick="voltar()">
</header>

<main>
    <div class="titulo-estrelas-linha">
        <div class="titulo-estrelas">
            <h1>A viagem de Chihiro</h1>
            <img src="img/estrelas.svg" class="estrelas">
        </div>
        <div class="linha"></div>
    </div>
    <h3>Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que a desobedecem são transformados em animais.</h3>
    <button onclick="voltar()">
        <img src="img/seta.svg" class="seta-butao">
        <p>Voltar</p>
    </button>
</main>

<footer>
    <p>feito com </p>
    <img src="img/coracaoIcone.svg">
    <p>por Luiz</p>
</footer>`
    body.appendChild(opacidade);
}

function mostrafilme2() {
    document.body.classList.add("background-forrestgump");

    var opacidade = document.createElement("div");
    opacidade.classList.add("background-opacidade");

    var body = document.querySelector("body");
    body.innerHTML = "";

    opacidade.innerHTML = `<header>
    <img src="img/aluraflixLogo.svg" class="aluraflix-logo" onclick="voltar()">
</header>

<main>
    <div class="titulo-estrelas-linha">
        <div class="titulo-estrelas">
            <h1>Forrest Gump</h1>
            <img src="img/estrelas.svg" class="estrelas">
        </div>
        <div class="linha"></div>
    </div>
    <h3>Um homem gentil e simpático presencia os principais eventos das décadas de 1960 e 1970 e, 
    graças a seu otimismo inabalável, inspira todas as pessoas ao seu redor.</h3>
    <button onclick="voltar()">
        <img src="img/seta.svg" class="seta-butao">
        <p>Voltar</p>
    </button>
</main>

<footer>
    <p>feito com </p>
    <img src="img/coracaoIcone.svg">
    <p>por Luiz</p>
</footer>`
    body.appendChild(opacidade);
}

function mostrafilme3() {
    document.body.classList.add("background-oshowdetruman");

    var opacidade = document.createElement("div");
    opacidade.classList.add("background-opacidade");

    var body = document.querySelector("body");
    body.innerHTML = "";

    opacidade.innerHTML = `<header>
    <img src="img/aluraflixLogo.svg" class="aluraflix-logo" onclick="voltar()">
</header>

<main>
    <div class="titulo-estrelas-linha">
        <div class="titulo-estrelas">
            <h1>O show de Truman</h1>
            <img src="img/estrelas.svg" class="estrelas">
        </div>
        <div class="linha"></div>
    </div>
    <h3>Truman é um pacato vendedor de seguros que leva um vida simples com sua esposa. Porém algumas 
    coisas ao seu redor fazem com que ele passe a estranhar. Após conhecer a Lauren, acaba descobrindo 
    que toda sua vida foi monitorada por câmeras.
    </h3>
    <button onclick="voltar()">
        <img src="img/seta.svg" class="seta-butao">
        <p>Voltar</p>
    </button>
</main>

<footer>
    <p>feito com </p>
    <img src="img/coracaoIcone.svg">
    <p>por Luiz</p>
</footer>`
    body.appendChild(opacidade);
}

function mostrafilme4() {
    document.body.classList.add("background-starwars");

    var opacidade = document.createElement("div");
    opacidade.classList.add("background-opacidade");

    var body = document.querySelector("body");
    body.innerHTML = "";

    opacidade.innerHTML = `<header>
    <img src="img/aluraflixLogo.svg" class="aluraflix-logo" onclick="voltar()">
</header>

<main>
    <div class="titulo-estrelas-linha">
        <div class="titulo-estrelas">
            <h1>Star Wars: Episódio IV</h1>
            <img src="img/estrelas.svg" class="estrelas">
        </div>
        <div class="linha"></div>
    </div>
    <h3>O jovem fazendeiro Luke Skywalker é empurrado para uma galáxia de aventura quando 
    intercepta um pedido de socorro da princesa Leia. O evento o lança em uma missão ousada 
    para resgatá-la das garras de Darth Vader e do Império do mal.</h3>
    <button onclick="voltar()">
        <img src="img/seta.svg" class="seta-butao">
        <p>Voltar</p>
    </button>
</main>

<footer>
    <p>feito com </p>
    <img src="img/coracaoIcone.svg">
    <p>por Luiz</p>
</footer>`
    body.appendChild(opacidade);
}