import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Then("I click in the choose a category button", () => {
  cy.get("[data-cy=category-button]").click();
});

And("the category menu slides in", () => {
  cy.get("[data-cy=category-menu]")
  .wait(400)
  .should("be.visible");
});

Then("I click in {string} category", (category) => {
  cy.get("[data-cy=category-menu]").find("p").contains(`${category}`).click();
});

And("I should see the restaurants filtered by {string}", (category) => {
    cy.location((loc)=>{
        expect(loc.search).to.eq(`?name=${category}`);
    })
});
