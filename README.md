# Cypress QA Automation — Automation Exercise

Projeto de automação de testes E2E desenvolvido com Cypress para validação da aplicação [Automation Exercise](https://automationexercise.com/).

## Objetivo

Demonstrar práticas de QA Automation por meio de testes E2E automatizados, documentação de casos de teste, execução da suíte e integração contínua.

## Tecnologias

- Cypress 15.20.1
- JavaScript
- Node.js
- Git / GitHub
- GitHub Actions

## Aplicação testada

[Automation Exercise](https://automationexercise.com/)

## Suíte automatizada

| ID | Cenário | Status |
|---|---|---|
| CT01 | Acessar a página de produtos | ✅ Aprovado |
| CT02 | Buscar um produto existente | ✅ Aprovado |
| CT03 | Buscar produto inexistente | ✅ Aprovado |
| CT04 | Visualizar detalhes de um produto | ✅ Aprovado |
| CT05 | Pesquisar produto e verificar o carrinho | ✅ Aprovado |
| CT06 | Acessar a página de Test Cases | ✅ Aprovado |
| CT07 | Realizar assinatura na página inicial | ✅ Aprovado |

## Resultado da última execução

Execução realizada em 18/08/2026:

- **7 testes**
- **7 aprovados**
- **0 falhas**
- **0 pendentes**
- **0 ignorados**
- **39 segundos**
- Browser: **Electron 138 (headless)**
- Spec: `cypress/e2e/produtos/busca-produtos.cy.js`

**Resultado: 7/7 testes aprovados — 100% de sucesso.**

## Como executar

```bash
npm install
npx cypress open
```

Para execução headless:

```bash
npx cypress run
```

## Documentação

A especificação completa dos casos de teste está em:

`docs/casos-de-teste.md`

## Estrutura

```text
cypress-qa-automation/
├── .github/
│   └── workflows/
│       └── cypress.yml
├── cypress/
│   ├── e2e/
│   │   └── produtos/
│   │       └── busca-produtos.cy.js
│   ├── fixtures/
│   └── support/
├── docs/
│   └── casos-de-teste.md
├── .gitignore
├── cypress.config.js
├── package.json
└── package-lock.json
```

## CI/CD

O workflow do GitHub Actions executa a suíte Cypress automaticamente em cada `push` e `pull request`.

## Autor

Projeto desenvolvido para fins de estudo, prática e portfólio em QA Automation.
