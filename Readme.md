# Cura HealthCare Cypress E2E Automation Suite 🚀

Welcome to the **Cura HealthCare Cypress E2E Automation Suite**—a modern, scalable, and professional test automation framework for the [Cura Health Demo Application](https://katalon-demo-cura.herokuapp.com/). This repository demonstrates Cypress best practices, leveraging the Page Object Model (POM), BDD with Cucumber, and advanced reporting for robust quality assurance.

---

## 🌟 Key Highlights

- **Cypress Framework:** Fast, reliable, and developer-friendly end-to-end testing.
- **Page Object Model (POM):** Modular, reusable code structure for effortless maintenance and scalability.
- **BDD with Cucumber:** Write human-readable scenarios and map them to Cypress step definitions.
- **Excel Data Integration:** Manage test data for dynamic and data-driven testing.
- **Mochawesome Reporting:** Generate visually rich, interactive HTML reports for every test run.
- **Professional Project Structure:** Follows industry standards for folder organization and code readability.

---

## 📂 Project Structure

```
cypress/
  integration/
    examples/
      CuraHealth/
        test1.js
      BDD/
        make_appointment.feature
  support/
    pages/
      HomePage.js
      LoginPage.js
      AppointmentPage.js
    step_definitions/
      make_appointment.js
```

---

## 🚀 Getting Started

1. **Clone the Repository**

   ```sh
   git clone https://github.com/Arkesh009/CuraHealthCare-Cy-Project.git
   cd CuraHealthCare-Cy-Project
   ```

2. **Install Dependencies**

   ```sh
   npm install
   ```

3. **Run Tests in Interactive Mode**

   ```sh
   npx cypress open
   ```

4. **Run Tests in Headless Mode**
   ```sh
   npx cypress run
   ```

---

## 📝 Example Test Scenario

- Visits the Cura Health home page
- Initiates the appointment booking process
- Logs in with valid credentials
- Fills out the appointment form (facility, readmission, program, date, comment)
- Submits the appointment and verifies confirmation

---

## 📊 Reporting

After running tests, find detailed Mochawesome HTML reports in the `cypress/reports` directory (if configured).

---

## 🤝 Contributing

Contributions are welcome! Please fork the repo and submit a pull request for review.

---

## 💡 Why This Project Stands Out

- **Enterprise-Ready:** Built with scalability and maintainability in mind.
- **Readable & Reusable:** Clear code and comments for easy onboarding.
- **Showcase Quality:** Perfect for portfolios, interviews, and real-world QA teams.

---

## 📬 Contact

For questions or collaboration, reach out via [GitHub Issues](https://github.com/Arkesh009/CuraHealthCare-Cy-Project/issues).

---

**Unleash the power of Cypress and elevate your web automation game with this feature-rich, professional framework!**
