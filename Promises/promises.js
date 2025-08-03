const cart = ["shoes", "pants", "bags"];

createOrder(cart,function(orderId){
proceedToPayment(orderId);
});