function textoDoUsuario() {
    let textoUsuario = document.querySelector("#input").value;
    return textoUsuario.replace(/[^a-zA-Z\s]/g, "").toLowerCase();
}

function criptografar() {
    textoDoUsuario();

    function criptografarTexto(textoUsuario) {
        let texto = textoUsuario.replaceAll("e", "enter")
                                .replaceAll("i", "ines")
                                .replaceAll("a", "ai")
                                .replaceAll("o", "ober")
                                .replaceAll("u", "ufat");
        return texto;
    }

    let textoCriptografado = criptografarTexto(textoDoUsuario());
    
    limparCampo();

    ocultarElementos();

    exibirTexto(textoCriptografado);

    exibirBotaoCopiar();
}

function limparCampo() {
    let limparCampo = document.querySelector("#input");
    limparCampo.value = "";
}

function ocultarElementos() {
    document.querySelector(".result-content img").style.display = "none";
    document.querySelector(".result-content div").style.display = "none";
}

function exibirTexto(textoCriptografado) {
    let campoDeTexto = document.querySelector("#output");
    campoDeTexto.style.display = "block";
    campoDeTexto.innerHTML = textoCriptografado;
}

function exibirBotaoCopiar() {
    document.querySelector(".result-content button").style.display = "block";
}

function copiar() {
    let copiarTexto = document.querySelector("#output");
    navigator.clipboard.writeText(copiarTexto.innerHTML);
}



function descriptografar() {
    textoDoUsuario();

    function descriptografarTexto(textoUsuario) {
        let texto = textoUsuario.replaceAll("enter", "e")
                                .replaceAll("ines", "i")
                                .replaceAll("ai", "a")
                                .replaceAll("ober", "o")
                                .replaceAll("ufat", "u");
        return texto;
    }

    let textoDescriptografado = descriptografarTexto(textoDoUsuario());

    limparCampo();

    ocultarElementos();

    exibirTexto(textoDescriptografado);

    exibirBotaoCopiar();
}