// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


// export const getGreeting = () => cy.get('h1');


// export function checkIfEleExists(ele) {
//   return new Promise((resolve, reject) => {
//     cy.get('body').find(ele).its('length').then(res => {
//       if (res > 0) {
//         //// do task that you want to perform
//         // cy.get(ele).select('100').wait(2000);
//         resolve();
//       } else {
//         reject();
//       }
//     });
//   });
// }

Cypress.Commands.add("checkIfEleExists", (elementPath) => {
    return new Cypress.Promise((resolve, reject) => {
        if (Cypress.$(elementPath).length > 0) {
            resolve(elementPath);
        } else {
            reject();
        }
        // cy.get('body').find(elementPath).its('length').then(res => {
        //     if (res > 0) {
        //         //// do task that you want to perform
        //         // cy.get(ele).select('100').wait(2000);
        //         resolve(true);
        //     } else {
        //         reject();
        //     }
        // });
    });

});