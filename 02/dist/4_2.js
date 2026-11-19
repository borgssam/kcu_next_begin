export {};
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;
console.log(add(1, 2));
console.log(sub(1, 2));
function doItems(items, callback) {
    for (const item of items) {
        callback(item);
    }
}
console.log("1****************");
doItems(["a", "b", "c"], (item) => { console.log("문자:", item); });
console.log("2****************");
doItems(["a", "b", "c"], (item) => { console.log("letter:", item); });
//# sourceMappingURL=4_2.js.map