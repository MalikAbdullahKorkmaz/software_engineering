let person = {
    name: {
        firstname:"Malik",
        lastname:"legend"
    },
    age: 19,
    address: "cisaat",
    hobby:["Basket Ball"," Football","hiking"],
    infoperson: function(){
        return (
            `Name: ${person.name.firstname}\n Age:${person.age}`
        );
    }
}

console.log(person.infoperson());

//Accessing Object - output will be "Malik"
console.log(`Name : ${person.name.firstname}`);

console.log(`Name : ${person["name"]["lastname"]}`);

//add key and value

person["idnumber"] = 1
console.log(person);

//change the value of object - name :legend
person["name"]["lastname"] = "legend"
console.log(person);
//output will be Football
console.log(person["hobby"][1]);

//accessing data object with iteration
for(let key in person){
    console.log(key);
}



