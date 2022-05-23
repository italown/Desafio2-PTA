/* As constantes abaixo estão puxando a imagem e a área de contato do personagem indicado no array*/
const character = document.getElementsByClassName("character")[0];
const containerCharacter = document.getElementsByClassName("container-character")[0];

/* A constante abaixo define a velocidade do personagem */
const VELOCITY = 50;

/* Essa constante define o tamanho da tela */
const SCREEN_WIDTH = screen.width;
const SCREEN_HEIGHT = screen.height;

/* Essas constantes definem a posição inicial do personagem após ele dar o primeiro passo, utilizadas para
somar com a velocidade e fazer o movimento */
let xPosition = 500;
let yPosition = 300;

/* Cria um array com as setinhas para utiliza-las na movimentação*/
const keysAvaiable = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]
const directions = ["turnUp", "turnLeft", "turnRight", "turnDown"];

/* Essa função cria uma constante que gerencia o evento quando o usuário pressiona as setinhas*/
window.addEventListener("keydown", (event) => {
    const key  = event.key;
    
/* Aqui é verificado se a seta foi pressionada*/
    const keyPressedAvaiable = keysAvaiable.some((currentKey) => {
        return currentKey === key;
    })

/* Caso a setinha não tenha sido pressionada, finalizará o código*/    
    if(!keyPressedAvaiable) return;

/* Nas duas linhas abaixo, a função muda a direção que o gif está andando, fazendo aparecer a direção certa
e removendo a anterior*/
    directions.forEach((direction) => {
        if(character.classList.contains(direction)) character.classList.remove(direction);
    })

/* Esse if impede que o personagem fuja da tela, definindo o limite de cima como 0px*/
    if(key === "ArrowUp"){
        if(yPosition == 0){
        yPosition == 0;
        }
/* Esse else diz que se a setinha para cima for pressionada, ele pegará o gif do personagem andando para cima,
removerá o antigo gif e vai subtrair da posição Y do personagem o valor da constante VELOCITY*/
        else{    
        character.classList.add("turnUp");
        yPosition -= VELOCITY;}
    }

/* Esse if impede que o personagem fuja da tela, definindo o limite de baixo como 500px*/
    if(key === "ArrowDown"){
        if(yPosition == 500){
            yPosition == 500;
        }

/* Esse else diz que se a setinha para baixo for pressionada, ele pegará o gif do personagem andando para baixo,
removerá o antigo gif e vai somar da posição Y do personagem o valor da constante VELOCITY*/
        else{
        character.classList.add("turnDown");
        yPosition += VELOCITY;}
    }

/* Esse if impede que o personagem fuja da tela, definindo o limite da esquerda como 0px*/
    if(key === "ArrowLeft"){
        if(xPosition == 0){
            xPosition == 0;
        }
        
/* Esse else diz que se a setinha para esquerda for pressionada, ele pegará o gif do personagem andando para esquerda,
removerá o antigo gif e vai subtrair da posição X do personagem o valor da constante VELOCITY*/
        else{
        character.classList.add("turnLeft");
        xPosition -= VELOCITY;}
    }

/* Esse if impede que o personagem fuja da tela, definindo o limite da direita como 800px*/
    if(key === "ArrowRight"){
        if(xPosition == 800){
            xPosition == 800;
        }

/* Esse else diz que se a setinha para direita for pressionada, ele pegará o gif do personagem andando para direita,
removerá o antigo gif e vai somar da posição X do personagem o valor da constante VELOCITY*/
        else{
        character.classList.add("turnRight");
        xPosition += VELOCITY;}
    }

/* Aqui é definido que a posição do container segue a posição das variáveis yPosition e xPosition */
    containerCharacter.style.top = `${yPosition}px`;
    containerCharacter.style.left = `${xPosition}px`;

});

