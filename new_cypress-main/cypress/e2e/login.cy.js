describe('Проверка авторизации', function () {

   it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/');  //зашли на сайт
         cy.get('#mail').type('german@dolnikov.ru');//ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // ввели пароль
         cy.get('#loginButton').click(); // нажали ввойти
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //крестик виден пользователям
    })

    it('Правильный логин, неверный пароль', function () {
        cy.visit('https://login.qa.studio/');  //зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru');//ввели верный логин
        cy.get('#pass').type('1'); // ввели пароль
        cy.get('#loginButton').click(); // нажали ввойти
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //крестик виден пользователям
   })

   it('Неверный логин, верный пароль', function () {
    cy.visit('https://login.qa.studio/');  //зашли на сайт
    cy.get('#mail').type('manechca@dolnikov.ru');//ввели неверный логин
    cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
    cy.get('#loginButton').click(); // нажали ввойти
    cy.get('#messageHeader').contains('Такого логина или пароля нет');
    cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //крестик виден пользователям
})


it('Логин без @, верный пароль', function () {
    cy.visit('https://login.qa.studio/');  //зашли на сайт
    cy.get('#mail').type('germandolnikov.ru');//ввели логин без "@"
    cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
    cy.get('#loginButton').click(); // нажали ввойти
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
    cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //крестик виден пользователям
})

it('Проверка восстановления пароля', function () {
    cy.visit('https://login.qa.studio/');  //зашли на сайт
   
    cy.get('#forgotEmailButton').click(); // нажали восстановить пароль
    cy.get('#mailForgot').type('german@dolnikov.ru') // ввела почту для восстановления
    cy.get('#restoreEmailButton').click(); // нажала отправить код

    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю на совпадение текст
    cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //крестик виден пользователям
})

it('Верный пароль, а в логине строчные буквы', function () {
    cy.visit('https://login.qa.studio/');  //зашли на сайт
    cy.get('#mail').type('GerMan@Dolnikov.ru');//ввели  логин GerMan@Dolnikov.ru
    cy.get('#pass').type('iLoveqastudio1'); // ввели пароль
    cy.get('#loginButton').click(); // нажали ввойти
    cy.get('#messageHeader').contains('Авторизация прошла успешно');
    cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //крестик виден пользователям
})

})



// План
// Найти поле логин и Ввести правильный логин
// Найти поле пароль и Ввести правильный пароль
// Найти кнопку Войти и Нажать войти
// Проверить нужный текст (авторризация прошла успешно) и наличие кнопки крестик

	
//Напиши проверку на негативный кейс авторизации:
//а) Ввести правильный логин
//б) Ввести НЕправильный пароль
//в) Нажать войти
//г) Проверить нужный текст и наличие кнопки крестик

//Напиши проверку на негативный кейс авторизации:
//а) Ввести НЕправильный логин
//б) Ввести правильный пароль
//в) Нажать войти
//г) Проверить нужный текст и наличие кнопки крестик


//Напиши проверку на негативный кейс валидации:
//а) Ввести логин без @
//б) Ввести правильный пароль
//в) Нажать войти
//г) Проверить, что получаем текст с ошибкой


//Напиши автотест на проверку логики восстановления пароля:
//Нажать «Забыли пароль»
// Ввести любой имейл
// Проверка, что получили нужный текст и есть кнопка крестика


//Напиши проверку на приведение к строчным буквам в логине:
//а) Ввести логин GerMan@Dolnikov.ru
//б) Ввести правильный пароль
//в) Нажать войти
//г) Проверить, что авторизация успешна (текст именно «Авторизация прошла успешно» и наличие кнопки крестик)
//Важно: Разработчик допустил баг в этом месте и не реализовал пункт #2 из требований.
//Тест должен упасть — и это ок (то есть мы этим тестом поймали баг, который допустил разработчик)