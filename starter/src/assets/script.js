/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/
const products = [
  {
    name: "Cherry",
    price: 1.00,
    quantity: 0,
    productId: 100,
    image: "images/cherry.jpg"
  },
  {
    name: "Orange",
    price: 2.75,
    quantity: 0,
    productId: 101,
    image: "images/orange.jpg"
  },
  {
    name: "Strawberry",
    price: 3.00,
    quantity: 0,
    productId: 102,
    image: "images/strawberry.jpg"
  }
];

/* Declare an empty array named cart to hold the items in the cart */
let cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
function addProductToCart(productId) {
  const product = products.find(p => p.productId === productId);
  if (!product) return;
  if (product.quantity === 0) {
    product.quantity = 1;
    cart.push(product);
  } else {
    product.quantity++;
  }
}
/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity(productId) {
  const product = cart.find(p => p.productId === productId);
  if (!product) return;
  product.quantity++;
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(productId) {
  const index = cart.findIndex(p => p.productId === productId);
  if (index < 0) return;
  const product = cart[index];
  product.quantity--;
  if (product.quantity <= 0) {
    product.quantity = 0;
    cart.splice(index, 1);
  }
}
/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart(productId) {
  const index = cart.findIndex(p => p.productId === productId);
  if (index < 0) return;
  const product = cart[index];
  product.quantity = 0;
  cart.splice(index, 1);
}
/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/

function cartTotal() {
  return cart.reduce((sum, p) => sum + p.price * p.quantity, 0);
}

/* Create a function named pay that takes in an amount as an argument
- amount is the money paid by customer
- pay will return a negative number if there is a remaining balance
- pay will return a positive number if money should be returned to customer
Hint: cartTotal function gives us cost of all the products in the cart  
*/
function pay(amount) {
  return amount - cartTotal();
}

/*Empty cart function*/
function emptyCart() {
  // Reset quantities on all products
  cart.forEach(p => p.quantity = 0);
  // Clear the cart array
  cart.length = 0;
  // Reset total paid for a fresh checkout session
  totalPaid = 0;
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
