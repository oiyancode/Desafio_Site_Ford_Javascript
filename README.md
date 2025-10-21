# Site Ford - Desafio JavaScript

Este projeto é um site interativo da Ford com três funcionalidades principais:

- **Carrossel de imagens** com navegação automática e manual
- **Sistema de comparação** de veículos
- **Formulário de contato** com validações

## 📁 Estrutura do Projeto

```
├── index.html          # Página inicial com carrossel
├── lancamento.html     # Página de veículos com comparação
├── contato.html        # Página de formulário de contato
├── css/
│   ├── style.css       # Estilos principais
│   ├── reset.css       # Reset de estilos padrão
│   ├── lancamento.css  # Estilos da página de lançamento
│   └── form.css        # Estilos do formulário
├── js/
│   ├── carousel.js     # Sistema do carrossel
│   ├── compare.js      # Sistema de comparação
│   └── form.js         # Sistema do formulário
└── img/                # Imagens do site
```

## 🚗 Como Funciona o Carrossel

### Funcionalidades:

- **Automático:** Troca de imagem a cada 5 segundos
- **Manual:** Botões de seta para navegação (◀️ esquerda / ▶️ direita)
- **Textos dinâmicos:** Cada imagem mostra seu texto específico
- **Links:** Textos clicáveis que levam para páginas relevantes
- **Navegação circular:** Vai para última imagem quando clica em "próximo" na última

### Correções Implementadas:

- ✅ **Botão esquerdo corrigido:** Método `Previous()` otimizado com lógica independente
- ✅ **Logs removidos:** Console limpo sem mensagens desnecessárias
- ✅ **Event listeners melhorados:** Verificação de existência dos elementos

### Código Principal:

```javascript
// Cria um item do carrossel
new Carousel('nome_imagem.jpg', 'Título', 'link.html');

// Inicia o carrossel
Carousel.Start(carouselArr);

// Eventos dos botões
document.getElementById('btt_right').addEventListener('click', () => {
  Carousel.avancar(); // Próxima imagem
});

document.getElementById('btt_left').addEventListener('click', () => {
  Carousel.retornar(); // Imagem anterior
});
```

## ⚖️ Sistema de Comparação

### Como Usar:

1. Marque **até 2 veículos** com os checkboxes
2. Clique em **"Comparar Carros"**
3. Veja a tabela com todas as especificações

### Validações:

- Máximo de 2 veículos por comparação
- Aviso se tentar selecionar mais de 2
- Checkbox desmarcado automaticamente se inválido

## 📝 Formulário de Contato

### Campos Validados:

- **Nome e Sobrenome:** Obrigatórios
- **E-mail:** Formato válido (exemplo@email.com)
- **CPF:** 11 dígitos numéricos
- **Telefone:** Obrigatório
- **Contato:** Método de contato escolhido

### ✅ Nova Funcionalidade - Salvamento no Console:

Quando você envia o formulário, os dados são salvos automaticamente no **Console do Navegador**:

```javascript
// Dados salvos automaticamente no console (F12 → Console)
console.log('=== DADOS DO FORMULÁRIO ENVIADOS ===');
console.log('Nome:', data.nome);
console.log('Sobrenome:', data.sobrenome);
console.log('E-mail:', data.email);
console.log('CPF:', data.cpf);
console.log('Telefone:', data.telefone);
console.log('Método de contato preferido:', data.contato);
console.log('Dados completos do objeto contato:', data);
```

**Como testar:**

1. Abra `contato.html`
2. Preencha o formulário
3. Clique em "Enviar"
4. Abra o Console (F12)
5. Veja todos os dados salvos!

### Validações Explicadas:

**E-mail:**

```
// Verifica se tem:
// - Caracteres antes do @
// - Um @
// - Caracteres após o @
// - Um ponto
// - Caracteres após o ponto
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```

**CPF:**

```
// Remove tudo que não for número
const cleanCPF = cpf.replace(/[^\d]/g, '');

// Verifica se tem 11 dígitos e não são todos iguais
if (cleanCPF.length !== 11 || /^(\d)\1{10}$/.test(cleanCPF))
```

## 🎨 Estilos CSS

### Cores da Ford:

- Azul principal: `#1351d8`
- Azul escuro: `#1b357e`
- Azul botão: `#0056b3`

### Layout Responsivo:

- Carrossel se adapta à tela
- Controles sobrepostos nas imagens
- Textos centralizados e legíveis

## 🚀 Para Iniciantes

### Dicas de Estudo:

1. **Comece pelo HTML:** Entenda a estrutura das páginas
2. **Veja o CSS:** Aprenda sobre estilos e layout
3. **Estude o JavaScript:** Foque nas funções comentadas
4. **Teste as funcionalidades:** Experimente cada parte

### Conceitos Importantes:

- **Classes:** Como `Carousel` e `Car` organizam o código
- **Arrays:** Como `carouselArr` armazena dados
- **Eventos:** Como `addEventListener` responde a ações
- **Validações:** Como garantir dados corretos

## 🔧 Personalização

### Para Modificar o Carrossel:

1. Adicione imagens na pasta `img/`
2. Crie novos objetos `Carousel` no `index.html`
3. Configure títulos e links

### Para Modificar Veículos:

1. Edite os parâmetros do construtor `Car`
2. Mantenha a ordem: nome, preço, alturaCaçamba, etc.

### Para Modificar Validações:

1. Ajuste as expressões regulares
2. Modifique as mensagens de erro
3. Adicione novas validações se necessário

## 📚 Aprendizados

Este projeto demonstra:

- **JavaScript Orientado a Objetos**
- **Manipulação do DOM**
- **Validações de formulário**
- **CSS responsivo**
- **Interatividade web**

Cada arquivo está comentado para facilitar o aprendizado de iniciantes!
