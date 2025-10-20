// CARROSSEL - Funcionalidade de slideshow de imagens
// Este arquivo controla a rotação automática de imagens e navegação

// Array para armazenar todos os itens do carrossel (imagens com títulos e links)
let carouselArr = [];

// Classe Carrossel - controla a funcionalidade do slideshow de imagens
class Carousel {
  // Construtor - cria um novo item do carrossel
  constructor(image, title, url) {
    this.image = image; // Nome do arquivo de imagem (ex: "imagem_1.jpg")
    this.title = title; // Texto do título para exibir
    this.url = url; // URL do link quando o título for clicado
  }

  // Inicia o slideshow do carrossel
  static Start(arr) {
    // Verifica se o array existe e tem itens
    if (arr) {
      if (arr.length > 0) {
        // Inicializa o estado do carrossel
        Carousel._sequence = 0; // Começa da primeira imagem
        Carousel._size = arr.length; // Número total de imagens

        // Mostra a primeira imagem imediatamente
        Carousel.Next();

        // Configura o slideshow automático (troca imagem a cada 5 segundos)
        Carousel._interval = setInterval(function () {
          Carousel.Next(); // Mostra próxima imagem automaticamente
        }, 5000);
      }
    } else {
      throw 'O método Start precisa de uma variável Array.';
    }
  }

  // Mostra a próxima imagem no carrossel
  static Next() {
    // Verifica se ainda não chegamos ao fim
    if (Carousel._sequence < Carousel._size) {
      // Pega os dados da imagem atual do array
      let carouselItem = carouselArr[Carousel._sequence];

      // Atualiza a imagem na tela
      let carouselDiv = document.getElementById('carousel');
      carouselDiv.innerHTML = `<img src="img/${carouselItem.image}" style="width: 100%; height: 628px; object-fit: cover;">`;

      // Atualiza o título acima da imagem (texto branco com link)
      let titleDiv = document.getElementById('carousel-title');
      titleDiv.innerHTML = `<h2><a href="${carouselItem.url}" style="color: white; text-decoration: none;">${carouselItem.title}</a></h2>`;

      // Atualiza a descrição abaixo da imagem baseada em qual imagem está mostrando
      Carousel.UpdateDescription(carouselItem);

      // Passa para a próxima imagem
      Carousel._sequence++;
    } else {
      // Se chegou ao fim, volta para a primeira imagem
      Carousel._sequence = 0;
    }
  }

  // Mostra a imagem anterior no carrossel
  static Previous() {
    // Se não estiver na primeira imagem, volta uma posição
    if (Carousel._sequence > 0) {
      Carousel._sequence--;
    } else {
      // Se estiver na primeira imagem, pula para a última (navegação circular)
      Carousel._sequence = Carousel._size - 1;
    }

    // Reutiliza a lógica do Next() para evitar duplicação de código
    Carousel.Next();
  }

  // Nomes alternativos para os métodos (fazem a mesma coisa que Next)
  static avancar() {
    Carousel.Next(); // Avança para a próxima imagem
  }

  static retornar() {
    Carousel.Previous(); // Volta para a imagem anterior
  }

  // Atualiza o texto de descrição baseado na imagem atual
  static UpdateDescription(carouselItem) {
    // Encontra a div de descrição na página
    let descriptionDiv = document.getElementById('carousel-description');

    // Se a div de descrição não existir, sai da função
    if (!descriptionDiv) return;

    // Pega o nome da imagem sem a extensão .jpg (ex: "imagem_1" de "imagem_1.jpg")
    let imageName = carouselItem.image.replace('.jpg', '');

    // Define descrições para cada imagem
    const descriptions = {
      imagem_1: {
        title: 'Esta é a nova Ranger Ford 2022. Verifique novidades.',
        text: 'A picape mais vendida do Brasil com tecnologia de ponta e design inovador.',
        link: 'lancamento.html',
      },
      imagem_2: {
        title: 'Ford a nossa história',
        text: 'Conheça a trajetória da Ford e sua contribuição para a indústria automotiva.',
        link: '#',
      },
      imagem_3: {
        title: 'Nova Ford Bronco Sport 2022',
        text: 'O SUV aventureiro que combina estilo e capacidade off-road.',
        link: 'lancamento.html',
      },
    };

    // Pega a descrição certa para a imagem atual (volta para imagem_1 se não encontrar)
    const desc = descriptions[imageName] || descriptions['imagem_1'];

    // Atualiza a div de descrição com o conteúdo da imagem atual
    descriptionDiv.innerHTML = `<h3>
      <a href="${desc.link}">${desc.title}</a>
    </h3>
    <p>
      ${desc.text}
    </p>`;
  }
}
