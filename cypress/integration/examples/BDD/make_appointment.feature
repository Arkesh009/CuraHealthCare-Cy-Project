Feature: Make Appointment on Cura Health

  As a registered user
  I want to book an appointment
  So that I can visit the healthcare center

  Scenario: Successful appointment booking
    Given I am on the Cura Health home page
    When I click on the "Make Appointment" button
    And I log in with username "John Doe" and password "ThisIsNotAPassword"
    And I select "Seoul CURA Healthcare Center" as the facility
    And I check hospital readmission
    And I select "Medicaid" as the healthcare program
    And I pick a visit date
    And I enter "Automated test comment" in the comment box
    And I click the "Book Appointment" button
    Then I should see a confirmation for the appointment