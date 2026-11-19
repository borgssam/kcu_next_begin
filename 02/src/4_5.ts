// src/main.ts
export {};

let u: unknown = "hello";
//u.toUpperCase(); // 오류! 타입을 확인하기 전엔 아무 메서드도 못 씀
if (typeof u === "string") {
  console.log(u.toUpperCase()); // 여기선 허용 — 타입을 좁힌 뒤라서 안전
}
