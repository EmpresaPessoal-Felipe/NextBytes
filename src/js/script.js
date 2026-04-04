// Páginas Jogos e Apps

const checkboxes = document.querySelectorAll('.filtro-aba-pesquisa input[type="checkbox"]');
const container = document.querySelector('.grade-produtos-pesquisa');

checkboxes.forEach(cb => cb.addEventListener('change', aplicarFiltro));

function aplicarFiltro() {
    const selecionadas = Array.from(checkboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value.toLowerCase());

    const produtos = Array.from(document.querySelectorAll('.produtos-pesquisa, .produto-pag-mjs'));

    produtos.forEach(prod => {
        const categorias = prod.dataset.categoria.trim().toLowerCase().split(/\s+/);

        const exibir = selecionadas.length === 0 || categorias.some(cat => selecionadas.includes(cat));
        prod.style.opacity = exibir ? '1' : '0';
        prod.style.pointerEvents = exibir ? 'auto' : 'none';
    });


    const produtosSelecionados = produtos.filter(prod => prod.style.opacity === '1');
    const produtosNaoSelecionados = produtos.filter(prod => prod.style.opacity === '0');


    container.innerHTML = '';
    produtosSelecionados.forEach(prod => container.appendChild(prod));
    produtosNaoSelecionados.forEach(prod => container.appendChild(prod));
}


// Redirecionamento para as páginas de cada app/jogo

// BANCO DE DADOS DOS PRODUTOS
const produtos = {
    1: {
        titulo: "Grand Theft Auto V",
        preco: "R$150,00",
        descricao: "Explore a imensa cidade de Los Santos e Blaine County em um dos mundos abertos mais completos já criados. Controle três protagonistas com histórias interligadas e participe de assaltos, missões intensas e diversas atividades. Além do modo história, o GTA Online oferece uma experiência multiplayer com conteúdo constante, permitindo criar seu próprio personagem, adquirir bens e interagir com outros jogadores. Com gráficos detalhados e liberdade total, GTA V garante horas praticamente infinitas de diversão.",
        avaliacao: "⭐ 5/5 estrelas",
        banner: "./src/assets/gtalogo.jpg",
        logo: "./src/assets/gtavlogo.jpg"
    },

    2: {
        titulo: "Red Dead Redemption 2",
        preco: "R$149,90",
        descricao: "Viva a jornada de Arthur Morgan no fim da era do Velho Oeste. Em um mundo aberto extremamente detalhado, suas escolhas influenciam a história, a honra e as relações com outros personagens. O jogo combina exploração, combate, caça e diversas atividades em uma experiência imersiva. Com narrativa profunda, gráficos impressionantes e um mundo vivo que reage às suas ações, Red Dead Redemption 2 é uma das experiências mais completas já criadas.",
        avaliacao: "⭐ 5/5 estrelas",
        banner: "./src/assets/rdr2banner.jpg",
        logo: "./src/assets/rdr2logo.jpg"
    },
    3: {
        titulo: "Forza Horizon 5",
        preco: "R$249,90",
        descricao: "Viva a maior aventura Horizon em um mundo aberto vibrante ambientado no México. Corra com centenas dos melhores carros do mundo enquanto participa de eventos dinâmicos e desafios variados.Explore cenários impressionantes como desertos, selvas, cidades históricas e vulcões, com clima dinâmico e mudanças sazonais que tornam cada experiência única.Com modos online e offline, personalize veículos, crie desafios e compartilhe suas experiências em um dos jogos de corrida mais completos e imersivos já feitos.",
        avaliacao: "⭐ 3.5/5 estrelas",
        banner: "./src/assets/forzabanner.jpg",
        logo: "./src/assets/forzalogo.jpg"
    },
    4: {
        titulo: "The Legend of Zelda",
        preco: "R$299,90",
        descricao: "Explore o vasto mundo de Hyrule em uma experiência imersiva repleta de desafios, quebra-cabeças e segredos. Desenvolvido pela Nintendo, este título da série Zelda entrega uma narrativa envolvente e um universo rico para explorar.<br><br>Com interface em português e legendas, o jogo oferece uma experiência acessível e completa. Em modo offline para um jogador, você embarca em uma jornada única, enfrentando combates e tomando decisões que moldam sua própria história.",
        avaliacao: "⭐ 4/5 estrelas",
        banner: "./src/assets/zeldabanner.jpg",
        logo: "./src/assets/zeldalogo.jpg"
    },
    5: {
        titulo: "Counter Strike 2",
        preco: "Grátis",
        descricao: "Ao longo de mais de duas décadas, Counter-Strike definiu o padrão dos jogos competitivos, sendo moldado por milhões de jogadores ao redor do mundo. Agora, Counter-Strike 2 inaugura um novo capítulo com a maior evolução técnica da franquia. Desenvolvido com a engine Source 2, o jogo traz gráficos aprimorados, física mais realista e uma comunicação em rede mais precisa. Mantendo a jogabilidade clássica baseada em objetivos, o CS2 adiciona novidades como o modo Premier com novo sistema de ranking, tabelas de classificação globais, mapas atualizados, granadas de fumaça dinâmicas que impactam o gameplay e melhorias sonoras e visuais. Além disso, todos os itens de CS:GO continuam disponíveis, garantindo continuidade para os jogadores.",
        avaliacao: "⭐ 2.7/5 estrelas",
        banner: "./src/assets/csbanner.jpg",
        logo: "./src/assets/cslogo.jpg"
    },
    6: {
        titulo: "EA Sports FC 26",
        preco: "R$249,90",
        descricao: "Jogue do seu jeito com uma experiência de gameplay reformulada com base no feedback da comunidade, escolhendo entre predefinições de gameplay autêntica ou competitiva. Monte seu time dos sonhos no Football Ultimate Team com torneios, eventos ao vivo e modos Rivals e Champions renovados. Com mais de 20.000 jogadores, 750 clubes e seleções, mais de 120 estádios e 35 ligas, o jogo oferece um alto nível de autenticidade. No Modo Carreira, enfrente novos desafios dinâmicos inspirados em cenários reais e desenvolva seu jogador com arquétipos únicos, evoluindo atributos e habilidades para se destacar em campo.",
        avaliacao: "⭐ 3/5 estrelas",
        banner: "./src/assets/fifabanner.jpg",
        logo: "./src/assets/fifalogo.jpg"
    },
    7: {
        titulo: "Civilization VI",
        preco: "R$129,90",
        descricao: "Construa um império capaz de resistir ao teste do tempo em Civilization VI, um clássico jogo de estratégia em turnos criado por Sid Meier. Escolha entre diversos líderes históricos e conduza sua civilização desde a Idade da Pedra até a Era da Informação, enfrentando guerras, diplomacia e desafios culturais. Expanda seu território com cidades que ocupam vários blocos e planeje cuidadosamente distritos e infraestrutura para aproveitar ao máximo o terreno. Avance tecnologicamente através da exploração e interação com o mundo ao seu redor, enquanto lida com um sistema de diplomacia dinâmico, onde cada líder reage de acordo com sua personalidade. Cada decisão molda o destino da sua civilização.",
        avaliacao: "⭐ 3.9/5 estrelas",
        banner: "./src/assets/cvlbanner.jpg",
        logo: "./src/assets/cvllogo.jpg"
    },
    8: {
        titulo: "Devil May Cry 5",
        preco: "R$99,90",
        descricao: "O ápice do hack and slash está de volta em Devil May Cry 5, trazendo ação intensa, combates frenéticos e visuais impressionantes. Anos após o incidente em Fortuna, uma nova ameaça demoníaca surge na cidade de Red Grave, com uma árvore demoníaca consumindo o sangue dos cidadãos e liberando hordas de criaturas. Assuma o controle de três protagonistas com estilos únicos: Nero, com seus braços mecânicos Devil Breakers; Dante, com seu arsenal clássico e sistema de estilos dinâmicos; e V, que luta através de invocações demoníacas estratégicas. Desenvolvido com a RE Engine, o jogo apresenta gráficos realistas e cinematográficos. O sistema de estilo recompensa a criatividade em combate, incentivando combos variados para alcançar o ranking máximo e dominar cada batalha com estilo.",
        avaliacao: "⭐ 4.5/5 estrelas",
        banner: "./src/assets/dmcbanner.jpg",
        logo: "./src/assets/dmclogo.jpg"
    },
    9: {
        titulo: "Adobe Premiere Pro",
        preco: "R$89,90/mês",
        descricao: "O Adobe Premiere Pro é o software padrão da indústria cinematográfica e de criação de conteúdo para edição de vídeo não linear. Desenvolvido pela Adobe, ele se destaca por uma interface altamente customizável e um ecossistema que atende desde YouTubers e profissionais de redes sociais até grandes produções de Hollywood. Sua principal força reside na capacidade de manipular praticamente qualquer formato de arquivo nativamente, eliminando a necessidade de processos lentos de transcodificação.",
        avaliacao: "⭐ 6.7/10 estrelas",
        banner: "./src/assets/adbplogo.png",
        logo: "./src/assets/adbplogo.jpg"
    },
    10: {
        titulo: "Adobe Photoshop",
        preco: "R$89,90/mês",
        descricao: "O Adobe Photoshop é o software de edição de imagens mais utilizado do mundo, sendo referência para fotógrafos, designers e artistas digitais. Com uma enorme versatilidade, permite desde ajustes simples em fotos até a criação de composições complexas e artes profissionais. Um dos seus grandes destaques é a integração com inteligência artificial através do Adobe Firefly, que possibilita adicionar, remover ou expandir elementos em imagens usando comandos de texto, agilizando processos que antes levavam horas. Além disso, o Photoshop conta com ferramentas avançadas como camadas, máscaras, seleções inteligentes e edição não destrutiva, oferecendo controle total sobre cada detalhe. Integrado à Adobe Creative Cloud, permite trabalhar em diferentes dispositivos com sincronização completa, tornando-se uma ferramenta essencial para qualquer projeto visual.",
        avaliacao: "⭐ 3.4/5 estrelas",
        banner: "./src/assets/adbphlogo.jpg",
        logo: "./src/assets/adbphlogo.jpg"
    },
    11: {
        titulo: "DaVinci Resolve",
        preco: "Grátis",
        descricao: "O DaVinci Resolve é um dos softwares de pós-produção mais completos do mercado, oferecendo edição de vídeo, correção de cor, efeitos visuais e áudio em uma única plataforma. Desenvolvido pela Blackmagic Design, ele permite um fluxo de trabalho integrado, eliminando a necessidade de trocar de programa durante o processo criativo. Reconhecido como padrão na indústria cinematográfica, destaca-se principalmente pela correção de cor avançada, com sistema baseado em nodes que permite ajustes extremamente precisos. O software também conta com ferramentas poderosas para edição, efeitos visuais e mixagem de áudio, além de recursos de inteligência artificial como rastreamento automático e isolamento de elementos. Otimizado para alto desempenho, funciona bem até em projetos pesados e ainda oferece uma versão gratuita muito completa, sendo uma excelente escolha tanto para iniciantes quanto para profissionais.",
        avaliacao: "⭐ 4/5 estrelas",
        banner: "./src/assets/dvlogo.jpg",
        logo: "./src/assets/dvlogo.jpg"
    },
    12: {
        titulo: "CapCut",
        preco: "Grátis",
        descricao: "O CapCut, criado pela ByteDance, é um editor de vídeo muito popular voltado para criação rápida de conteúdo para redes sociais. Ele funciona em celular, desktop e navegador e combina facilidade de uso com ferramentas avançadas. O aplicativo oferece biblioteca grande de músicas, efeitos, filtros e modelos prontos que aceleram a produção de vídeos. A interface simples usa uma linha do tempo com suporte a várias camadas e animações com keyframes. Recursos de inteligência artificial automatizam tarefas como legendas, remoção de fundo, retoque facial, geração de roteiro e conversão de texto em voz. Também permite exportar vídeos em até 4K a 60 fps e usa modelo freemium, no qual a maioria das funções é gratuita e algumas ferramentas avançadas ficam na versão Pro.",
        avaliacao: "⭐ 4.5/5 estrelas",
        banner: "./src/assets/caplogo.jpg",
        logo: "./src/assets/caplogo.jpg"
    },
    13: {
        titulo: "FL Studio",
        preco: "R$399,90",
        descricao: "O FL Studio, desenvolvido pela Image-Line, é uma estação de trabalho de áudio digital muito usada na produção de música eletrônica, hip-hop e trap. Conhecido antes como FruityLoops, ele evoluiu para um ambiente completo de criação musical. Seu fluxo de trabalho usa padrões e o Step Sequencer para montar batidas e melodias de forma rápida, que depois podem ser organizadas livremente na Playlist. O software inclui um Piano Roll considerado um dos mais completos da indústria, diversos sintetizadores e efeitos nativos, além de suporte a plugins externos. Recursos recentes incluem separação de stems e masterização automática com inteligência artificial. Um diferencial importante é a política de atualizações gratuitas para toda a vida, o que fortaleceu sua grande comunidade de produtores.",
        avaliacao: "⭐ 5/5 estrelas",
        banner: "./src/assets/fllogo.jpg",
        logo: "./src/assets/fllogo.jpg"
    },
    14: {
        titulo: "Canva",
        preco: "Grátis",
        descricao: "O Canva é uma plataforma de design gráfico online criada para facilitar a produção de conteúdo visual por qualquer pessoa. O sistema de arrastar e soltar elimina a complexidade de softwares profissionais e permite criar posts, apresentações, logotipos e vídeos rapidamente. A plataforma oferece milhões de templates prontos, além de fotos, ilustrações, fontes e elementos gráficos integrados. O recurso Kit de Marca ajuda empresas a manter identidade visual consistente salvando cores e logotipos. A suíte de inteligência artificial chamada Estúdio Mágico inclui ferramentas como geração de texto, edição automática de imagens, criação de imagens por descrição e redimensionamento de designs para diferentes formatos. O Canva também permite colaboração em tempo real e funciona em navegador, desktop e celular, com versão gratuita ampla e plano Pro com recursos extras.",
        avaliacao: "⭐ 4.9/5 estrelas",
        banner: "./src/assets/canvalogo.jpg",
        logo: "./src/assets/canvalogo.jpg"
    },
    15: {
        titulo: "Blender",
        preco: "Grátis",
        descricao: "O Blender é um software gratuito e de código aberto voltado para criação 3D profissional e cobre todo o processo de produção, incluindo modelagem, escultura, animação, simulação, renderização, composição e até edição de vídeo. Desenvolvido pela Blender Foundation e mantido por uma comunidade global, ele oferece ferramentas comparáveis às usadas na indústria. O programa possui dois motores de renderização principais: Eevee, que mostra resultados em tempo real, e Cycles, que produz imagens fotorrealistas com rastreamento de luz. Recursos como Grease Pencil permitem misturar animação 2D dentro de ambientes 3D, enquanto Geometry Nodes cria sistemas procedurais para gerar cenários complexos automaticamente. Por ser gratuito e compatível com padrões profissionais, o Blender permite que artistas criem projetos para cinema, jogos, visualização arquitetônica e impressão 3D sem custo de licença.",
        avaliacao: "⭐ 4.3/5 estrelas",
        banner: "./src/assets/blenderlogo.jpg",
        logo: "./src/assets/blenderlogo.jpg"
    },
    16: {
        titulo: "Lightworks",
        preco: "Grátis",
        descricao: "O Lightworks é um editor de vídeo profissional usado há décadas na indústria cinematográfica e desenvolvido pela LWKS Software Ltd. Ele se destaca pelo fluxo de trabalho focado na velocidade de corte e na organização eficiente de grandes volumes de material. A interface prioriza precisão na edição, com ferramentas de trimming rápidas e um sistema avançado de gerenciamento de mídia que facilita trabalhar em projetos longos. O software suporta muitos formatos de vídeo nativamente e inclui correção de cor, efeitos em tempo real e aceleração por GPU para reprodução fluida. Também oferece colaboração entre vários editores no mesmo projeto. Existe uma versão gratuita com as principais ferramentas de edição, limitada a exportação em 720p, enquanto a versão Pro libera recursos completos de exportação e produção profissional.",
        avaliacao: "⭐ 4.1/5 estrelas",
        banner: "./src/assets/lightlogo.jpg",
        logo: "./src/assets/lightlogo.jpg"
    },


};


// REDIRECIONAMENTO (HOME)

document.querySelectorAll('.produto, .produto-grade, .produto-pag-mjs, .produtos-pesquisa').forEach(produto => {
    produto.addEventListener('click', () => {
        const id = produto.getAttribute('data-id');
        if (id) {
            window.location.href = `produto.html?id=${id}`;
        }
    });
});



// BOTÃO COMPRAR

document.querySelectorAll('.botao-compra, .compra-pag-mjs').forEach(botao => {
  botao.addEventListener('click', (e) => {
    const produto = botao.closest('.produto-grade');
    const id = produto.getAttribute('data-id');

    window.location.href = `produto.html?id=${id}`;
  });
});
// CARREGAR PRODUTO
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const produto = produtos[id];

if (produto) {

    // TÍTULO
    const titulo = document.getElementById("titulo-pag-produto");
    if (titulo) titulo.innerText = produto.titulo;

    // PREÇO
    const preco = document.getElementById("preco-pag");
    if (preco) preco.innerText = produto.preco;

    // DESCRIÇÃO
    const descricao = document.getElementById("descricao-pag");
    if (descricao) descricao.innerText = produto.descricao;

    // AVALIAÇÃO
    const avaliacao = document.getElementById("avaliacao-pag");
    if (avaliacao) avaliacao.innerText = produto.avaliacao;

    // LOGO
    const logo = document.getElementById("logo-pag");
    if (logo) logo.src = produto.logo;

    // BANNER (background)
    const banner = document.getElementById("banner-conteudo-produto");
    if (banner) {
        banner.style.backgroundImage = `url(${produto.banner})`;
    }
}

// Imagem na Home

const pagina = window.location.pathname;

if (pagina.includes("index.html") || pagina === "/" || pagina.endsWith("/")) {

  const produtosHome = {
    1: "./src/assets/gtav.jpg",
    2: "./src/assets/rdr2logo.jpg",
    3: "./src/assets/forza3.jpg",
    4: "./src/assets/zeldabanner.jpg",
    5: "./src/assets/cslogo.jpg",
    6: "./src/assets/fifabanner.jpg",
    7: "./src/assets/cvlbanner.jpg",
    8: "./src/assets/dmcbanner.jpg",
    9: "./src/assets/adbplogo.jpg",
    10: "./src/assets/adbphlogo.jpg",
    11: "./src/assets/dvlogo.jpg",
    12: "./src/assets/caplogo.jpg",
    13: "./src/assets/fllogo.jpg",
    14: "./src/assets/canvalogo.jpg",
    15: "./src/assets/blenderlogo.jpg",
    16: "./src/assets/lightlogo.jpg"
  };

  document.querySelectorAll('.produto, .produto-grade, .produtos-pesquisa').forEach(produto => {
    const id = produto.getAttribute('data-id');

    if (id && produtosHome[id]) {
      produto.style.backgroundImage = `url(${produtosHome[id]})`;
      produto.style.backgroundSize = "cover";
      produto.style.backgroundPosition = "center";
      produto.style.backgroundRepeat = "no-repeat";
    }
  });

}

// Carrossel funcional produtos index.html

const carrosseis = document.querySelectorAll('.grade-produtos');

carrosseis.forEach(carrossel => {
    const produtos = carrossel.querySelectorAll('.produto');
    const btnPrev = carrossel.querySelector('.btn-anterior-produtos');
    const btnNext = carrossel.querySelector('.btn-proximo-produtos');

    let index = 0;

    function mostrarProduto(i) {
        produtos.forEach(p => p.classList.remove('ativo'));
        produtos[i].classList.add('ativo');
    }

    // inicia
    mostrarProduto(index);

    btnNext.addEventListener('click', () => {
        if (window.innerWidth <= 1024) {
            index++;
            if (index >= produtos.length) index = 0;
            mostrarProduto(index);
        }
    });

    btnPrev.addEventListener('click', () => {
        if (window.innerWidth <= 1024) {
            index--;
            if (index < 0) index = produtos.length - 1;
            mostrarProduto(index);
        }
    });

    // reset ao redimensionar
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
            produtos.forEach(p => p.classList.remove('ativo'));
        } else {
            mostrarProduto(index);
        }
    });
});

// Banner do site

const bannerItems = [
    {
        imagem: "./src/assets/gtalogo.jpg",
        titulo: "Grand Theft Auto V",
        preco: "R$150,00"
    },
    {
        imagem: "./src/assets/fllogo.jpg",
        titulo: "FL Studio",
        preco: "R$399,90"
    },
    {
        imagem: "./src/assets/zeldabanner.jpg",
        titulo: "The Legend of Zelda",
        preco: "R$299,90"
    }
];

let bannerIndex = 0;

const banner = document.getElementById('banner');
const tituloBanner = document.querySelector('.banner-titulo');
const precoBanner = document.querySelector('.banner-preco');
const btnProximoBanner = document.querySelector('.btn-proximo-ban');
const btnAnteriorBanner = document.querySelector('.btn-anterior-ban');

let bannerInterval;

function atualizarBanner() {
    banner.style.backgroundImage = `url('${bannerItems[bannerIndex].imagem}')`;
    tituloBanner.textContent = bannerItems[bannerIndex].titulo;
    precoBanner.textContent = bannerItems[bannerIndex].preco;
}

function iniciarBannerAutomatico() {
    if (window.innerWidth <= 1024) {
        bannerInterval = setInterval(() => {
            bannerIndex = (bannerIndex + 1) % bannerItems.length;
            atualizarBanner();
        }, 5000);
    }
}

function pararBannerAutomatico() {
    clearInterval(bannerInterval);
}

atualizarBanner();
iniciarBannerAutomatico();

btnProximoBanner.addEventListener('click', () => {
    pararBannerAutomatico();
    bannerIndex = (bannerIndex + 1) % bannerItems.length;
    atualizarBanner();
    iniciarBannerAutomatico();
});

btnAnteriorBanner.addEventListener('click', () => {
    pararBannerAutomatico();
    bannerIndex = (bannerIndex - 1 + bannerItems.length) % bannerItems.length;
    atualizarBanner();
    iniciarBannerAutomatico();
});

window.addEventListener('resize', () => {
    pararBannerAutomatico();
    iniciarBannerAutomatico();
});

// Filtros na página de jogos
const btnFiltro = document.getElementById('btn-filtro');
const gradeFiltro = document.querySelector('.grade-filtro-pesquisa');

btnFiltro.addEventListener('click', () => {
    if (window.innerWidth <= 1024) {
        gradeFiltro.classList.toggle('show');
    }
});

// Fecha o overlay clicando fora do conteúdo
gradeFiltro.addEventListener('click', (e) => {
    if (e.target === gradeFiltro) {
        gradeFiltro.classList.remove('show');
    }
});

// Opcional: esconde se redimensionar para >1024px
window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
        gradeFiltro.classList.remove('show');
    }
});

