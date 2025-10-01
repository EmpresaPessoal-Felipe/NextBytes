//ARRAY DE OBJETOS COM AS IMAGENS E INFORMAÇÕES DO BANNER
const bannerItems =[
{
    imagem:"./src/assets/img/img.jpg",
    titulo: "Jogo 1",
    descricao: "preço"
},
{
    imagem:"./src/assets/img/molho.jpg",
    titulo: "Jogo2",
    descricao: "preco"
},

{
    imagem:"./src/assets/img/assets.jpg",
    titulo: "jogo3",
    descricao: "preco"
}

];

//DECLARANDO AS VARIAVEIS E ELEMENTOS COM DOM(DOCUMENT OBJECT MODEL)
let i= 0;// inicio da contagem das imagens
const tempo = 5000; // tempo em milissegundos
const elementoBanner = document.querySelector(".banner");
const elementoTitulo = document.querySelector(".banner-titulo");
const elementoDescricao = document.querySelector(".banner-descricao");


// FUNÇÃO PARA O SLIDESHOW

function slideShow(){
    // ALTERA A IMAGEM DE FUNDO DO BANNER
    // ``- template strings ou string literais forma de concatenar
    elementoBanner.style.backgroundImage = `url(${bannerItems[i].imagem})`;
    // ALTERA O TITULO DO BANNER
    elementoTitulo.textContent =bannerItems[i].titulo;
     // ALTERA O DESCRIÇÃO DO BANNER
    elementoDescricao.textContent = bannerItems[i].descricao;

    // INCREMENTA O INDECE (i) e reinicia quando chegar no final do array

    // se o i for maior que a quantidade de imagems volta para o inicio
    i++;
    if( i >= bannerItems.length){
        i =0;
    }
    // chama a função noamente após o tempo definido
    setTimeout(slideShow, tempo);

}
// inicia o slideShow da função
slideShow()
