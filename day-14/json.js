const personInfo = {
    name : "Kuddus",
    age: 60,
    city: "Dhaka"
} 

const jsonData = JSON.stringify(personInfo)
console.log(jsonData)

const newObj = JSON.parse(jsonData);

