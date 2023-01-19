describe ('Lacrei Saúde página Login', () =>{
  it('Acessar site', () => {
    cy.visit('https://frontend-lacrei-pessoa-usuaria.vercel.app/login')
    cy.url().should('contain', 'login')
  });

  it('clicar no botão Criar Conta', () => {
    cy.visit('https://frontend-lacrei-pessoa-usuaria.vercel.app/login')
    cy.xpath('//button[@type="button"]').click()
    cy.url().should('contain', 'register')
  });

  it('clicar no botão Ajuda', () => {
    cy.visit('https://frontend-lacrei-pessoa-usuaria.vercel.app/login')
    cy.xpath('//*[@id="__next"]/div/header/div/div/div/a[1]/button').click()
    cy.url().should('contain', 'help')
  });

});