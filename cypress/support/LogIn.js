class LogIn {
   
    logIn(email,pass){
        //Enter email 
        return cy.wait(3000),
        cy.get('#txtEmail').type(email),
        cy.get('#txtUserPassword').type(pass),
        cy.get('#btnLogin').click(),
        cy.wait(4000);
        
    }
    validateEmpty(){
        cy.get('.custom-anchor-with-underline').should('contain','Welcome Onboard!');

    }
    launchApp(){
        cy.wait(4000);
        cy.get('.card-title.mb-0.pt-3.card-app-name').contains('The Shed Factory').click();
        cy.wait(4000);
    }
    }
    export default LogIn