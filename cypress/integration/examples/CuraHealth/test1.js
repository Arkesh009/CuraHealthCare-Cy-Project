/// <reference types="cypress"/>

import HomePage from "../../../support/pages/HomePage";
import LoginPage from "../../../support/pages/LoginPage";
import AppointmentPage from "../../../support/pages/AppointmentPage";

describe('Cura Health First Test Suite', () => {
    const homePage = new HomePage(); // Instantiate HomePage
    const loginPage = new LoginPage(); // Instantiate LoginPage
    const appointmentPage = new AppointmentPage(); // Instantiate AppointmentPage

    it('Make Appointment Test', () => {
        homePage.visit(); // Visit the Cura Health home page
        homePage.clickMakeAppointment(); // Click the "Make Appointment" button

        loginPage.enterUsername('John Doe'); // Enter username
        loginPage.enterPassword('ThisIsNotAPassword'); // Enter password
        loginPage.clickLogin(); // Click the login button

        appointmentPage.selectFacility('Seoul CURA Healthcare Center'); // Select facility
        appointmentPage.checkHospitalReadmission(); // Check hospital readmission
        appointmentPage.selectMedicaid(); // Select Medicaid as healthcare program
        appointmentPage.openDatePicker(); // Open the date picker
        appointmentPage.selectYear(); // Select year in date picker
        appointmentPage.selectMonth(); // Select month in date picker
        appointmentPage.selectDay(); // Select day in date picker
        appointmentPage.clickVisitDate(); // Click visit date field to confirm
        appointmentPage.enterComment('Automated test comment'); // Enter comment
        appointmentPage.bookAppointment(); // Submit the appointment booking form
    });
});