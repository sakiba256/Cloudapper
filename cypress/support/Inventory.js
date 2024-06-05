import bulkDelete from "./Bulkdelete";

class  Inventory{
   del=new bulkDelete();
    addItems(detail,type){
        
        cy.get('.menu-title').contains('Inventory').click();
        cy.get('.menu-title').contains('Items').click();
        cy.get("#dataGridRecordAddBtn").click();
        cy.wait(4000);
        cy.get("#stringField2").type(detail);
        cy.get("#stringField0").click();
        cy.get(".dx-item-content.dx-list-item-content").contains(type).click();
        cy.wait(4000);
        cy.get("#stringField1").click();
        cy.get(".dx-item-content.dx-list-item-content").contains("Percentage of Base").click();
        cy.wait(1000);
        cy.get("#numericField1").type('10')
        cy.get('.dx-button-text').contains('Save').click();
        cy.wait(5000); 

    }
    addItemsColor(color,colorName){

        
        cy.get('.menu-title').contains('Inventory').click();
        cy.get('.menu-title').contains('Item Colors').click();
        cy.get("#dataGridRecordAddBtn").click();
        cy.wait(4000);
        cy.get("#stringField0").click();
        cy.get(".dx-item-content.dx-list-item-content").contains(color).click();
        cy.get('#stringField1').clear();
        cy.get('#stringField1').type(colorName);
        cy.get('#numericField0').type('10');
        cy.get('.dx-button-text').contains('Save').click();
        cy.wait(5000);

    }
    addShedInventory (){

        cy.wait(8000);
        cy.get('.menu-title').contains('Inventory').click();
        cy.get('.menu-title').contains('Shed Inventory').click();
        cy.get("#dataGridRecordAddBtn").click();
        cy.wait(4000);
        cy.get('.dx-lookup-field').contains('Select Lot').click();
        cy.get('.common-text-overflow-title').contains('Lot 1').click();
        cy.wait(1000)
        cy.get('.dx-lookup-field').contains('Select Base').click();
        cy.get('.common-text-overflow-title').contains('Inventory 1').click({force:true});
        cy.wait(2000)
        cy.get('.dx-lookup-field').contains('Select What type of roof?').click({force:true});
        cy.get('.common-text-overflow-title').contains('Inventory 2').click();
        cy.wait(2000)
        cy.get('.dx-lookup-field').contains('Select Roof Color').click();
        cy.get('.common-text-overflow-title').contains('Black').click();
        cy.get('#booleanField14').click();
        cy.wait(2000)
        cy.get("#numericField19").type('10');
        //Add Door Options
        cy.get('#booleanField2').click();
        cy.wait(2000);
        cy.get('.dx-button-text').contains('Add Door Options').click();
        cy.wait(2000);
        cy.get('.dx-lookup-field').contains('Select Door Option').click();
        cy.get('.common-text-overflow-title').contains('Inventory 4').click();
        cy.wait(2000);
        cy.get('.dx-lookup-field').contains('Select Color').click();
        cy.get('.common-text-overflow-title').contains('Silver').click();
        cy.wait(2000);
        cy.get('#integerField0').type('10');
        cy.get('.dx-button-text').contains('Save').click();
        cy.wait(5000);
        //Add Window
        cy.get('#booleanField3').click();
        cy.wait(2000);
        cy.get('.dx-button-text').contains('Add Windows').click();
        cy.wait(2000);
        cy.get('.dx-lookup-field').contains('Select Window Type').click();
        cy.get('.common-text-overflow-title').contains('Inventory 5').click();
        cy.wait(2000);
        cy.get('.dx-lookup-field').contains('Select Color').click();
        cy.get('.common-text-overflow-title').contains('Golden').click();
        cy.wait(2000);
        cy.get('#integerField0').type('10');
        cy.get('.dx-button-text').contains('Save').click();
        cy.wait(5000);
        //Add Vents
        cy.get('#booleanField5').click();
        cy.wait(2000);
        cy.get('.dx-button-text').contains('Add Vents').click();
        cy.wait(2000);
        cy.get('.dx-lookup-field').contains('Select Vent').click();
        cy.get('.common-text-overflow-title').contains('Inventory 7').click();
        cy.wait(2000);
        cy.get('.dx-lookup-field').contains('Select Color').click();
        cy.get('.common-text-overflow-title').contains('Merun').click();
        cy.wait(2000);
        cy.get('#integerField0').type('10');
        cy.get('.dx-button-text').contains('Save').click();
        cy.wait(5000);
        //Add taller Sidewalls
        cy.get('#booleanField7').click();
        cy.wait(2000);
        cy.get('.dx-lookup-field').contains('Select Sidewall Height').click();
        cy.get('.common-text-overflow-title').contains('Inventory 9').click();
        cy.wait(2000);
        //Add Firewall
        cy.get('#booleanField12').click();
        cy.wait(2000);
        cy.get('#numericField22').type('10')
        //Add Tyvek on Exterior Walls
        cy.get('#booleanField13').click();
        cy.wait(2000);
        cy.get('#numericField24').type('10')
        //Add Shelving/Loft
        cy.get('#booleanField8').click();
        cy.wait(2000);
        cy.get('.dx-button-text').contains('Add Shelving/Loft').click();
        cy.wait(2000);
        cy.get('.dx-lookup-field').contains('Select Shelving/Loft').click();
        cy.get('.common-text-overflow-title').contains('Inventory 12').click();
        cy.wait(2000);
        cy.get('#numericField1').type('10');
        cy.get('.dx-button-text').contains('Save').click();
        cy.wait(5000);

        //uUgrade floors or floor joists
        cy.get('#booleanField9').click();
        cy.wait(2000);
        cy.get('.dx-button-text').contains('Add Floor Ad ON').click();
        cy.wait(2000);
        cy.get('.dx-lookup-field').contains('Select Floor Material').click();
        cy.get('.common-text-overflow-title').contains('Inventory 10').click();
        cy.wait(2000);
        cy.get('#integerField0').type('10');
        cy.get('.dx-button-text').contains('Save').click();
        cy.wait(5000);
        //Add Package
        cy.get('#booleanField10').click();
        cy.wait(2000);
        cy.get('.dx-button-text').contains('Add Packages').click();
        cy.wait(2000);
        cy.get('.dx-lookup-field').contains('Select Packages').click();
        cy.get('.common-text-overflow-title').contains('Inventory 11').click();
        cy.wait(2000);
        cy.get('#integerField0').type('10');
        cy.get('.dx-button-text').contains('Save').click();
        cy.wait(5000);
        // Save Lot Inventory
        cy.get('.dx-button-text').contains('Save').click();

    }
    validateShedInventory (){
        cy.get('.menu-title').contains('Inventory').click();
        cy.get('.menu-title').contains('Shed Inventory').click();
        cy.get('#gridContainer > div > div.dx-datagrid-rowsview.dx-datagrid-nowrap.dx-fixed-columns.dx-scrollable.dx-visibility-change-handler.dx-scrollable-both.dx-scrollable-native.dx-scrollable-native-generic > div.dx-scrollable-wrapper > div > div > div > table').dblclick();
        cy.get('#stringField2').should('contain','Available');      
        //cy.get('#numericField18').should('contain','3687.5');

    }

    deleteItems(){
        
        cy.get('.menu-title').contains('Inventory').click();
        cy.get('.menu-title').contains('Items').click();
        this.del.delete();
        
    }

    deleteItemsColor(){

        
        cy.get('.menu-title').contains('Inventory').click();
        cy.get('.menu-title').contains('Item Colors').click();
        this.del.delete();
    }
   
    deleteShedInventory (){

        cy.wait(8000);
        cy.get('.menu-title').contains('Inventory').click();
        cy.get('.menu-title').contains('Shed Inventory').click();
        this.del.delete();
    }
    }
    export default Inventory