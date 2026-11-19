export {};
var Role;
(function (Role) {
    Role[Role["Admin"] = 111] = "Admin";
    Role[Role["Teacher"] = 999] = "Teacher";
    Role[Role["Student"] = 333] = "Student";
})(Role || (Role = {}));
const roleNumber = Role.Teacher;
const role2 = 111;
const roleText = "admin";
console.log(roleNumber, roleText);
//# sourceMappingURL=3_5.js.map