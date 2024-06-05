class bulkDelete {
   

   delete(){
    cy.wait(4000);
    //cy.get('.dx-checkbox-icon[xpath="1"]').click();
    cy.get('.dx-datagrid-headers > .dx-datagrid-content-fixed > .dx-datagrid-table > tbody > .dx-row > .dx-command-select > .dx-widget > .dx-checkbox-container > .dx-checkbox-icon').click();
    cy.get(".dx-icon.las.la-trash-alt").click();
    cy.get('.swal2-confirm.swal2-styled.swal2-default-outline').contains("Delete").click();
    cy.wait(5000); 
    cy.get('.dx-datagrid-nodata').should('contain','No data found');
   }
    }
    export default bulkDelete 
