// import { checkIfEleExists } from '../support/app.po';

// tslint:disable-next-line: only-arrow-functions
describe('Test Moduurn Cafe', function() {

    // tslint:disable-next-line: only-arrow-functions
    it('Open Samagra App', function() {
        cy.visit('https://moduurncafe.moduurn.ca/confirm', { failOnStatusCode: false });

        // checkIfEleExists('.cards > .row > .col-sm-12 > div > .btn-wide')
        //     .then(r => {
        //         cy.get('.cards > .row > .col-sm-12 > div > .btn-wide').click();
        //     });

        // checkIfEleExists('modal-container > div > div > landing-page > div > div.modal-body > div > div > div > div > div.landing-footer.col-sm-12 > button')
        //     .then(r => {
        //         cy.get('modal-container > div > div > landing-page > div > div.modal-body > div > div > div > div > div.landing-footer.col-sm-12 > button').click();
        //     });

        let elementPath = '.cards > .row > .col-sm-12 > div > .btn-wide';

        cy.checkIfEleExists(elementPath)
            .then((resultPath) => {
                cy.get(resultPath).click();
            });

        elementPath = 'modal-container > div > div > landing-page > div > div.modal-body > div > div > div > div > div.landing-footer.col-sm-12 > button';
        cy.checkIfEleExists(elementPath)
            .then((resultPath) => {
                cy.get(resultPath).click();
            });
    });
});