// while
let n = 0

while (n < 10) {
    console.log(n)
    n++
}

do {
    console.log(n)
    n++
}while(n < 10)

for (let i = 0; i < 10; i++) {
    console.log(i)
}

const studentList = ["Joy", "Nayem", "Roman", "Shoikot", "Obuj shishu", "Ashfak", "Saiful Islam", "Shahed Khan"]

for (let i = 0; i < studentList.length; i++) {
    console.log(studentList[i]);
}

studentList.forEach(function (std, i) {
    console.log("Mr." + std + " " + i);
})

studentList.map(function (std, i) {
    console.log("Mr." + std + " " + (i + 1));
})

const bigStudent = studentList.filter(function (std) {
    return std.length > 5
})
console.log(bigStudent);

for (let i = 13; i < 100; i += 7) {
    console.log(i)
}

for (let i = 0; i < 100; i++) {
    if(i > 7 && i % 7 === 6) {
        console.log(i)
    }
}

// break, continue

for (let i = 0; i < 10; i++) {
    if(i == 5) {
        continue
    }
    if(i == 7) {
        break
    }
    console.log(i)
}