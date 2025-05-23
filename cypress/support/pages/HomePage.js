class HomePage {
    visit() {
        cy.visit('https://katalon-demo-cura.herokuapp.com/'); // Visit the Cura Health home page
    }
    clickMakeAppointment() {
        cy.get('#btn-make-appointment').click(); // Click the "Make Appointment" button
    }
}

export default HomePage;