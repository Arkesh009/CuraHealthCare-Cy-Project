/// <reference types="cypress"/>

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import AppointmentPage from "../pages/AppointmentPage";

describe('Cura Health First Test Suite', () => {
    const homePage = new HomePage();
    const loginPage = new LoginPage();
    const appointmentPage = new AppointmentPage();

    it('Make Appointment Test', () => {
        // Home Page
        homePage.visit();
        homePage.clickMakeAppointment();

        // Login Page
        loginPage.enterUsername('John Doe');
        loginPage.enterPassword('ThisIsNotAPassword');
        loginPage.clickLogin();

        // Appointment Page
        appointmentPage.selectFacility('Seoul CURA Healthcare Center');
        appointmentPage.checkHospitalReadmission();
        appointmentPage.selectMedicaid();
        appointmentPage.openDatePicker();
        appointmentPage.selectYear();
        appointmentPage.selectMonth();
        appointmentPage.selectDay();
        appointmentPage.clickVisitDate();
        appointmentPage.enterComment('Automated test comment');
        appointmentPage.bookAppointment();
    });
});