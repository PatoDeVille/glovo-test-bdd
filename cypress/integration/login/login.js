import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";


Then("I click in the sign in button", () => {
  cy.get("[data-cy=main-header]").find("p").contains("Sign in").click();
});

When("the login modal opens", () => {
  cy.get("[data-cy=login-form]").should("be.visible");
});

Then("I type my username {string}", (username) => {
  cy.get("#email").type(username);
});

And("my password {string}", (password) => {
  cy.get("#password").type(password);
});

Then("I click in the continue button", () => {
  cy.intercept("/login").as("Login");
  cy.get("[data-cy=login-submit]").click();
  cy.wait("@Login", (req) => {
    req.continue((res) => {
      cy.log("...", res);
    });
  });
});

And("I see I am logged in", () => {
  cy.visit("/").should(() => {
    expect(JSON.parse(localStorage.getItem("user-session"))).to.have.keys("token", "user");
  });
  const session = window.localStorage.getItem("user-session");
  cy.log(session);
});

