describe('Покупка нового аватара', function () {

    it('покупка нового аватара', function () {
       cy.visit('https://pokemonbattle.ru/');
       cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); // Ввожу валидную почту 
       cy.get('#password').type('USER_PASSWORD'); // Ввожу валидный пароль 
       cy.get('.auth__button').click(); // Нажимаю на кнопку войти 
       cy.get('.header__container > .header__id').click(); // Нажимаю на своего трнера - перехожу на его страницу 
       cy.get('[href="/shop"]').click(); // Перехожу на страницу покупки аватара 
       cy.get('.available > button').first().click(); // Выбиираю аватар для покупки 
       cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111 1111 1111 1111'); // Ввожу номер карты 
       cy.get(':nth-child(1) > .pay_base-input-v2').type('12/25'); // Ввожу срок действия карты 
       cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // ВВожу cvv карты 
       cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('QA TOP'); // Ввожу имя
       cy.get('.pay-btn').click(); // Нажимаю Оплатить 
       cy.get('#cardnumber').type('56456'); // ВВожу код из смс
       cy.get('.payment__submit-button').click(); // Нажимаю Отправить
       cy.get('.payment__font-for-success').should('be.visible') // Текст об успешной покупке видим 
       cy.get('.payment__font-for-success').contains('Покупка прошла успешно') // Текст совпадает 


       })
})