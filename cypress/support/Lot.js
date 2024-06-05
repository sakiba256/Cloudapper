import bulkDelete from "./Bulkdelete";

class Lot {
    del=new bulkDelete();
    addLot(){
        cy.wait(8000);
        cy.get('.menu-title').contains('Lot Details').click();
        cy.get("#dataGridRecordAddBtn").click();
        cy.wait(4000);
        cy.get("#stringField0").type("Lot 1");
        cy.get("[title='Locate me']").click();
        cy.wait(4000);
        cy.get('.dx-button-text').contains('Save').click();
        cy.wait(5000); 

    }
   deleteLot(){
    cy.wait(8000);
    cy.get('.menu-title').contains('Lot Details').click();
    this.del.delete();
   }
    }
    export default Lot