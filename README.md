# Desafio Prático PicPay 
 Implementação do desafio prático para a vaga de Quality Engineer
 
 <img src="https://github.com/Brunafer/desafio-picpay/blob/main/demo.gif">

# Introdução e testes executados

Esse é um projeto de implementação do desafio prático do PicPay, que consiste na automação de testes para uma API Rest.

Baseado nas regras de negócio que foram passadas, foram definidos os seguintes cenários:

- Quando criar um novo usuário, então ele deve ser listado com os demais
- Ao alterar um usuário com sucesso, então seus dados devem ser atualizados
- Ao excluir um usuário, então ele não deve ser exibido na listagem de usuários

# Pré-Requisitos

- NodeJS v12 ou superior

# Dependências

- Cypress: Ferramenta utilizada para implementação e execução dos testes
- Mochawesome, Mochawesome Merge e Mochawesome Report Gererator: bibliotecas utilizadas para geração do relatório em HTML
- Rimraf: ferramenta utilizada para execução de comando de exclusão compatíveis em quaisquer sistemas operacionais
- Uuid: biblioteca utilizada para gerar um número randômico para criação de emails aleatórios 

# Configuração para executar os testes

```shell

  npm install
  npm run cy:run

```
# Estrutura do projeto

```
desafiopratico
├─ .github
│  └─ workflows
│     └─ main.yml
├─ .gitignore
├─ cypress
│  ├─ fixtures
│  ├─ integration
│  │  └─ users.spec.js
│  ├─ plugins
│  │  └─ index.js
│  └─ support
│     ├─ api
│     │  ├─ assertions.js
│     │  └─ request.js
│     ├─ commands.js
│     └─ index.js
├─ cypress.json
├─ package.json
├─ README.md
└─ reporter-config.json

```

# Conceitos Aplicados

- Separação de responsabilidades
- Padrão de nomenclatura para os testes usando essa [referência](https://github.com/goldbergyoni/javascript-testing-best-practices#section-1-the-test-anatomy-1)
- Padrão de nomenclatura para os commits usando essa [referência](https://www.conventionalcommits.org/en/v1.0.0-beta.2/)
- Boas práticas de configuração e reuso de código
- CI com GitHub Actions

# CI e Relatório

- Confira a execução dos testes [aqui]()
- Confira o relatório com o resultado [aqui]()

---
Feito com ❤️ por Bruna Fernandes 👋 Entre em contato!




 
