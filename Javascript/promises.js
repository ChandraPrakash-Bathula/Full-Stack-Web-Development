const GITHUB_API = "https://api.github.com/users/ChandraPrakash-Bathula";

const user = fetch(GITHUB_API);

console.log(user);

user.then(function (data) {
  console.log(data);
});

const cart = ["shoes", "kurta", "shirts", "pants"];

const promise = createOrder(cart);
console.log(promise);
promise.then(function (orderId) {
  console.log(orderId);
  //   proceedToPayment(orderId);
});

function createOrder() {
  const pr = new Promise(function (resolve, reject) {
    const err = new Error("Cart is not valid.");
    if (!validateCart(cart)) {
      console.log(err);
    }
    const orderId = "12345";
    if (orderId) {
      setTimeout(function(){
        resolve(orderId)
      }, 5000);
    }
  });
  return pr;
}

function validateCart(cart) {
  return true;
}
