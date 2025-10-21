// SISTEMA DE COMPARAÇÃO DE CARROS
// Este arquivo controla a seleção e comparação de veículos

// Array para armazenar carros selecionados para comparação (máximo 2 carros)
let carArr = [];

class Car {
  constructor(
    nome,
    preco,
    alturaCacamba,
    alturaVeiculo,
    alturaSolo,
    capacidadeCarga,
    motor,
    potencia,
    volumeCacamba,
    roda,
    image
  ) {
    this.nome = nome;
    this.preco = preco;
    this.alturaCacamba = alturaCacamba;
    this.alturaVeiculo = alturaVeiculo;
    this.alturaSolo = alturaSolo;
    this.capacidadeCarga = capacidadeCarga;
    this.motor = motor;
    this.potencia = potencia;
    this.volumeCacamba = volumeCacamba;
    this.roda = roda;
    this.image = image;
  }
}

// Encontra a posição do carro no array pelo nome
// Retorna o número do índice se encontrado, ou -1 se não encontrado
function GetCarArrPosition(arr, carClass) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].nome === carClass.nome) return i;
  }
  return -1;
}

function SetCarToCompare(el, carClass) {
  // Verifica se a entrada é realmente um objeto Car
  if (carClass instanceof Car) {
    if (el.checked) {
      // Verifica se já temos 2 carros selecionados (máximo permitido)
      if (carArr.length >= 2) {
        alert(
          'Você só pode selecionar 2 veículos para comparação. Desmarque um veículo antes de selecionar outro.'
        );
        el.checked = false; // Desmarca o checkbox
        return;
      }

      // Verifica se este carro não está já no array de comparação
      if (GetCarArrPosition(carArr, carClass) === -1) {
        // Adiciona o carro ao array de comparação
        carArr.push(carClass);
      }
    } else {
      // Usuário está desmarcando este carro

      // Encontra o carro no array e remove
      let position = GetCarArrPosition(carArr, carClass);
      if (position !== -1) {
        carArr.splice(position, 1);
      }
    }
  } else {
    throw 'Você precisa definir uma classe Car';
  }
}

function ShowCompare() {
  // Verifica se o usuário selecionou exatamente 2 carros
  if (carArr.length < 2) {
    alert('Precisa marcar 2 carros para apresentar a comparação');
    return;
  }

  // Mostra o modal/popup de comparação
  UpdateCompareTable();
  document.getElementById('compare').style.display = 'block';
}

// Esconde o modal/popup de comparação
function HideCompare() {
  document.getElementById('compare').style.display = 'none';
}

// Sai da função se não tivermos exatamente 2 carros para comparar
function UpdateCompareTable() {
  if (carArr.length < 2) return;

  // Define o tamanho das imagens para a tabela de comparação
  const imageStyle =
    'width: 200px; height: 110px; object-fit: cover; max-height: 110px;';

  // Lista de todas as células da tabela que precisam ser atualizadas
  // Cada objeto contém: id do HTML e conteúdo para exibir
  const updates = [
    // Imagens (primeiro carro à esquerda, segundo carro à direita)
    {
      id: 'compare_image_0',
      content: `<img src="${carArr[0].image}" style="${imageStyle}">`,
    },
    {
      id: 'compare_image_1',
      content: `<img src="${carArr[1].image}" style="${imageStyle}">`,
    },

    // Nomes dos modelos
    { id: 'compare_modelo_0', content: carArr[0].nome },
    { id: 'compare_modelo_1', content: carArr[1].nome },

    // Altura da caçamba
    { id: 'compare_alturacacamba_0', content: carArr[0].alturaCacamba },
    { id: 'compare_alturacacamba_1', content: carArr[1].alturaCacamba },

    // Altura do veículo
    { id: 'compare_alturaveiculo_0', content: carArr[0].alturaVeiculo },
    { id: 'compare_alturaveiculo_1', content: carArr[1].alturaVeiculo },

    // Altura livre do solo
    { id: 'compare_alturasolo_0', content: carArr[0].alturaSolo },
    { id: 'compare_alturasolo_1', content: carArr[1].alturaSolo },

    // Capacidade de carga
    { id: 'compare_capacidadecarga_0', content: carArr[0].capacidadeCarga },
    { id: 'compare_capacidadecarga_1', content: carArr[1].capacidadeCarga },

    // Tipo de motor
    { id: 'compare_motor_0', content: carArr[0].motor },
    { id: 'compare_motor_1', content: carArr[1].motor },

    // Potência
    { id: 'compare_potencia_0', content: carArr[0].potencia },
    { id: 'compare_potencia_1', content: carArr[1].potencia },

    // Volume da caçamba
    { id: 'compare_volumecacamba_0', content: carArr[0].volumeCacamba },
    { id: 'compare_volumecacamba_1', content: carArr[1].volumeCacamba },

    // Rodas
    { id: 'compare_roda_0', content: carArr[0].roda },
    { id: 'compare_roda_1', content: carArr[1].roda },

    // Preço - formatado como moeda brasileira
    {
      id: 'compare_preco_0',
      content: 'R$ ' + carArr[0].preco.toLocaleString('pt-BR'),
    },
    {
      id: 'compare_preco_1',
      content: 'R$ ' + carArr[1].preco.toLocaleString('pt-BR'),
    },
  ];

  // Atualiza todas as células da tabela em uma operação em lote
  // Isso é mais rápido que atualizar cada célula individualmente
  updates.forEach(({ id, content }) => {
    const element = document.getElementById(id);
    if (element) {
      // Usa innerHTML para imagens (HTML) e textContent para texto simples
      if (id.includes('image')) {
        element.innerHTML = content; // Para imagens, precisa de innerHTML
      } else {
        element.textContent = content; // Para texto, usa textContent
      }
    }
  });
}
