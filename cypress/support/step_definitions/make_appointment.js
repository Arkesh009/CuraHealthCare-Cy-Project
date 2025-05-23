import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import AppointmentPage from "../pages/AppointmentPage";

const homePage = new HomePage();
const loginPage = new LoginPage();
const appointmentPage = new AppointmentPage();

Given("I am on the Cura Health home page", () => {
  homePage.visit();
});

When('I click on the "Make Appointment" button', () => {
  homePage.clickMakeAppointment();
});

When(
  'I log in with username {string} and password {string}',
  (username, password) => {
    loginPage.enterUsername(username);
    loginPage.enterPassword(password);
    loginPage.clickLogin();
  }
);

When('I select {string} as the facility', (facility) => {
  appointmentPage.selectFacility(facility);
});

When("I check hospital readmission", () => {
  appointmentPage.checkHospitalReadmission();
});

When('I select "Medicaid" as the healthcare program', () => {
  appointmentPage.selectMedicaid();
});

When("I pick a visit date", () => {
  appointmentPage.openDatePicker();
  appointmentPage.selectYear();
  appointmentPage.selectMonth();
  appointmentPage.selectDay();
  appointmentPage.clickVisitDate();
});

When('I enter "Automated test comment" in the comment box', () => {
  appointmentPage.enterComment("Automated test comment");
});

When('I click the "Book Appointment" button', () => {
  appointmentPage.bookAppointment();
});

Then("I should see a confirmation for the appointment", () => {
  cy.contains("Appointment Confirmation").should("be.visible");
});