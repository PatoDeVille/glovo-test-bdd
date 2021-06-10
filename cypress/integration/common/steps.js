import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I navigate to the home page', () => {
  cy.visit("/");
});

When('the home page has loaded', ()=> {
    cy.get('[data-cy=main-header]').should("be.visible");
})

Given("I am not logged in", () => {
    cy.visit("/");
    window.localStorage.setItem("user-session", "{}");
  });
  