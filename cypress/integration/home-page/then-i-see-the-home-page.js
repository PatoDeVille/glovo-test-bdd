Then("I see the home page", () => {
  cy.get("[data-cy=welcome-title]").should("be.visible");
});
