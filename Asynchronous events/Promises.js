//Promises are used to handle async operations in Javascript.
//Suppose we are creating an e-com website like amazon.
const cart = ["shoes","pants","kurta"];

createOrder(cart); //orderId

proceedToPayment(orderId);

//Now how we use to handle async operations using callback functions:-
createOrder(cart,function(){              //passing the callback function
    proceedToPayment(orderId);
})
//Now it is the responsibility of createOrder api  to create an order and 
//then will call our callback function once the order is created using orderId.

//Now to avoid inversion of control using callbacks we can use Promises.

const promise = createOrder(cart);

promise.then(function(orderId){           //attaching a callback function to a promise object.
    proceedToPayment(orderId);
});


fetch();                ///returns a promise object
const data = fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

console.log(data);      



//What is a Promise in Javascript ---Interview Question

