let StudentData = [
    {
        idnumber: 1,
        name: "Jhon",
        city:"bandung",
        java:90,
        python : 75,
        c:80
        },
    {
        idnumber: 2,
        name: "Chris",
        city:"sukabumi",
        java:80,
        python: 55,
        c:100
    },
    {
        idnumber: 3,
        name: "Andreas",
        city:"bogor",
        java:100,
        python: 30,
        c:50
    }

]
console.log(StudentData[0]["name"]);
StudentData.push(
    {
        idnumber:4,
        name:"Daddy",
        ctiy:"Malang",
        java:88,
        python:30,
        c:86
    }
)
console.log(StudentData);

let bjava = 0
let name = ""
for(let i =0;i<StudentData.length;i++){
    if(StudentData[i]["java"]>bjava){
        bjava = StudentData[i]["java"]
        name = StudentData[i]["name"] + ","
    }
}
console.log(`biggest java score is : ${name}`);

let total = 0
for(let i =0;i<StudentData.length;i++){
    total += StudentData[i]["python"]
 
}
let mean = total/StudentData.length
console.log(`Mean ${mean}`);



let over70 = StudentData.filter(score=> score.java > 90)
console.log(over70);

let nameover70 = over70.map(score => score.name)
console.log(nameover70);


