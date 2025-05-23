class AppointmentPage {
    selectFacility(facility) {
        cy.get("#combo_facility").select(facility);
    }
    checkHospitalReadmission() {
        cy.get("#chk_hospotal_readmission").check();
    }
    clickVisitDate() {
        cy.get("#txt_visit_date").click();
    }
    selectMedicaid() {
        cy.get("#radio_program_medicaid").check();
    }
    openDatePicker() {
        cy.get(".glyphicon").click();
    }
    selectYear() {
        cy.get(
            ".datepicker-days > .table-condensed > thead > :nth-child(2) > .datepicker-switch"
        ).click();
        cy.get(
            ".datepicker-months > .table-condensed > thead > :nth-child(2) > .datepicker-switch"
        ).click();
        cy.get(
            ".datepicker-years > .table-condensed > tbody > tr > td > .focused"
        ).click();
    }
    selectMonth() {
        cy.get(
            ".datepicker-months > .table-condensed > tbody > tr > td > .focused"
        ).click();
    }
    selectDay() {
        cy.get(":nth-child(4) > :nth-child(6)").click();
    }
    enterComment(comment) {
        cy.get("#txt_comment").click({ force: true }).type(comment);
    }
    bookAppointment() {
        cy.get("#btn-book-appointment").click();
    }
}

export default AppointmentPage;
