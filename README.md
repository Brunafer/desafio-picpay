# Desafio Prático PicPay 
 Implementação do desafio prático para a vaga de Quality Engineer

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
