describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio');  // Захожу на сайт 
         cy.get('#mail').type('german@dolnikov.ru'); // Ввожу валидный логин
         cy.get('#pass').type('iLoveqastudio1'); // ВВожу валидный пароль 
         cy.get('#loginButton').click(); // Нажимаю на кнопку "войти"
         cy.get('#messageHeader').should('be.visible'); // Текс видим для пользователя после авт
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Текст совпадает 
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик должен быть видим 
     })
     it('Ввостановление пароля', function () {
        cy.visit('https://login.qa.studio'); // Захожу на сайт 
        cy.get('#forgotEmailButton').click(); // Нажимаю кнопку 'Забыли пароль?'
        cy.get('#mailForgot').type('german@dolnokov.ru'); // Ввожу ввавлидную почту 
        cy.get('#restoreEmailButton').click(); // Нажимаю "Отправить код"
        cy.get('#messageHeader').should('be.visible'); // Текст должен быть видим после авт
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Текст совпадает 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик видим
    })
    it('Верный логин и НЕ верный пароль', function () {
        cy.visit('https://login.qa.studio');  // Захожу на сайт 
        cy.get('#mail').type('german@dolnikov.ru'); // Ввожу валидный логин
        cy.get('#pass').type('iLoveqastudio'); // ВВожу  НЕ валидный пароль
        cy.get('#loginButton').click(); // Нажимаю на кнопку "войти"
        cy.get('#messageHeader').should('be.visible'); // Текст должен быть видим после авт
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Текст совпадает 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик видим
    })
    it('НЕ верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio');  // Захожу на сайт 
        cy.get('#mail').type('ggerman@dolnikov.ru'); // Ввожу НЕ валидный логин
        cy.get('#pass').type('iLoveqastudio1'); // ВВожу валидный пароль
        cy.get('#loginButton').click(); // Нажимаю на кнопку "войти"
        cy.get('#messageHeader').should('be.visible'); // Текст должен быть видим после авт
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Текст совпадает 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик видим
    })
    it('Логин без @ и валидный пароль', function () {
        cy.visit('https://login.qa.studio');  // Захожу на сайт 
        cy.get('#mail').type('germandolnikov.ru'); // Ввожу логин без @
        cy.get('#pass').type('iLoveqastudio1'); // ВВожу валидный пароль
        cy.get('#loginButton').click(); // Нажимаю на кнопку "войти"
        cy.get('#messageHeader').should('be.visible'); // Текст должен быть видим после авт
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Текст совпадает 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик видим
    })
    it('Строчные буквы в логине и валидный пароль', function () {
        cy.visit('https://login.qa.studio');  // Захожу на сайт 
        cy.get('#mail').type('GeRmAn@dolnikov.ru'); // Ввожу логин со стрончыми буквами 
        cy.get('#pass').type('iLoveqastudio1'); // ВВожу валидный пароль
        cy.get('#loginButton').click(); // Нажимаю на кнопку "войти"
        cy.get('#messageHeader').should('be.visible'); // Текс видим для пользователя после авт
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Текст совпадает 
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик должен быть видим 
    })
    
 })
 