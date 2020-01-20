Cypress.Commands.add('login', () => {
cy.request({
    method: 'POST',
    url: 'http://localhost:4000/users/authenticate/',
    body: {
        Username: 'test',
        Password: 'test',
    }
})
.its('body')
.then(body => {
    localStorage.setItem('currentUser', JSON.stringify(body))
    })
});

let LOCAL_STORAGE_MEMORY = {};
Cypress.Commands.add("saveLocalStorage", () => {
    Object.keys(localStorage).forEach(key => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key];
    });
});

Cypress.Commands.add("restoreLocalStorage", () => {
    Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
    });
});