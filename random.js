const arr = [];

let count = 6;

for (let i = 0; i < count; i++) {
    const ran = Math.ceil(Math.random() * 45);
    if (arr.includes(ran)) {
        count++;
        continue;
    }
    arr.push(ran);
}

console.log(arr);