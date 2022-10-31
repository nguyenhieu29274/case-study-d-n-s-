"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffManager = void 0;
var readlineSync = require("readline-sync");
var StaffManager = /** @class */ (function () {
    function StaffManager() {
    }
    StaffManager.add = function (staff) {
        this.staff.push(staff);
    };
    StaffManager.show = function () {
        return this.staff;
    };
    StaffManager.totalStaff = function () {
        return this.staff.length;
    };
    StaffManager.shareCode = function (code) {
        var codes = [];
        for (var i = 0; i < this.staff.length; i++) {
            if (code == this.staff[i].getcode()) {
                codes.push(this.staff[i]);
            }
            else {
                console.log('khong tim thay');
            }
        }
        console.table(codes);
    };
    // static shareCode(code: string): void {
    //
    //     let codes: Staff[] = [];
    //     for (let i = 0; i < this.staff.length; i++) {
    //         if (code == this.staff[i].getcode()) {
    //             codes.push(this.staff[i]);
    //         }
    //     }
    //     console.table(codes);
    // }
    StaffManager.shareGroup = function (group) {
        var Group = [];
        for (var i = 0; i < this.staff.length; i++) {
            if (group == this.staff[i].getGroup()) {
                Group.push(this.staff[i]);
            }
        }
        console.table(Group);
    };
    StaffManager.deleteStaff = function () {
        var checkCodeDelete = false;
        while (!checkCodeDelete) {
            var idDelete = readlineSync.question('nhap code:  ');
            for (var i = 0; i < StaffManager.totalStaff(); i++) {
                if (StaffManager.staff[i].getcode() == idDelete) {
                    this.staff.splice(i, 1);
                    checkCodeDelete = true;
                    break;
                }
            }
            console.log('code khong dung');
        }
    };
    StaffManager.checkindex = function (code) {
        for (var i = 0; i < this.staff.length; i++) {
            if (this.staff[i].code == code) {
                return i;
            }
        }
        return -1;
    };
    StaffManager.StaffEdit = function () {
        var code = +readlineSync.question('nhap code can tim:   ');
        var index = this.checkindex(code);
        if (index >= 0) {
            var names = readlineSync.question('nhap ten moi:   ');
            var sex = readlineSync.question('nhap gioi tinh:   ');
            var dateofbirth = readlineSync.question('nhap ngay, thang, nam sinh:   ');
            var phoneNumber = readlineSync.question('nhap sdt:   ');
            var address = readlineSync.question('nhap dia chi:   ');
            var group = readlineSync.question('nhap group:   ');
            this.staff[index].setName(names);
            this.staff[index].setSex(sex);
            this.staff[index].setDateOfBirth(dateofbirth);
            this.staff[index].setPhoneNumber(phoneNumber);
            this.staff[index].setAddress(address);
            this.staff[index].setGroup(group);
            console.log('da thay doi thanh cong.');
        }
        else {
            console.log('khong tim thay id.');
        }
    };
    StaffManager.staff = [];
    return StaffManager;
}());
exports.StaffManager = StaffManager;
