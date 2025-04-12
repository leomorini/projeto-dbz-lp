// Array com todos os personagens
const charactersDBZ = [
  {
    id: "cyberstorm",
    title: "Cyberstorm",
    description: `Kael Takeda, conhecido no submundo digital como "Cyberstorm", é um programador prodígio especializado em segurança cibernética e inteligência artificial. Com um intelecto afiado e reflexos rápidos, ele domina linguagens de programação como se fossem extensões de sua própria mente.`,
    imgDesktop: "./src/img/bg-cyberstorm.png",
    imgMobile: "./src/img/bg-cyberstorm-mobile.png",
    imgIcon: "./src/img/icone-cyberstorm.png",
  },
  {
    id: "codepixie",
    title: "CodePixie",
    description: `Lía Nakamura, conhecida como "CodePixie", é uma programadora genial que domina o desenvolvimento de algoritmos e inteligência artificial. Com um talento nato para decifrar padrões, ela cria sistemas inovadores e protege dados sensíveis de ameaças digitais.`,
    imgDesktop: "./src/img/bg-codepixie.png",
    imgMobile: "./src/img/bg-codepixie-mobile.png",
    imgIcon: "./src/img/icone-codepixie.png",
  },
  {
    id: "hexblade",
    title: "Hexblade",
    description: `Ryo Tanaka, conhecido como "HexBlade", é um hacker habilidoso que opera nas sombras do ciberespaço. Mestre em engenharia reversa e criptografia, ele combina força bruta e inteligência afiada para quebrar firewalls impenetráveis.`,
    imgDesktop: "./src/img/bg-hexblade.png",
    imgMobile: "./src/img/bg-hexblade-mobile.png",
    imgIcon: "./src/img/icone-hexblade.png",
  },
  {
    id: "neonpulse",
    title: "Neonpulse",
    description: `NeonPulse Ayla Vega, conhecida como "NeonPulse", é uma prodígio da programação espacial. Criada em uma estação orbital, ela domina linguagens de código como se fossem sua segunda língua. Especialista em inteligência artificial e segurança cibernética.`,
    imgDesktop: "./src/img/bg-neonpulse.png",
    imgMobile: "./src/img/bg-neonpulse-mobile.png",
    imgIcon: "./src/img/icone-neonpulse.png",
  },
  {
    id: "codebreaker",
    title: "Codebreaker",
    description: `No coração de uma estação espacial abandonada, Orion Vex, um ex-engenheiro cibernético, busca desvendar um código perdido há séculos. Dizem que esse código guarda o segredo para uma tecnologia ancestral capaz de redefinir a inteligência artificial.`,
    imgDesktop: "./src/img/bg-codebreaker.png",
    imgMobile: "./src/img/bg-codebreaker-mobile.png",
    imgIcon: "./src/img/icone-codebreaker.png",
  },
];

//Código dentro da função abaixo executa quando a página carregar
document.addEventListener("DOMContentLoaded", function () {
  generateDBZ();
});

//Cria todo o frontend + eventos dos personagens DBZ
function generateDBZ() {
  charactersDBZ.forEach((character, index) => {
    generateDBZButton(character, index);

    //caso seja o primeiro personagem, cria o painel;
    if (index === 0) generateDBZPanel(character);
  });

  generateDBZEventListener();
}

//Cria os events de click dos botões do menu
function generateDBZEventListener() {

  //Adicinando eventListener nos botões do menu
  const botoes = document.querySelectorAll(".botao");

  botoes.forEach(function(botao) {
    botao.addEventListener('click', function(evt) {
      // Remove a classe 'selecionado' de todos os botões
      botoes.forEach(b => b.classList.remove('selecionado'));

      // Adiciona o selecionado ao botão clicado
      const botaoAtual = evt.currentTarget;
      botaoAtual.classList.add('selecionado');

      //Pega o id do character no botão (param data-character-id)
      const characterId = botaoAtual.dataset.characterId;
      const character = charactersDBZ.find((row) => row.id === characterId);

      // Cria o painel DBZ do personagem selecionado
      generateDBZPanel(character);
    })
  })
}

/**
 * Cria o HTML do botão DBZ
 * @param object character (object of array charactersDBZ) 
 * @param index (ordem do personagem no array, se for 0 será o primeiro)
 */
function generateDBZButton(character, index) {
  const panel = document.querySelector('.botoes');
  const html = `
    <li id="${character.id}_button">
      <button 
        data-character-id="${character.id}" 
        class="botao ${character.id} ${index === 0 ? 'selecionado' : ''}"
      >
        <img 
          src="${character.imgIcon}" 
          alt="${character.title}" 
          title="${character.title}"
        >
      </button>
    </li>
  `;

  panel.insertAdjacentHTML("beforeend", html);
}

/**
 * Substitui o painel para o personagem selecionado no momento
 * @param object character (object of array charactersDBZ)
 */
function generateDBZPanel(character) {
  const panel = document.querySelector('.personagens');
  const html = `
    <div class="personagem selecionado">
      <picture>
        <source 
          srcset="${character.imgDesktop}" 
          media="(min-width: 768px)"
        >
        <img 
          class="imagem" 
          src="${character.imgMobile}" 
          alt="Imagem ${character.id}"
        >
      </picture>
      <div class="conteudo">
        <h2 class="nome-personagem">${character.title}</h2>
        <p class="descricao">${character.description}</p>
      </div>
    </div>
  `;

  panel.innerHTML = html;
}