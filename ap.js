const form = document.getElementById('formulario');
const contato = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit', function(evento){
    evento.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaCadastro();
});

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nomeContato');
    const inputTelefone = document.getElementById ('telefone');

    if (contato.includes(inputNomeContato.value)){
        alert(`O contato ${inputNomeContato.value} já foi adicionado`);
    } 
    else {
        contato.push(inputNomeContato.value);
        telefone.push(parseInt(inputTelefone.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td> ${inputTelefone.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
}
    inputNomeContato.value = '';
    inputTelefone.value = '';
    
    }

    function atualizaTabela(){
        const corpoTabela = document.querySelector('tfoot');
        corpoTabela.innerHTML = linhas;
    }
