console.log("hello");

let employee = {
    name : "Punit Gora",
    jobTitle : "SDE",
    company : "Paypal",
    getId() {
        return 123;
    }
};

// JSON handling
let str = JSON.stringify(employee);
console.log(str);
let obj1 = JSON.parse(str);
console.log(obj1)

for (key in employee) {
    console.log(`The ${key} of the employee is ${employee[key]}`);
}

let list = [1,6,8,2,5,4];

// iterating over a list
for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
}

for (element of list) {
    console.log(element);
}

list.forEach(x=>console.log(x));
console.log(document.getElementById('container'));
document.getElementById('main').innerHTML = 'This is Punit Gora';

setInterval(() => {
    document.getElementById("time").innerHTML = new Date();
}, 1000);
