let list1 = [1,7,3,5,6];
let list2 = [3,6,9,1,9]

let [first] = list1;
let[,,third] = list1;

console.log(first);
console.log(third);
console.log(list1);


let list3 = [list1,list2];
console.log(list3);

// spread operator
let list4 = [...list1,...list2];
console.log(list4);
console.log(list1);

// rest operator
let [first1,...list5] = list4;
console.log(first1);
console.log(list5);

// use of spread operator to make a copy of list4 and then reverse it so that original list4 remains same
let [last,...list6] = [...list4].reverse();
console.log(last);
console.log(list4);
console.log(list6);

let list7 = list1.concat(list2);
console.log(list7);
console.log(list1);
console.log(list2);

function details({name,jobTitle,company,getId}) {
    console.log(name+" "+jobTitle+" "+company);
    console.log(getId());
}

let ceo = {
    ...employee,
    title : "CEO"
}
console.log(ceo)
details(employee);
