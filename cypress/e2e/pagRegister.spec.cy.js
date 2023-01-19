import './pagLogin.spec.cy.js'

describe ('Lacrei Saúde Página Register', () =>{
    

    it('preencher formulário', () => {   
        cy.visit('https://frontend-lacrei-pessoa-usuaria.vercel.app/register')     
        cy.get('[id="name"]').type('Rafael')
        cy.get('[id="lastName"]').type('Lins Mota')
        cy.get('[id="email"]').type('rantaro35@gmail.com')
        cy.get('[id="password"]').type('R1801rafa@')
        cy.get('[id="confrimPassword"]').type('R1801rafa@')
        cy.xpath('//*[@id="__next"]/div/section/div/form/div[6]/div/div/div/span').click()
        cy.xpath('//*[@id="__next"]/div/section/div/form/div[7]/div/div/div/span').click()
        cy.xpath('//*[@id="__next"]/div/section/div/form/div[8]/button').click()
        cy.wait(3)

    });
  });