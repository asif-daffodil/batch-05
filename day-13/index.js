const cityList = ["Dhaka", "Rajshahi", "Khulna", "Rongpur"]
// console.log(cityList[2])
// console.log(cityList.length)
cityList.push("Barishal", "Noakhali", "Bhrammonbaria", "Gopalganj")
// console.log(cityList)
cityList.pop()
// console.log(cityList)
cityList.unshift("Bogura", "Chapainababganj")
// console.log(cityList)
cityList.shift()
// console.log(cityList)
const newCities = cityList.slice(1, 5);
console.log(newCities);
const nayim = cityList.splice(1, 4, "Chittagang", "Cox's Bazar")
// console.log(cityList)
// console.log(nayim)

const studentAges = [22, 15, 36, 9, 42, 65, 40, 4, 3]
studentAges.sort(function (a, b) {
    return a - b
})
// console.log(studentAges)

cityList.sort()
console.log(cityList);


