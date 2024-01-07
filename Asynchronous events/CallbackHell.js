//Callback hell-Unmaintainable, Unreadable
const cart = ["shoes","pants","kurta"];
api.createOrder(cart,function(){
    api.proceedToPayment(function(){
        api.showOrderSummary(function(){
            api.updateWallet();
        })
    })
})

//Issues with callback
//1)Callback Hell
//2)Inversion of Control-We loose control of our program because we pass callback function into another 
//function and now we have given the control of this function to some other function. 