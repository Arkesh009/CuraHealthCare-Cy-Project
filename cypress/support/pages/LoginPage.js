class LoginPage {
    enterUsername(username) {
        cy.get('#txt-username').type(username);
    }
    enterPassword(password) {
        cy.get('#txt-password').type(password);
    }
    clickLogin() {
        cy.get('#btn-login').click();
    }
}

export default LoginPage;