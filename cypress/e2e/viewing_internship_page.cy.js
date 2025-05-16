describe('Просмотр страницы со стажировками', () => {
    it('Просмотр страницы со стажировками', () => {

        // Переход на страницу Стажировок
        cy.visit('https://dev.profteam.su/internships')
        // Вводим "ааааа" в поле ввода
        cy.get('#app > div.page > div > section > div > div.vacancies-block__vacancies-filters-wrapper > div.vacancies-block__filters-wrapper > div > div.filters-block__filter-list > div.search-input > div > input')
            .type('ddd')

        // Нажимаем на кнопку
        cy.get('#app > div.page > div > section > div > div.vacancies-block__vacancies-filters-wrapper > div.vacancies-block__filters-wrapper > div > div.filters-block__filter-list > div.search-input > div > button')
            .click()

        cy.get('#app > div.page > div > section > div > div.vacancies-block__vacancies-filters-wrapper > div.vacancies-block__filters-wrapper > div > div.filters-block__filter-list > div.radio-list > label:nth-child(3)')
            .should('be.visible')
            .click()


        // Клик по элементу выпадающего списка
        cy.get('#app > div.page > div > section > div > div.vacancies-block__vacancies-filters-wrapper > div.vacancies-block__filters-wrapper > div > div.filters-block__filter-list > div.form-select.form-select--responsive > div > div')
            .should('be.visible')
            .click()
        cy.get('.form-select__items > div:nth-child(4)')
            .should('be.visible')
            .click();


    })
})
