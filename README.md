# Testes End-to-End – Ebac Shop

### Curso de Qualidade de Software - EBAC

Este repositório contém um exercício prático do curso de Qualidade de Software da EBAC, com foco em testes automatizados utilizando o Cypress.

🛒 Aplicação base (Ebac Shop):
[http://lojaebac.ebaconline.art.br/](http://lojaebac.ebaconline.art.br/)

---

## Objetivo do exercício

Automatizar o fluxo de compra simulando a adição de **quatro produtos ao carrinho** da loja Ebac Shop.
Neste exercício, foi aplicada a lógica de **recursividade utilizando estrutura de repetição (`for`)** para realizar a seleção dos produtos de forma dinâmica e reutilizável.

---

## Como rodar o projeto localmente

### Pré-requisitos

* [Node.js](https://nodejs.org/en/)
* [Visual Studio Code](https://code.visualstudio.com/download) ou outro editor de sua preferência
* [Git](https://git-scm.com/downloads)

### Passo a passo

1. Clone o repositório:

   ```bash
   git clone https://github.com/EBAC-QE/teste-e2e-ebac.git
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd teste-e2e-ebac
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Para executar os testes em modo **Headless**:

   ```bash
   npx cypress run
   ```

5. Para executar via **Dashboard**:

   ```bash
   npx cypress open
   ```

   Após abrir o dashboard, selecione um dos navegadores disponíveis (preferencialmente o Electron) para iniciar os testes.

---

## Bibliotecas utilizadas

* [Cypress](https://cypress.io/) – Framework de automação de testes end-to-end

---

### Créditos

Exercício baseado no conteúdo ministrado por Fábio & José Ernesto
Instrutores do curso de Qualidade de Software - EBAC

---

### Sobre esta versão

Esta automação foi desenvolvida por **Bárbara Ferreira**, aluna do curso de Qualidade de Software da EBAC, como parte dos estudos práticos de testes E2E.
O exercício demonstrou a aplicação de lógica de repetição e recursividade para otimizar a inclusão de múltiplos produtos no carrinho de compras.

