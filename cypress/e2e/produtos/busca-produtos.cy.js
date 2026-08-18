describe('Suíte de Testes - Automation Exercise', () => {

  context('Módulo de Produtos e Navegação Geral', () => {

    beforeEach(() => {
      cy.visit('/products');
      cy.location('pathname').should('eq', '/products');
    });

    // =========================================================
    // CT01 - Deve acessar a página de produtos
    // =========================================================
    it('CT01 - Deve acessar a página de produtos', () => {
      cy.contains('All Products').should('be.visible');
      cy.get('.features_items').should('be.visible');
    });

    // =========================================================
    // CT02 - Deve buscar um produto existente e validar resultados
    // =========================================================
    // =========================================================
    // CT02 - Deve buscar um produto existente e validar resultados
    // =========================================================
    it('CT02 - Deve buscar um produto existente', () => {
      const produto = 'Dress';

      cy.get('#search_product').type(produto);
      cy.get('#submit_search').click();

      // Valida o parâmetro na URL
      cy.location('search').should('contain', `search=${encodeURIComponent(produto)}`);

      // Confirma que o cabeçalho de busca está visível
      cy.contains('Searched Products').should('be.visible');

      // Garante que a busca retornou ao menos 1 produto na tela
      cy.get('.features_items .col-sm-4').should('have.length.at.least', 1);

      // Garante que ao menos um dos produtos retornados contém o nome pesquisado
      cy.get('.productinfo p').then(($list) => {
        const nomes = $list.map((_, el) => Cypress.$(el).text().toLowerCase()).get();
        const temProdutoBuscado = nomes.some((nome) => nome.includes(produto.toLowerCase()));
        expect(temProdutoBuscado).to.be.true;
      });
    });
    // =========================================================
    // CT03 - Deve realizar busca por produto inexistente
    // =========================================================
    it('CT03 - Deve realizar busca por produto inexistente', () => {
      const produtoInexistente = 'ProdutoInexistente123';

      cy.get('#search_product').type(produtoInexistente);
      cy.get('#submit_search').click();

      cy.location('search').should('contain', `search=${encodeURIComponent(produtoInexistente)}`);
      cy.contains('Searched Products').should('be.visible');
      cy.contains('.productinfo', produtoInexistente).should('not.exist');
    });

    // =========================================================
    // CT04 - Deve visualizar os detalhes do produto
    // =========================================================
    it('CT04 - Deve visualizar os detalhes de um produto', () => {
      cy.get('.single-products').first().within(() => {
        cy.get('.productinfo h2').should('be.visible');
        cy.get('.productinfo p').should('be.visible');
      });

      cy.get('.choose > .nav > li > a').first().click();

      cy.location('pathname').should('include', '/product_details/');

      cy.get('.product-information').within(() => {
        cy.get('h2').should('be.visible');
        cy.contains('Category:').should('be.visible');
        cy.contains('Rs.').should('be.visible');
        cy.contains('Availability:').should('be.visible');
        cy.contains('Condition:').should('be.visible');
        cy.contains('Brand:').should('be.visible');
      });
    });

    // =========================================================
    // CT05 - Deve pesquisar produtos e verificar no carrinho
    // =========================================================
    it('CT05 - Deve pesquisar produtos e verificar o carrinho', () => {
      const produto = 'Blue Top';

      cy.get('#search_product').type(produto);
      cy.get('#submit_search').click();

      cy.contains('Searched Products').should('be.visible');
      cy.contains('.productinfo', produto).should('be.visible');

      cy.get('.productinfo .add-to-cart').first().click();

      cy.get('#cartModal', { timeout: 10000 }).should('be.visible');
      cy.get('#cartModal u').click();

      cy.location('pathname').should('eq', '/view_cart');
      cy.get('#cart_info').within(() => {
        cy.contains(produto).should('be.visible');
        cy.get('.cart_quantity').should('contain', '1');
      });
    });

    // =========================================================
    // CT06 - Deve acessar a página de Test Cases
    // =========================================================
    it('CT06 - Deve acessar a página de Test Cases', () => {
      cy.get('.shop-menu').contains('Test Cases').click();

      cy.location('pathname').should('eq', '/test_cases');
      cy.get('b').contains('Test Cases').should('be.visible');
    });

  });

  context('Módulo Home Page', () => {

    // =========================================================
    // CT07 - Assinatura na página inicial
    // =========================================================
    it('CT07 - Assinatura na página inicial', () => {
      cy.visit('/');

      cy.get('#footer').scrollIntoView();
      cy.get('.single-widget h2').should('be.visible').and('contain', 'Subscription');

      const email = `teste_${Date.now()}@mailinator.com`;
      cy.get('#susbscribe_email').type(email);
      cy.get('#subscribe').click();

      cy.get('.alert-success')
        .should('be.visible')
        .and('contain', 'You have been successfully subscribed!');
    });

  });

});
