function registrarAluno(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const matricula = document.getElementById('matricula').value;
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const media = calcularMedia(nota1, nota2);
    const situacao = determinarSituacao(media);
    const linha = criarLinhaTabela(nome, matricula, nota1, nota2, media, situacao);
    adicionarLinhaTabela(linha);
    limparCamposFormulario();
}


function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}


function determinarSituacao(media) {
    return media >= 5 ? "Aprovado" : "Reprovado";
}


function criarLinhaTabela(nome, matricula, nota1, nota2, media, situacao) {
    const linha = document.createElement('tr');
    linha.innerHTML = `
        <td>${nome}</td>
        <td>${matricula}</td>
        <td>${nota1}</td>
        <td>${nota2}</td>
        <td>${media.toFixed(2)}</td>
        <td>${situacao}</td>
    `;
    return linha;
}


function adicionarLinhaTabela(linha) {
    const tbody = document.querySelector('#tabela tbody');
    tbody.appendChild(linha);
}


function limparCamposFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('matricula').value = '';
    document.getElementById('nota1').value = '';
    document.getElementById('nota2').value = '';
}


function limparTabela() {
    const tbody = document.querySelector('#tabela tbody');
    tbody.innerHTML = '';
}


document.getElementById('formulario').addEventListener('submit', registrarAluno);
document.getElementById('limpar').addEventListener('click', limparTabela)