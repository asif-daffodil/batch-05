const studentInfo = {
    name : "Nayem",
    gender: "Male",
    isMarried: true,
    childrenCount: 1,
    portfolio: true,
    cPlusPlus: false,
    bestFriend: ["Sahed Khan", "Joy", "Soikot"],
    city: "Shirajganj",
    mainInfo: function () {
        // return this.name + " lives in " + this.city + " and he has " + this.childrenCount + " child/children"
        return `${this.name} lives in ${this.city} and he has ${this.childrenCount} child/children`;
    },
    presentAddress: {
        HouseNo: "9/2",
        street: "Mirpur Road",
        ares: "Pallabi",
        city: "Dhaka",
        zipCode: 1216
    }
}

console.log(studentInfo.name);
console.log(studentInfo.mainInfo())
console.log(studentInfo["gender"])
studentInfo.income = 20000
console.log(studentInfo.income)
console.log(studentInfo.presentAddress.zipCode);
console.log(studentInfo.bestFriend[0]);

for (let i = 0; i < studentInfo.bestFriend.length; i++) {
    console.log(studentInfo.bestFriend[i]);
}

studentInfo.bestFriend.map(function (dhaka) {
    console.log(dhaka);
})