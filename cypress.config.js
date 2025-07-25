const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const { addCucumberPreprocessorPlugin, } = require("@badeball/cypress-cucumber-preprocessor");
const { preprendTransformerToOptions, } = require("@badeball/cypress-cucumber-preprocessor/browserify");
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');
const ExcelJs = require("exceljs");
const { error } = require("console");
const mochawesome = require('cypress-mochawesome-reporter/plugin');

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);

  // Setting up the file preprocessor for Cucumber
  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
  );

  // Adding a custom task for converting Excel to JSON
  on('task', {
    excelToJsonConverter(filePath) {
      const result = excelToJson({
        source: fs.readFileSync(filePath), // Reading the Excel file as a Buffer
      });
      return result; // Returning the converted JSON
    }
  });

  on('task', {
    async writeExcelTest({ searchText, replaceText, change, filePath }) {

      const workbook = new ExcelJs.Workbook();
      await workbook.xlsx.readFile(filePath);
      const worksheet = workbook.getWorksheet("Sheet1");
      const output = await readExcelTest(worksheet, searchText);

      const cell = worksheet.getCell(output.row, output.column + change.colChange);
      cell.value = replaceText;
      return workbook.xlsx.writeFile(filePath).then(() => {
        return true;
      }).catch((error) => {
        return false;
      })
    }
  })

  mochawesome(on); // <-- This enables mochawesome reporter hooks

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

async function readExcelTest(worksheet, searchText) {
  let output = { row: -1, column: -1 };
  worksheet.eachRow((row, rownumber) => {
    row.eachCell((cell, colNumber) => {
      if (cell.value === searchText) {
        output.row = rownumber;
        output.column = colNumber;
      }
    });
  });
  return output;
}


module.exports = defineConfig({
  defaultCommandTimeout: 6000,

  env: {
    url: "https://katalon-demo-cura.herokuapp.com",
  },

  retries: {
    runMode: 1,
  },
  projectId: "nodpcq",

  e2e: {
    setupNodeEvents,
    experimentalStudio: true,
    specPattern: ['cypress/integration/examples/CuraHealth/*.js', 'cypress/integration/examples/BDD/*.feature']
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/html',
    overwrite: true,
    html: true,
    json: false
  }
});