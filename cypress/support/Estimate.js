import bulkDelete from "./Bulkdelete";

class  Estimate{
   del=new bulkDelete();
    addEstimate(){
        
        cy.get('.menu-title').contains('Estimates').click();
        cy.get('.menu-title').contains('Estimates and Orders').click();
        cy.get("#dataGridRecordAddBtn").click();
        cy.wait(4000);
        cy.get('.dx-lookup-field').contains('Select Customer').click();
        cy.get('.common-text-overflow-title').contains('Customer 1').click();
        cy.get('#stringField27').type('#ORD 1');
        cy.get('#stringField14').click();
        cy.get('.dx-item-content.dx-list-item-content').contains('On Lot').click(); 
        cy.get('#stringField26').click();
        cy.get('.dx-item-content.dx-list-item-content').contains('24').click();
        cy.get('.dx-lookup-field').contains('Select Product').click();
        cy.get('.common-text-overflow-title.ng-star-inserted').contains('INV').click();


        cy.get('.dx-button-text').contains('Save').click();
        cy.wait(5000); 

    }
   
    deleteEstimate(){
        
        cy.get('.menu-title').contains('Estimates').click();
        cy.get('.menu-title').contains('Estimates and Orders').click();
        this.del.delete();
    }
   
    }
    export default Estimate