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
        var codeDelete = readlineSync.question('nhap ma nv');
        var index = this.checkindex(codeDelete);
        if (index == -1) {
            console.log('id khong dung');
        }
        else {
            this.staff.splice(index, 1);
            console.log('xoa thanh cong');
        }
    };
    // static deleteStaff(): void {
    //     // let checkCodeDelete = false;
    //     // while (!checkCodeDelete) {
    //         let codeDelete = readlineSync.question('nhap code:  ');
    //         for (let i = 0; i < StaffManager.staff.length; i++) {
    //             if (StaffManager.staff[i].getcode() == codeDelete) {
    //                 this.staff.splice(i, 1);
    //                 // checkCodeDelete = true;
    //                 console.log('xoa thanh cong')
    //                 break;
    //             }
    //
    //         }
    //     console.log('khong dung ma nhan vien');
    //
    StaffManager.checkindex = function (code) {
        for (var i = 0; i < this.staff.length; i++) {
            if (this.staff[i].code == code) {
                return i;
            }
        }
        return -1;
    };
    StaffManager.StaffEdit = function () {
        var code = readlineSync.question('nhap code can tim:   ');
        var index = this.checkindex(code);
        if (index == -1) {
            console.log('khong tim thay id.');
        }
        else {
            var names = readlineSync.question('nhap ten moi:   ');
            this.staff[index].setName(names);
            var sex = readlineSync.question('nhap gioi tinh:   ');
            this.staff[index].setSex(sex);
            var dateofbirth = readlineSync.question('nhap ngay, thang, nam sinh:   ');
            this.staff[index].setDateOfBirth(dateofbirth);
            var phoneNumber = readlineSync.question('nhap sdt:   ');
            var address = readlineSync.question('nhap dia chi:   ');
            var group = readlineSync.question('nhap group:   ');
            this.staff[index].setPhoneNumber(phoneNumber);
            this.staff[index].setAddress(address);
            this.staff[index].setGroup(group);
            console.log('da thay doi thanh cong.');
        }
    };
    StaffManager.editName = function () {
        var code = readlineSync.question('nhap code can tim:   ');
        var index = this.checkindex(code);
        if (index == -1) {
            console.log('khong tim thay id.');
        }
        else {
            var names = readlineSync.question('nhap ten moi:   ');
            this.staff[index].setName(names);
            console.log('da thay doi thanh cong.');
        }
    };
    StaffManager.editSex = function () {
        var code = readlineSync.question('nhap code can tim:   ');
        var index = this.checkindex(code);
        if (index == -1) {
            console.log('khong tim thay id.');
        }
        else {
            var sex = readlineSync.question('nhap gioi tinh:   ');
            this.staff[index].setSex(sex);
            console.log('da thay doi thanh cong.');
        }
    };
    StaffManager.editDateOfBirth = function () {
        var code = readlineSync.question('nhap code can tim:   ');
        var index = this.checkindex(code);
        if (index == -1) {
            console.log('khong tim thay id.');
        }
        else {
            var dateofbirth = readlineSync.question('nhap ngay, thang, nam sinh:   ');
            this.staff[index].setDateOfBirth(dateofbirth);
            console.log('da thay doi thanh cong.');
        }
    };
    StaffManager.editPhoneNumber = function () {
        var code = readlineSync.question('nhap code can tim:   ');
        var index = this.checkindex(code);
        if (index == -1) {
            console.log('khong tim thay id.');
        }
        else {
            var phoneNumber = readlineSync.question('nhap sdt:   ');
            this.staff[index].setPhoneNumber(phoneNumber);
            console.log('da thay doi thanh cong.');
        }
    };
    StaffManager.editAdress = function () {
        var code = readlineSync.question('nhap code can tim:   ');
        var index = this.checkindex(code);
        if (index == -1) {
            console.log('khong tim thay id.');
        }
        else {
            var address = readlineSync.question('nhap dia chi:   ');
            this.staff[index].setAddress(address);
            console.log('da thay doi thanh cong.');
        }
    };
    StaffManager.editgroup = function () {
        var code = readlineSync.question('nhap code can tim:   ');
        var index = this.checkindex(code);
        if (index == -1) {
            console.log('khong tim thay id.');
        }
        else {
            var group = readlineSync.question('nhap group:   ');
            this.staff[index].setGroup(group);
            console.log('da thay doi thanh cong.');
        }
    };
    StaffManager.staff = [];
    return StaffManager;
}());
exports.StaffManager = StaffManager;
