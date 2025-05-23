class LoginPage {
    enterUsername(username) {
        cy.get('#txt-username').type(username); // Enter username in the username field
    }
    enterPassword(password) {
        cy.get('#txt-password').type(password); // Enter password in the password field
    }
    clickLogin() {
        cy.get('#btn-login').click(); // Click the login button
    }
}

export default LoginPage;