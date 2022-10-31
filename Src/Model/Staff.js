"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Staff = void 0;
var Staff = /** @class */ (function () {
    function Staff(code, name, sex, dateOfBirth, phoneNumber, address, group) {
        this.code = code;
        this.name = name;
        this.sex = sex;
        this.dateOfBirth = dateOfBirth;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.group = group;
    }
    Staff.prototype.getcode = function () {
        return this.code;
    };
    Staff.prototype.getName = function () {
        return this.name;
    };
    Staff.prototype.getSex = function () {
        return this.sex;
    };
    Staff.prototype.getDateofbirth = function () {
        return this.dateOfBirth;
    };
    Staff.prototype.getPhoneNumber = function () {
        return this.phoneNumber;
    };
    Staff.prototype.getAddress = function () {
        return this.address;
    };
    Staff.prototype.getGroup = function () {
        return this.group;
    };
    Staff.prototype.setCode = function (code) {
        this.code = code;
    };
    Staff.prototype.setName = function (fistName) {
        this.name = fistName;
    };
    Staff.prototype.setSex = function (sex) {
        this.sex = sex;
    };
    Staff.prototype.setDateOfBirth = function (dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    };
    Staff.prototype.setPhoneNumber = function (phoneNumber) {
        this.phoneNumber = phoneNumber;
    };
    Staff.prototype.setAddress = function (address) {
        this.address = address;
    };
    Staff.prototype.setGroup = function (group) {
        this.group = group;
    };
    return Staff;
}());
exports.Staff = Staff;
