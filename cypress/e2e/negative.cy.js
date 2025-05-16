describe('Создание новой стажировки работодателем', () => {
    it('Создание новой стажировки работодателем', () => {

        // Переход на страницу логина
        cy.visit('https://dev.profteam.su/login')

        // Ввод логина и пароля
        cy.get('input[type=text]').type('testerEmployer12112')
        cy.get('input[type=password]').type('Password1')

        // Нажатие кнопки "Войти"
        cy.get('button[type=submit]').eq(2).click()
    })
})
