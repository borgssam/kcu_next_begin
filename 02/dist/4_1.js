// src/main.ts
export {};
function greet(name, greeting) {
    return `${greeting ?? "안녕"}, ${name}!`;
}
function greet2(name, greeting = "안녕") {
    return `${greeting}, ${name}!`;
}
console.log(greet("홍길동"));
console.log(greet("홍길동", "반갑습니다"));
console.log(greet2("김철수"));
console.log(greet2("김철수", "반갑습니다."));
//# sourceMappingURL=4_1.js.map