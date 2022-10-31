"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Staff_1 = require("./Model/Staff");
var StaffManager_1 = require("./Model/StaffManager");
var readlineSync = require("readline-sync");
var a = new Staff_1.Staff('11S2', 'name', 'nam', '1', 1, 'ha noi', 'nhan vien');
var a1 = new Staff_1.Staff('2F33', 'name1', 'nam', '2', 123412134, 'thai binh', 'nhan vien');
var a3 = new Staff_1.Staff('34A3', 'name2', 'nam', '3', 13234234, 'hai phong', 'to truong');
var a2 = new Staff_1.Staff('2S4', 'name3', 'nam', '4', 1234234, 'nam dinh', 'pho phong');
var a4 = new Staff_1.Staff('222', 'name', 'nam', '1', 1, 'ha noi', 'nhan vien');
var a5 = new Staff_1.Staff('12S', 'name1', 'nam', '2', 123412134, 'thai binh', 'nhan vien');
var a6 = new Staff_1.Staff('D22', 'name2', 'nam', '3', 13234234, 'hai phong', 'to truong');
var a7 = new Staff_1.Staff('102', 'name3', 'nam', '4', 1234234, 'nam dinh', 'pho phong');
StaffManager_1.StaffManager.add(a);
StaffManager_1.StaffManager.add(a1);
StaffManager_1.StaffManager.add(a2);
StaffManager_1.StaffManager.add(a3);
StaffManager_1.StaffManager.add(a4);
StaffManager_1.StaffManager.add(a5);
StaffManager_1.StaffManager.add(a6);
StaffManager_1.StaffManager.add(a7);
// console.log(StaffManager.show())
// console.log(StaffManager.totalStaff())
// console.log(StaffManager.shareName('name1'))
// console.log(StaffManager.sharePosition('nhan vien'))
console.log("dang co ".concat(StaffManager_1.StaffManager.totalStaff(), " nhan su."));
var isExist = false;
function menu() {
    console.log('1: hien thi danh sach');
    console.log('2: Tim theo ma nv');
    console.log('3: Tim theo group ');
    console.log('4: xoa nhan vien ');
    console.log('5: Them nhan vien ');
    console.log('6: Sua nhan vien ');
    console.log('0: Thoat ');
}
while (!isExist) {
    menu();
    var number = +readlineSync.question('chon chuc nang:  ');
    switch (number) {
        case 1:
            console.table(StaffManager_1.StaffManager.show());
            console.log("dang co ".concat(StaffManager_1.StaffManager.totalStaff(), " nhan su."));
            break;
        case 2:
            var codes = readlineSync.question('Nhap ma nv can tim:  ');
            StaffManager_1.StaffManager.shareCode(codes);
            break;
        case 3:
            var group = readlineSync.question('nhap group can tim:  ');
            StaffManager_1.StaffManager.shareGroup(group);
            break;
        case 4:
            StaffManager_1.StaffManager.deleteStaff();
            break;
        case 5:
            var code = readlineSync.question('Nhap ma nv:  ');
            var name_1 = readlineSync.question('Nhap name:  ');
            var sex = readlineSync.question('Nhap gioi tinh:  ');
            var dateOfBirth = readlineSync.question('Nhap ngay, thang, nam sinh(dd/mm/yy):  ');
            var phoneNumber = readlineSync.question('Nhap sdt:  ');
            var address = readlineSync.question('Nhap dia chi:  ');
            var position = readlineSync.question('Nhap group  ');
            var staff = new Staff_1.Staff(code, name_1, sex, dateOfBirth, phoneNumber, address, position);
            try {
                StaffManager_1.StaffManager.add(staff);
            }
            catch (e) {
                console.log(e.message);
            }
            break;
        case 6:
            //StaffManager.StaffEdit();
            menu1();
            break;
        case 0:
            isExist = true;
            break;
    }
}
function menuEdit() {
    console.log('1.sua ten  ');
    console.log('2.sua gioi tinh  ');
    console.log('3.sua ngay sinh  ');
    console.log('4.sua sdt ');
    console.log('5.sua dia chi ');
    console.log('6.sua group  ');
    console.log('0.thoat');
}
function menu1() {
    var flag = false;
    while (!flag) {
        menuEdit();
        var number = +readlineSync.question('chon chuc nang:  ');
        switch (number) {
            case 1:
                StaffManager_1.StaffManager.editName();
                break;
            case 2:
                StaffManager_1.StaffManager.editSex();
                break;
            case 3:
                StaffManager_1.StaffManager.editDateOfBirth();
                break;
            case 4:
                StaffManager_1.StaffManager.editPhoneNumber();
                break;
            case 5:
                StaffManager_1.StaffManager.editAdress();
                break;
            case 6:
                StaffManager_1.StaffManager.editgroup();
                break;
            case 0:
                flag = true;
                break;
        }
    }
}
