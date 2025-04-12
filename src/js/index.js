/*
  O que precisamos fazer? 
  Quando clicar no botão do personagem na lista, temos que:
  1. Marcar o botão como selecionado
  2. Mostrar o personagem correspondente
*/

// Passo 1 - Pegar os botões e  no JS pra poder verificar quando o usuário clicar em cima de um deles
const botoes = document.querySelectorAll(".botao");

// Passo 1 do OBJETIVO 2 - Pegar os personagens no JS pra poder mostrar ou esconder eles
const personagens = document.querySelectorAll(".personagem");

// Passo 2 - Adicionar a classe "selecionado" no botão que o usuário clicou
botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => {

    // Passo 3 - Verificar se já existe um botão selecionado, se sim, remover a seleção dele
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    if (botaoSelecionado) {
      botaoSelecionado.classList.remove("selecionado");
    }

    // Agora adicionamos a classe "selecionado" no botão clicado
    botao.classList.add("selecionado");

    // OBJETIVO 2 - Mostrar as informações do personagem correspondente ao botão clicado

    // Passo 2 - Adicionar a classe "selecionado" no personagem que o usuário selecionou
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    
    // Passo 3 - Verificar se já existe um personagem selecionado, se sim, remover a seleção dele
    if (personagemSelecionado) {
      personagemSelecionado.classList.remove("selecionado");
    }

    // Agora mostramos o personagem com o mesmo índice do botão clicado
    personagens[indice].classList.add("selecionado");
  });
});