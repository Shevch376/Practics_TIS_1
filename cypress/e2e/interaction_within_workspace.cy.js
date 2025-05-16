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

        // Ожидание загрузки списка откликов
        cy.get('article:nth-child(3) > button', { timeout: 10000 })
            .should('be.visible')
            .click();
        // Ввод текста в поле комментария
        cy.get('#app > div.page > div > section > section > section > div > div > div > article > div.comment-textarea__textarea > div.form-control.form-control--max > textarea', { timeout: 10000 })
            .should('be.visible')
            .click()
            .type('блаблаблабла.');
        cy.get('#app > div.page > div > section > section > section > div > div > div > article > div.comment-textarea__textarea > div.comment-textarea__buttons > button:nth-child(2)')
            .should('be.visible')
            .click();

        // Нажатие кнопки "Отправить"
        cy.get('#app > div.page > div > section > section > section > div > div > div > article > div.comment-textarea__textarea > div.comment-textarea__buttons > button:nth-child(2)')
            .should('be.visible')
            .click();

        // Нажатие на кнопку в блоке действий комментария
        cy.get('#app > div.page > div > section > section > section > div > div > div:nth-child(1) > div.base-comment__content > div.base-comment__content > div.detailed-workspace-activity-comments__actions > div:nth-child(1) > button', { timeout: 10000 })
            .should('be.visible')
            .click();

    })
})
