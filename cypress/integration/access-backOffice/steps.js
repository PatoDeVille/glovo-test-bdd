import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given("I am logged as a restaurant", () => {
    cy.visit("/");
  cy.request("POST", "http://localhost:3001/login", {
    email: "super@admin.com",
    password: "Salut123",
  })
    .then( (response) => {
        const user = response.body
        const session = {
            token: user.token,
            user: user.user
        }
        window.localStorage.setItem(
            "user-session", JSON.stringify(session));
        
    })
    // .then((user) => {
      
    //   window.localStorage.setItem(
    //     "user-session",
    //     `{ token: ${user.token}, user: ${user.user} }`
    //   );
    // });
});

When("I navigate to the backOffice page", () => {
  cy.visit("/backOffice");
});

Then("the back office page has loaded", () => {
  cy.get("[data-cy=backOffice]").should("be.visible");
});

Then("I see the back office page", () => {
  cy.get("[data-cy=night-mode]").should("be.visible");
  cy.get("[data-cy=globo-logo]").should("be.visible");
});
