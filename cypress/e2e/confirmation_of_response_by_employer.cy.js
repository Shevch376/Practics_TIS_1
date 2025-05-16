describe('Создание новой стажировки работодателем', () => {
    it('Создание новой стажировки работодателем', () => {

        // Переход на страницу логина
        cy.visit('https://dev.profteam.su/login')

        // Ввод логина и пароля
        cy.get('input[type=text]').type('testerEmployer')
        cy.get('input[type=password]').type('Password1')

        // Нажатие кнопки "Войти"
        cy.get('button[type=submit]').eq(2).click()

        cy.get(':nth-child(5) > .menu-item__item-name').should('be.visible').click();
        cy.get('article:nth-child(3) .responses-list-item__actions div')
            .first()
            .click({ force: true });
        cy.get(
            '#app > div.page > div > div.page-navigation > div.page-nav__mobile > section.responses-page > div.responses-page__menu > nav > div > div:nth-child(2)'
        )
            .should('be.visible')
            .click({ force: true });
        cy.get(
            '#app > div.page > div > div.page-navigation > div.page-nav__mobile > section.responses-page > div.responses-list.responses-page__nav > div > article:nth-child(1) > div.responses-list-item__actions > div:nth-child(1)'
        )
            .should('be.visible')
            .click({ force: true });

    })
})
