isKept = true

const shahed = new Promise((res, rej) => {
    setTimeout(() => {
        if (isKept) {
            res("Shahed tar kotha rekheche")
        }else{
            rej("Shahed tar kotha rakheni")
        }
    }, 3000)
})

/*
shahed.then(function (data) {
    console.log(data);
}).catch(function (err) {
    console.log(err);
})
*/

const runShahed = async () => {
    try {
        const result = await shahed
        console.log(result);
    }catch(err) {
        console.log(err);
    }
}

runShahed()

