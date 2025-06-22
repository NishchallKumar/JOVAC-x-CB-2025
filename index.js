let arr = [4, 6, 2, 3, 1]

const users = [
    {
        firstName: "Pratiyush",
        lastName: "Ray",
        age: 25
    },
    {
        firstName: "Yateesh",
        lastName: "Gangwar",
        age: 19
    },
    {
        firstName: "Suraj",
        lastName: "Nagaich",
        age: 20
    },
    {
        firstName: "Ambika",
        lastName: "Mishra",
        age: 18
    },
    {
        firstName: "Tanmay",
        lastName: "Kumar",
        age: 22
    }
]

const cart = ["shoes", "watches", "pants", "glasses", "deodrants", "shirt"]

createOrder(cart, function(orderId){
    proceedToPayment(orderId, function (paymentInfo){
        showOrderSummary(paymentInfo, function (){
            updateWallet();
        });
    });
});

createOrder(cart)
    .then(function (orderId){
        return proceedToPayment(orderId);
    })
    .then(function (paymentInfo){
        return showOrderSummary(paymentInfo);
    })
    .then(function(paymentInfo){
        return updateWalletBalance(paymentInfo);
    })

function createOrder(cart){
    let orderId = "1234"
    console.log(orderId);
    console.log(cart);
}

const promise = createOrder(cart);

console.log(promise);

promise.then(function (orderId){
    console.log(orderId);
}).catch(function (err){
    console.log(err.message);
})

const myPromise = new Promise((resolve, reject) => {
    resolve("Promise Resolved")
});

console.log(myPromise);

const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Rejected");
    }, 3000);
});

myPromise2.then(function (){
    console.log("THEN ACTIVATED")
}).then(function (){
    console.log("ONE MORE THEN 1")
}).then(function (){
    console.log("ONE MORE THEN 2")
}).then(function (){
    console.log("ONE MORE THEN 3")
}).then(function (){
    console.log("ONE MORE THEN 4")
})
.catch(function (err){
    console.log(err);
});

const p1 = new Promise(function (resolve, reject){
    setTimeout(()=>{
        reject("P1 reject");
    }, 1000)
});

const p2 = new Promise(function (resolve, reject){
    setTimeout(()=>{
        reject("P2 reject");
    }, 1000)
});

const p3 = new Promise(function (resolve, reject){
    setTimeout(()=>{
        resolve("P3 Resolve");
    }, 4000)
});

Promise.any([p1, p2, p3])
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    })
