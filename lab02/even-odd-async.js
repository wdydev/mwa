Array.prototype.even = async function () {
    return this.filter(num => num % 2 === 0);
};
Array.prototype.odd = async function () {
    return this.filter(num => num % 2 === 1);
};

console.log("start");
[1, 2, 3, 4, 5, 6, 7, 8].even().then(console.log);
[1, 2, 3, 4, 5, 6, 7, 8].odd().then(console.log);
console.log("end");
