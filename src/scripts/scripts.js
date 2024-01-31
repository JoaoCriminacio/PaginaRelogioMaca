const imagemVisualizacao = document.getElementById('imagem-visualizacao'); //pegar seu elemento pelo id
const tituloProduto = document.getElementById('titulo-produto');
const nomeCor = document.getElementById('nome-cor-selecionada');
const miniaturaImagem0 = document.getElementById('0-imagem-miniatura');
const miniaturaImagem1 = document.getElementById('1-imagem-miniatura');
const miniaturaImagem2 = document.getElementById('2-imagem-miniatura');

//Arrays
const verdeCipreste = {
    nome: 'Verde-cipreste',
    pasta: 'imagens-verde-cipreste'
};

const azulInverno = {
    nome: 'Azul-inverno',
    pasta: 'imagens-azul-inverno'
};

const meiaNoite = {
    nome: 'Meia-noite',
    pasta: 'imagens-meia-noite'
};

const estelar = {
    nome: 'Estelar',
    pasta: 'imagens-estelar'
};

const rosaClaro = {
    nome: 'Rosa-claro',
    pasta: 'imagens-rosa-claro'
};

//List
const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
const opcoesTamanho = ['41 mm', '45 mm'];

let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;
 
function trocarImagem(){
    //alterar a imagem, conforme a selecionada, nas opções logo abaixo do relógio (nas miniaturas)
    const idOpcaoSelecionada = document.querySelector('[name = "opcao-imagem"]:checked').id; //querySelector eu posso escolher qual elemento eu quero referenciar
    imagemSelecionada = idOpcaoSelecionada.charAt(0); //charAt serve para pegar o caracter, na posição que você informar
    imagemVisualizacao.src = './src/imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg';
}

function trocarTamanho(){
    const idOpcaoSelecionada = document.querySelector('[name = "opcao-tamanho"]:checked').id;
    tamanhoSelecionado = idOpcaoSelecionada.charAt(0);

    //mudar o título do produto
    tituloProduto.innerText = "Pulseira loop esportiva "+ opcoesCores[corSelecionada].nome +" para caixa de " + opcoesTamanho[tamanhoSelecionado];

    //mudar o tamanho da imagem de acordo com a opção
    if(opcoesTamanho[tamanhoSelecionado] === '41 mm'){
        imagemVisualizacao.classList.add('caixa-pequena'); //adicionando uma classe
    }else{
        imagemVisualizacao.classList.remove('caixa-pequena'); //removendo uma classe
    }
}

function trocarCor(){
    //atualizar cor selecionada
    const idOpcaoSelecionada = document.querySelector('[name = "opcao-cor"]:checked').id;
    corSelecionada = idOpcaoSelecionada.charAt(0);

    //trocar título do produto
    tituloProduto.innerText = "Pulseira loop esportiva "+ opcoesCores[corSelecionada].nome +" para caixa de " + opcoesTamanho[tamanhoSelecionado];

    //trocar nome da cor
    nomeCor.innerText = 'Cor - ' + opcoesCores[corSelecionada].nome;

    //trocar imagens das miniaturas exibidas
    miniaturaImagem0.src = './src/imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-0.jpeg'
    miniaturaImagem1.src = './src/imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-1.jpeg'
    miniaturaImagem2.src = './src/imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-2.jpeg'

    //trocar imagem de visualização
    imagemVisualizacao.src = './src/imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg';
}