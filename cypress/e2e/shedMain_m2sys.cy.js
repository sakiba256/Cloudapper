import LogIn from "../support/LogIn";
import Lot from "../support/Lot";
import Inventory from "../support/Inventory";
import Estimate from "../support/Estimate";
describe('Shed Factory', () => {
  const login= new LogIn();
  const lot= new Lot();
  const invertory= new Inventory();
  const estimate=new Estimate();
  it('Log In', () => 
        {
          cy.session('todos',()=>{
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false
                  })       
        
                  cy.visit("https://m2sys.cloudapper.com/");        
                  login.logIn('demo@m2sys.com','****');
            //login.launchApp();
           
          
            lot.addLot();
            invertory.addItems('Inventory 1','Base');
            invertory.addItems('Inventory 2','Type Of Roof');
            invertory.addItems('Inventory 3','Door');
            invertory.addItems('Inventory 4','Door Option');
            invertory.addItems('Inventory 5','Window');
            invertory.addItems('Inventory 6','Window Add On');
            invertory.addItems('Inventory 7','Vent');
            invertory.addItems('Inventory 8','Ramp');
            invertory.addItems('Inventory 9','Sidewall');
            invertory.addItems('Inventory 10','Floor');
            invertory.addItems('Inventory 11','Package');
            invertory.addItems('Inventory 12','Shelving/Loft');
            invertory.addItems('Inventory 13','Others');

            invertory.addItemsColor('Base','White');
            invertory.addItemsColor('Type Of Roof','Black');
            invertory.addItemsColor('Door','Brown');
            invertory.addItemsColor('Door Option','Silver');
            invertory.addItemsColor('Window','Golden');
            invertory.addItemsColor('Window Add On','Ash');
            invertory.addItemsColor('Vent','Merun');
            invertory.addItemsColor('Ramp','Purple');
            invertory.addItemsColor('Sidewall','Green');
            invertory.addItemsColor('Floor','Transparent');
            invertory.addItemsColor('Package','Blue');
            invertory.addItemsColor('Other','Rainbow');


            invertory.addShedInventory();

            invertory.validateShedInventory();
            estimate.addEstimate();
            //Delete all records
            lot.deleteLot();
            invertory.deleteItems();
            invertory.deleteItemsColor();
            invertory.deleteShedInventory();
            estimate.deleteEstimate();
            
          })
        })
})