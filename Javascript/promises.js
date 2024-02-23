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
  .catch(function (err) {
    console.log(err.message);
    // alert(err.message)
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
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

/* Promise.all()*/
const P1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("P1 Success");
  }, 3000);
});

const P2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("P2 Success");
  }, 1000);
});

const P3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject("P3 Fail");
  }, 1000);
});

Promise.all([P1, P2, P3]).then((res) => {
  return console.log(res);
}).catch(err=>{
    console.error(err);
});
/* Promise.alllsettled()*/
const P4 = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("P4 Success");
    }, 3000);
  });
  
  const P5 = new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject("P5 Success");
    }, 1000);
  });
  
  const P6 = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("P6 Fail");
    }, 1000);
  });
  
  Promise.allSettled([P4, P5, P6]).then((res) => {
    return console.log(res);
  }).catch(err=>{
      console.error(err);
  });

  /* Promise.race()*/
const P7 = new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject("P7 Fail");
    }, 4000);
  });
  
  const P8 = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("P8 Success");
    }, 3000);
  });
  
  const P9 = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("P9 Success");
    }, 1000);
  });
  
  Promise.race([P7, P8, P9]).then((res) => {
    return console.log(res);
  }).catch(err=>{
      console.error(err);
  });

  /* Promise.any()*/
const P10 = new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject("P10 Fail");
    }, 4000);
  });
  
  const P11 = new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject("P11 Fail");
    }, 3000);
  });
  
  const P12 = new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject("P12 Fail");
    }, 1000);
  });
  
  Promise.any([P10, P11, P12]).then((res) => {
    return console.log(res);
  }).catch(err=>{
      console.error(err);
      console.log(err.errors)
  });