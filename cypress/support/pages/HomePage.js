class HomePage {
    visit() {
        cy.visit('https://katalon-demo-cura.herokuapp.com/');
    }
    clickMakeAppointment() {
        cy.get('#btn-make-appointment').click();
    }
}

export default HomePage;