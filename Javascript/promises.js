const GITHUB_API = "https://api.github.com/users/ChandraPrakash-Bathula";

const user = fetch(GITHUB_API);

console.log(user);

user.then(function (data) {
  console.log(data);
});

const cart = ["shoes", "kurta", "shirts", "pants"];

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function (orderId) {
   return proceedToPayment(orderId);
  }).then(function(paymentInfo){
    console.log(paymentInfo)
  })
  .catch(function (err) {
    console.log(err.message);
    // alert(err.message)
  });

function createOrder() {
  const pr = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid.");
      reject(err);
    }
    const orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });
  return pr;
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    const success = "Payment is Successfull.";
    resolve(success);
  });
}

function validateCart(cart) {
  return true; //true for valid
}
