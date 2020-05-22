// tslint:disable-next-line: eofline
export function checkIfEleExists(ele) {
    return new Promise((resolve, reject) => {
        cy.get('body').find(ele).its('length').then(res => {
            if (res > 0) {
                //// do task that you want to perform
                // cy.get(ele).select('100').wait(2000);
                resolve();
            } else {
                reject();
            }
        });
    });
}