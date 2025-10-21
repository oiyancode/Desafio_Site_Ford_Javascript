// CARROSSEL - Funcionalidade de slideshow de imagens
// Este arquivo controla a rotação automática de imagens e navegação

// Array para armazenar todos os itens do carrossel (imagens com títulos e links)
let carouselArr = [];

// Classe Carrossel - controla a funcionalidade do slideshow de imagens
class Carousel {
  constructor(image, title, url) {
    this.image = image;
    this.title = title;
    this.url = url;
  }

  static Start(arr) {
    if (arr) {
      if (arr.length > 0) {
        Carousel._sequence = 0;
        Carousel._size = arr.length;

        Carousel.Next();

        // Configura o slide
        Carousel._interval = setInterval(function () {
          Carousel.Next();
        }, 5000);
      }
    } else {
      throw 'O método Start precisa de uma variável Array.';
    }
  }

  static Next() {
    // Verifica se ainda não chegamos ao fim
    if (Carousel._sequence < Carousel._size) {
      let carouselItem = carouselArr[Carousel._sequence];

      let carouselDiv = document.getElementById('carousel');
      carouselDiv.innerHTML = `<img src="img/${carouselItem.image}" style="width: 100%; height: 628px; object-fit: cover;">`;

      // Atualiza o título acima da imagem (texto branco com link)
      let titleDiv = document.getElementById('carousel-title');
      titleDiv.innerHTML = `<h2><a href="${carouselItem.url}" style="color: white; text-decoration: none;">${carouselItem.title}</a></h2>`;

      // Atualiza a descrição abaixo da imagem baseada em qual imagem está mostrando
      Carousel.UpdateDescription(carouselItem);

      Carousel._sequence++;
    } else {
      Carousel._sequence = 0;
    }
  }

  static Previous() {
    // Se não estiver na primeira imagem, volta uma posição
    if (Carousel._sequence > 0) {
      Carousel._sequence--;
    } else {
      // Se estiver na primeira imagem, pula para a última (navegação circular)
      Carousel._sequence = Carousel._size - 1;
    }

    // Mostra a imagem da sequência atual sem incrementar novamente
    let carouselItem = carouselArr[Carousel._sequence];

    // Atualiza a imagem na tela
    let carouselDiv = document.getElementById('carousel');
    carouselDiv.innerHTML = `<img src="img/${carouselItem.image}" style="width: 100%; height: 628px; object-fit: cover;">`;

    // Atualiza o título acima da imagem (texto branco com link)
    let titleDiv = document.getElementById('carousel-title');
    titleDiv.innerHTML = `<h2><a href="${carouselItem.url}" style="color: white; text-decoration: none;">${carouselItem.title}</a></h2>`;

    // Atualiza a descrição abaixo da imagem baseada em qual imagem está mostrando
    Carousel.UpdateDescription(carouselItem);
  }

  // Nomes alternativos para os métodos (fazem a mesma coisa que Next)
  static avancar() {
    Carousel.Next();
  }

  static retornar() {
    Carousel.Previous();
  }

  // Atualiza o texto de descrição baseado na imagem atual
  static UpdateDescription(carouselItem) {
    let descriptionDiv = document.getElementById('carousel-description');

    // Se a div de descrição não existir, sai da função
    if (!descriptionDiv) return;

    // Pega o nome da imagem sem a extensão .jpg (ex: "imagem_1" de "imagem_1.jpg"), muito util
    let imageName = carouselItem.image.replace('.jpg', '');

    // Descrições para cada imagem
    const descriptions = {
      imagem_1: {
        title: 'Esta é a nova Ranger Ford 2022. Verifique novidades.',
        text: 'A picape mais vendida do Brasil com tecnologia de ponta e design inovador.',
        link: 'lancamento.html',
      },
      imagem_2: {
        title: 'Ford a nossa história',
        text: 'Conheça a trajetória da Ford e sua contribuição para a indústria automotiva.',
        link: 'lancamento.html',
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
