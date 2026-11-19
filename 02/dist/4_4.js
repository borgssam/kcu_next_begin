// src/main.ts
export {};
let a = "hello";
console.log(a.toUpperCase()); // 허용(어떤 검사도 안 함, 위험)
a = 123; // 허용
console.log(a.toUpperCase()); // 런타임에 오류! any는 아무 제약이 없어 이런 실수를 못 막는다
//# sourceMappingURL=4_4.js.map