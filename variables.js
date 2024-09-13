var current = 100;
let quantity = 10;
const maxQuantity = 200;

function updateManagInventory(updateStock, updateQuantity) {
 
  if (updateStock) {
    current = updateStock;
    console.log(`Current Stock: ${current}`);
  }

  if (updateQuantity) {
    
    if (quantity + updateQuantity > maxQuantity) {
      console.log("Error: Quantity exceeds maximum limit!");
    } else {
        quantity += updateQuantity;
      console.log(`Quantity of Goods: ${quantity}`);
    }
    
  }

}
updateManagInventory(200, 400);
