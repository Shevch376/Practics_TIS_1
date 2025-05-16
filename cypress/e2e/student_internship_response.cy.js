describe('Отклик на стажировку студентом', () => {
    it('Отклик на стажировку студентом', () => {

        // Переход на страницу Стажировок
        cy.visit('https://dev.profteam.su/login')
        cy.visit('https://dev.profteam.su/login')
        cy.get('input[type=text]').type('ffff');
        cy.get('input[type=password]').type('Password1');
        cy.get('button[type=submit]').eq(2).click();
        cy.url().should('include', '/account/main');

        cy.get('#app > div.page > header:nth-child(1) > nav > a:nth-child(3) > span')
            .should('be.visible')
            .click();

        // Клик по кнопке "Откликнуться" на первой стажировке
        cy.get('button.button__background-color-green.vacancy-page-card__button')
            .first()
            .should('be.visible')
            .click();
    })
})
