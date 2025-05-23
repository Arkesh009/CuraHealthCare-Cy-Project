class AppointmentPage {
    selectFacility(facility) {
        cy.get("#combo_facility").select(facility); // Select facility from dropdown
    }
    checkHospitalReadmission() {
        cy.get("#chk_hospotal_readmission").check(); // Check the hospital readmission option
    }
    clickVisitDate() {
        cy.get("#txt_visit_date").click(); // Click the visit date field to confirm date
    }
    selectMedicaid() {
        cy.get("#radio_program_medicaid").check(); // Select Medicaid as the healthcare program
    }
    openDatePicker() {
        cy.get(".glyphicon").click(); // Open the date picker
    }
    selectYear() {
        cy.get(
            ".datepicker-days > .table-condensed > thead > :nth-child(2) > .datepicker-switch"
        ).click(); // Open month selection
        cy.get(
            ".datepicker-months > .table-condensed > thead > :nth-child(2) > .datepicker-switch"
        ).click(); // Open year selection
        cy.get(
            ".datepicker-years > .table-condensed > tbody > tr > td > .focused"
        ).click(); // Select the focused year
    }
    selectMonth() {
        cy.get(
            ".datepicker-months > .table-condensed > tbody > tr > td > .focused"
        ).click(); // Select the focused month
    }
    selectDay() {
        cy.get(":nth-child(4) > :nth-child(6)").click(); // Select the specific day
    }
    enterComment(comment) {
        cy.get("#txt_comment").click({ force: true }).type(comment); // Enter comment in the comment box
    }
    bookAppointment() {
        cy.get("#btn-book-appointment").click(); // Submit the appointment booking form
    }
}

export default AppointmentPage;
