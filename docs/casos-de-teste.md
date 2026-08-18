# Plano e Especificação de Casos de Teste

## 1. Identificação

- **Aplicação:** Automation Exercise
- **Módulo:** Produtos / Busca / Carrinho / Navegação / Footer
- **Ferramenta de automação:** Cypress (E2E)
- **URL base:** https://automationexercise.com/
- **Suíte:** Produtos, Busca e Navegação
- **Data da execução registrada:** 18/08/2026
- **Resultado da suíte:** 7 aprovados / 7 executados / 0 falhas

---

## 2. Critérios de execução

Todos os casos abaixo foram automatizados na spec:

`cypress/e2e/produtos/busca-produtos.cy.js`

A última execução apresentou:

- Tests: 7
- Passing: 7
- Failing: 0
- Pending: 0
- Skipped: 0
- Duration: 39 seconds

**Status geral: APROVADO**

---

## CT01 — Deve acessar a página de produtos

**Objetivo:** Verificar a navegação para a página de catálogo de produtos.

**Pré-condição:** Aplicação disponível e acesso à rota `/products`.

**Passos:**
1. Navegar para `/products`.

**Resultado esperado:**
- O título `All Products` deve estar visível.
- A lista de produtos `.features_items` deve ser exibida.

**Resultado obtido:** A página de produtos foi acessada e os elementos esperados foram validados com sucesso.

**Status:** ✅ APROVADO

---

## CT02 — Deve buscar um produto existente

**Objetivo:** Validar a pesquisa de produtos utilizando um termo válido.

**Pré-condição:** Estar na página `/products`.

**Passos:**
1. Informar `Dress` no campo `#search_product`.
2. Clicar em `#submit_search`.

**Resultado esperado:**
- A URL deve conter o parâmetro de busca `?search=Dress`.
- A seção `Searched Products` deve ser exibida.
- Deve existir pelo menos um produto no resultado.
- Pelo menos um produto deve conter `Dress` no nome.

**Resultado obtido:** A busca por `Dress` foi realizada e os critérios esperados foram validados com sucesso.

**Status:** ✅ APROVADO

---

## CT03 — Deve realizar busca por produto inexistente

**Objetivo:** Garantir o tratamento de uma pesquisa sem correspondência.

**Pré-condição:** Estar na página `/products`.

**Passos:**
1. Informar `ProdutoInexistente123` no campo `#search_product`.
2. Clicar em `#submit_search`.

**Resultado esperado:**
- A URL deve conter o parâmetro `search`.
- A seção `Searched Products` deve ser exibida.
- O produto inexistente não deve aparecer nos resultados.

**Resultado obtido:** A pesquisa foi processada sem apresentar resultado falso para o produto inexistente.

**Status:** ✅ APROVADO

---

## CT04 — Deve visualizar os detalhes de um produto

**Objetivo:** Validar o redirecionamento e a exibição das informações detalhadas do produto.

**Pré-condição:** Estar na página `/products`.

**Passos:**
1. Validar as informações essenciais do primeiro card de produto.
2. Clicar em `View Product`.

**Resultado esperado:**
- Redirecionamento para `/product_details/`.
- `.product-information` deve exibir:
  - Nome
  - Categoria
  - Preço
  - Disponibilidade
  - Condição
  - Marca

**Resultado obtido:** O detalhe do produto foi acessado e as informações essenciais foram validadas com sucesso.

**Status:** ✅ APROVADO

---

## CT05 — Deve pesquisar produtos e verificar o carrinho

**Objetivo:** Validar o fluxo de busca, adição ao carrinho e conferência do item.

**Pré-condição:** Estar na página `/products`.

**Passos:**
1. Buscar `Blue Top`.
2. Clicar em `Add to cart`.
3. Aguardar o modal de confirmação.
4. Clicar em `View Cart`.

**Resultado esperado:**
- Redirecionamento para `/view_cart`.
- O produto `Blue Top` deve estar presente no carrinho.
- A quantidade deve ser igual a `1`.

**Resultado obtido:** O produto `Blue Top` foi adicionado e sua presença e quantidade foram validadas no carrinho.

**Status:** ✅ APROVADO

---

## CT06 — Deve acessar a página de Test Cases

**Objetivo:** Validar a navegabilidade do menu superior.

**Pré-condição:** Estar na página `/products`.

**Passos:**
1. Localizar o menu principal `.shop-menu`.
2. Clicar em `Test Cases`.

**Resultado esperado:**
- A URL deve mudar para `/test_cases`.
- O título principal da página deve estar visível.

**Resultado obtido:** A navegação para a página de Test Cases ocorreu conforme esperado e o conteúdo principal foi validado.

**Status:** ✅ APROVADO

---

## CT07 — Assinatura na página inicial

**Objetivo:** Validar o cadastro de newsletter no rodapé.

**Pré-condição:** Estar na página inicial `/`.

**Passos:**
1. Rolar até `#footer`.
2. Validar o título `SUBSCRIPTION`.
3. Informar um e-mail válido em `#susbscribe_email`.
4. Clicar em `#subscribe`.

**Resultado esperado:**
- A mensagem `You have been successfully subscribed!` deve ser exibida.

**Resultado obtido:** A assinatura foi realizada e a mensagem de sucesso foi validada.

**Status:** ✅ APROVADO

---

## 3. Sumário da execução

| Métrica | Resultado |
|---|---:|
| Casos planejados | 7 |
| Casos executados | 7 |
| Aprovados | 7 |
| Falhas | 0 |
| Pendentes | 0 |
| Ignorados | 0 |
| Taxa de aprovação | 100% |
| Duração | 39s |

### Conclusão

A suíte automatizada foi executada com sucesso, apresentando **100% de aprovação**, sem falhas, casos pendentes ou testes ignorados.
