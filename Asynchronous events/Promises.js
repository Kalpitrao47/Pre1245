//Promises are used to handle async operations in Javascript.
//Suppose we are creating an e-com website like amazon.
const cart = ["shoes","pants","kurta"];

createOrder(cart); //orderId

proceedToPayment(orderId);

//Now how we use to handle async operations using callback functions:-
createOrder(cart,function(){
    proceedToPayment(orderId);
})
//Now it is the responsibility of createOrder api  to create an order and 
//then will call our callback function once the order is created using orderId.


