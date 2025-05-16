describe('Создание новой стажировки работодателем', () => {
    it('Создание новой стажировки работодателем', () => {

        // Переход на страницу логина
        cy.visit('https://dev.profteam.su/login')

        // Ввод логина и пароля
        cy.get('input[type=text]').type('testerEmployer')
        cy.get('input[type=password]').type('Password1')

        // Нажатие кнопки "Войти"
        cy.get('button[type=submit]').eq(2).click()

        // Нажатие на кнопку для создания стажировки
        cy.get('#app > div.page > div > div.page-navigation > div.page-nav > div:nth-child(8) > p').click()

        // Ожидание отображения кнопки "Создать стажировку"
        cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(8) > section > div.vacancies-block__filters-wrapper > button', { timeout: 10000 })
            .should('be.visible')
            .click();
        // Нажатие и ввод в первое поле формы стажировки
        cy.get('body > div:nth-child(21) > div.desktop-modal > div > div.vacancy-add-form-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(1) > div > input', { timeout: 10000 })
            .should('be.visible')  // Можно оставить проверку на видимость, но она не помешает
            .type('блабла39205789578(**^$*#&@_*$)*@^&(^*~&)(@)#()@*&)*#)_()&*($8(**^$*#&@_*$)*@^&(^*~&)(@)#()@*&)*#)_()&*($8(**^$*#&@_*$)*@^&(^*~&)(@)#()@*&)*#)_()&*($8(**^$*#&@_*$)*@^&(^*~&)(@)#()@*&)*#)_()&*($8(**^$*#&@_*$)*@^&(^*~&)(@)#()@*&)*#)_()&*($8(**^$*#&@_*$)*@^&(^*~&)(@)#()@*&)*#)_()&*($8(**^$*#&@_*$)*@^&(^*~&)(@)#()@*&)*#)_()&*($', { force: true });  // Принудительное выполнение действия

        // Нажимаем на кастомный select, чтобы раскрыть список
        cy.get('body > div:nth-child(21) > div.desktop-modal > div > div.vacancy-add-form-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(2) > div > div > div.form-select__selected', { timeout: 10000 })
            .should('be.visible')
            .click();
        // Выбор второго элемента из выпадающего списка
        cy.get('div.form-select__items > div:nth-child(2)', { timeout: 10000 }).should('be.visible').click();

        // Здесь мы добавляем клик по кнопке, которая будет подтверждать создание стажировки.
        cy.get('body > div:nth-child(21) > div.desktop-modal > div > div.vacancy-add-form-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(3) > div > div > div', { timeout: 10000 })
            .should('be.visible')  // Проверка на видимость кнопки
            .click();  // Нажимаем на кнопку
        // Клик по кнопке, подтверждающей выбор из выпадающего списка
        cy.get('body > div:nth-child(21) > div.desktop-modal > div > div.vacancy-add-form-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(3) > div > div > div.form-select__items > div:nth-child(2)', { timeout: 10000 })
            .should('be.visible')  // Проверка на видимость кнопки
            .click();  // Нажимаем на кнопку для подтверждения выбора

        // Нажимаем на кнопку по вашему запросу
        cy.get('body > div:nth-child(21) > div.desktop-modal > div > div.vacancy-add-form-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(4) > div.form-control--responsive.form-control > input', { timeout: 10000 })
            .should('be.visible')  // Проверка на видимость элемента
            .type('2025-05-19');  // Ввод даты в правильном формате для поля типа "date"

        // Ввод второй даты
        cy.get('body > div:nth-child(21) > div.desktop-modal > div > div.vacancy-add-form-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(5) > div > input', { timeout: 10000 })
            .should('be.visible')
            .type('2025-05-20');

        // Ввод описания стажировки
        cy.get('body > div:nth-child(21) > div.desktop-modal > div > div.vacancy-add-form-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(6) > div > textarea', { timeout: 10000 })
            .should('be.visible')
            .click()
            .type('бдфоащфощк')

        // Ввод описания условий стажировки
        cy.get('body > div:nth-child(21) > div.desktop-modal > div > div.vacancy-add-form-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(7) > div > textarea', { timeout: 10000 })
            .should('be.visible')
            .click()
            .type('бдфоащфощк');

        // Клик по кнопке "Создать" внизу формы с принудительным нажатием
        cy.get('body > div:nth-child(21) > div.desktop-modal > div > div.vacancy-add-form-wrapper > form > div.form__buttons > div > button', { timeout: 10000 })
            .scrollIntoView()
            .click({ force: true })
    })
})
