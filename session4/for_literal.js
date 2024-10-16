let student ={
    name:"Andreas",
    age:20,
    address:'cisaat'
}

for(let key in student){
    console.log(`${key} : ${student[key]}`);
}


//Destructuring
let {name,age,address}= student
console.log(`Name : ${name}`);
console.log(`Age : ${age}`);
console.log(`Address : ${address}`);

//Print out with static method
console.log(Object.keys(student)); // ["name","age","address"]









