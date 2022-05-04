let order = [];
let cliqueOrdem = [];
let score = 0;

// 0 == verde 
// 1 == vermelho 
// 2 == amarelo 
// 3 == azul

const azul = document.querySelector('.azul');
const amarelo = document.querySelector('.amarelo');
const vermelho = document.querySelector('.vermelho');
const verde = document.querySelector('.verde');

// cria ordem aleatória de cores
let sortear = () => {
    let colorOrder = Math.floor(Math.random() * 4); // math.floor (aredonda um número) Math.random() gera numero aleatório
    order[order.length] = colorOrder;
    cliqueOrdem = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1); //number(i) + 1 == pega o número de 'i' e incrementa +1
    }
}
//acende a próxima cor
let lightColor = (element, number) => {
    number = number *500;
    setTimeout( () => { //func. js executa um cód dentro do tempo passado
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');  
    })

}

//checa se os botões clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for(let i in cliqueOrdem){

        if(cliqueOrdem[i] != order[i] ){
            gameOver();//function perder
            break;
        }
    }
    if(cliqueOrdem.length == order.length){ //verifica se os valores são iguais
        alert(`Pontuação:  ${score}\nVocê acertou ! Iniciando próximo nível!`);
        nextLevel();//function próximo

    }
}

//function para o clique do usuário

let click = (color) => {
    cliqueOrdem[cliqueOrdem.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);

    
}

//function retorna a cor
let createColorElement = (color) => {
    if(color == 0){
        return verde;
    } else if(color == 1){
        return vermelho;
    }else if(color == 2){
        return amarelo;
    } else if(color == 3){
        return azul;
    }
}

// próximo nivel jogo
let nextLevel = () => {
    score++;
    sortear();
}

//perdeu jogo 
let gameOver = () => {
    alert(`Pontuação: ${score}\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
    order = [];
    checkOrder = [];

    playGame();

}

//inicio jogo
let playGame = () =>{
    score = 0;
    alert('Bem vindo ao gênesis, Iniciando um novo jogo');

    nextLevel();

}
//eventos de clixk para as cores
verde.onclick = () => click(0);
vermelho.onclick = () => click(1);
amarelo.onclick = () => click(2);
azul.onclick = () => click(3);

playGame();