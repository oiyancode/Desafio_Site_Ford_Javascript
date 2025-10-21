// SISTEMA DE FORMULÁRIO DE CONTATO
// Este arquivo controla a validação e envio do formulário de contato

// armazena informações de contato do usuário
class contato {
  // Construtor - cria um novo registro de contato
  constructor(nome, sobrenome, email, cpf, telefone, contato) {
    this.nome = nome; // Primeiro nome do usuário
    this.sobrenome = sobrenome; // Sobrenome do usuário
    this.email = email;
    this.cpf = cpf; // Número do CPF brasileiro (limpo)
    this.telefone = telefone;
    this.contato = contato;
  }
}

function Post(form) {
  event.preventDefault();

  let data = new contato(
    form.elements.namedItem('nome').value,
    form.elements.namedItem('sobrenome').value,
    form.elements.namedItem('email').value,
    form.elements.namedItem('cpf').value,
    form.elements.namedItem('telefone').value,
    form.elements.namedItem('contato').value
  );

  console.log(data);
  alert(
    `Obrigado ${data.nome} ${data.sobrenome}, os seus dados foram encaminhados com sucesso!`
  );

  // Também salva os dados detalhadamente no console
  console.log('=== DADOS DO FORMULÁRIO ENVIADOS ===');
  console.log('Nome:', data.nome);
  console.log('Sobrenome:', data.sobrenome);
  console.log('E-mail:', data.email);
  console.log('CPF:', data.cpf);
  console.log('Telefone:', data.telefone);
  console.log('Método de contato preferido:', data.contato);
  console.log('Dados completos do objeto contato:', data);

  // Reseta o formulário
  form.reset();

  return false; // Previne o envio real do formulário
}

document.addEventListener('DOMContentLoaded', function () {
  let submitButton = document.querySelector('button[type="submit"]');

  if (submitButton) {
    // Quando o mouse passa sobre o botão - deixa ele um pouco maior e muda a cor
    submitButton.addEventListener('mouseover', function () {
      this.style.transform = 'scale(1.05)';
      this.style.backgroundColor = '#0056b3';
      this.style.transition = 'all 0.3s ease';
    });

    // Quando o mouse sai do botão - volta ao tamanho e cor originais
    submitButton.addEventListener('mouseout', function () {
      this.style.transform = 'scale(1)';
      this.style.backgroundColor = '';
    });
  }
});
