export {};
function format(value) {
    console.log("타입", typeof value);
    if (typeof value === "number") {
        return value.toFixed(2);
    } // typeof로 좁히기
    return value.trim();
}
console.log(format(3.14159));
console.log("[", format("      안녕    "), "]");
function hasEmail(obj) {
    return "email" in obj; // in으로 속성 존재 확인
}
console.log(hasEmail({ email: "a@b.com" }));
console.log(hasEmail({ name: "홍길동" }));
//# sourceMappingURL=4_6.js.map