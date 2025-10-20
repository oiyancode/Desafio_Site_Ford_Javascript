// SISTEMA DE FORMULÁRIO DE CONTATO
// Este arquivo controla a validação e envio do formulário de contato

// Classe Contato - armazena informações de contato do usuário
class contato {
  // Construtor - cria um novo registro de contato
  constructor(nome, sobrenome, email, cpf, telefone, contato) {
    this.nome = nome; // Primeiro nome do usuário
    this.sobrenome = sobrenome; // Sobrenome do usuário
    this.email = email; // Endereço de e-mail
    this.cpf = cpf; // Número do CPF brasileiro (limpo)
    this.telefone = telefone; // Número do telefone
    this.contato = contato; // Método de contato preferido
  }
}

function Post(form) {
  // MANIPULADOR DE ENVIO DO FORMULÁRIO
  // Esta função valida e processa o formulário de contato

  // Pega todos os valores dos campos do formulário com segurança (com fallback para string vazia)
  const fields = ['nome', 'sobrenome', 'email', 'cpf', 'telefone', 'contato'];
  const formData = {}; // Objeto para armazenar valores do formulário

  // Percorre cada campo e pega seu valor
  for (let field of fields) {
    // Usa optional chaining (?.) para pegar elementos do formulário com segurança
    formData[field] = form.elements.namedItem(field)?.value || '';
  }

  // Verifica quais campos obrigatórios estão vazios
  const requiredFields = ['nome', 'sobrenome', 'email', 'cpf', 'telefone'];
  const missingFields = requiredFields.filter((field) => !formData[field]);

  // Mostra erro se algum campo obrigatório estiver vazio ou método de contato não selecionado
  if (
    missingFields.length > 0 ||
    formData.contato === 'COMO DESEJA SER CONTATADO'
  ) {
    alert('Por favor, preencha todos os campos obrigatórios.');
    return false; // Para o envio do formulário
  }

  // Valida o formato do e-mail
  // Esta regex verifica se o e-mail tem:
  // - Um ou mais caracteres antes do @ (mas não espaços ou @)
  // - Um símbolo @
  // - Um ou mais caracteres após o @ (mas não espaços ou @)
  // - Um ponto (.)
  // - Um ou mais caracteres após o ponto (mas não espaços ou @)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    alert('Por favor, insira um e-mail válido.');
    return false;
  }

  // Valida o formato do CPF
  // Primeiro, remove todos os caracteres não numéricos (espaços, pontos, traços)
  const cleanCPF = formData.cpf.replace(/[^\d]/g, '');

  // Verifica se o CPF tem exatamente 11 dígitos
  // Também verifica se todos os dígitos são iguais (como 11111111111) - isso é inválido
  if (cleanCPF.length !== 11 || /^(\d)\1{10}$/.test(cleanCPF)) {
    alert('Por favor, insira um CPF válido.');
    return false;
  }

  // Cria objeto contato
  const data = new contato(
    formData.nome,
    formData.sobrenome,
    formData.email,
    cleanCPF,
    formData.telefone,
    formData.contato
  );

  // Mostra mensagem de sucesso com template string
  alert(
    `Obrigado sr(a) ${formData.nome} ${formData.sobrenome}! Os seus dados foram encaminhados com sucesso.`
  );

  // Reseta o formulário
  form.reset();

  return false; // Previne o envio real do formulário
}

// Adiciona efeitos de hover no botão quando a página carrega
document.addEventListener('DOMContentLoaded', function () {
  // Encontra o botão de submit na página
  let submitButton = document.querySelector('button[type="submit"]');

  if (submitButton) {
    // Quando o mouse passa sobre o botão - deixa ele um pouco maior e muda a cor
    submitButton.addEventListener('mouseover', function () {
      this.style.transform = 'scale(1.05)'; // Deixa o botão 5% maior
      this.style.backgroundColor = '#0056b3'; // Muda para azul mais escuro
      this.style.transition = 'all 0.3s ease'; // Efeito de transição suave
    });

    // Quando o mouse sai do botão - volta ao tamanho e cor originais
    submitButton.addEventListener('mouseout', function () {
      this.style.transform = 'scale(1)'; // Volta ao tamanho normal
      this.style.backgroundColor = ''; // Volta à cor original
    });
  }
});
