import {Staff} from "./Model/Staff";
import {StaffManager} from "./Model/StaffManager";
import * as readlineSync from 'readline-sync';

let a = new Staff('11S2', 'name', 'nam', '1', 1, 'ha noi', 'to 1');
let a1 = new Staff('2F33', 'name1', 'nam', '2', 123412134, 'thai binh', 'to 1');
let a3 = new Staff('34A3', 'name2', 'nam', '3', 13234234, 'hai phong', 'to2');
let a2 = new Staff('2S4', 'name3', 'nam', '4', 1234234, 'nam dinh', 'to 3');
let a4 = new Staff('222', 'name', 'nam', '1', 1, 'ha noi', 'to 2');
let a5 = new Staff('12S', 'name1', 'nam', '2', 123412134, 'thai binh', 'to 2');
let a6 = new Staff('D22', 'name2', 'nam', '3', 13234234, 'hai phong', 'to 1');
let a7 = new Staff('102', 'name3', 'nam', '4', 1234234, 'nam dinh', 'to 3');
StaffManager.add(a);
StaffManager.add(a1);
StaffManager.add(a2);
StaffManager.add(a3);
StaffManager.add(a4);
StaffManager.add(a5);
StaffManager.add(a6);
StaffManager.add(a7);

// console.log(StaffManager.show())
// console.log(StaffManager.totalStaff())
// console.log(StaffManager.shareName('name1'))
// console.log(StaffManager.sharePosition('nhan vien'))
console.log(`dang co ${StaffManager.totalStaff()} nhan su.`)

let isExist = false;

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
    menu()
    let number = +readlineSync.question('chon chuc nang:  ');
    switch (number) {
        case 1:
            console.table(StaffManager.show());
            console.log(`dang co ${StaffManager.totalStaff()} nhan su.`);
            break;

        case 2:
            let codes = readlineSync.question('Nhap ma nv can tim:  ');
            StaffManager.shareCode(codes);
            break;

        case 3:
            let group = readlineSync.question('nhap group can tim:  ');
            StaffManager.shareGroup(group);
            break;

        case 4:
            StaffManager.deleteStaff();
            break;

        case 5:
            let code = readlineSync.question('Nhap ma nv:  ');
            let name = readlineSync.question('Nhap name:  ');
            let sex = readlineSync.question('Nhap gioi tinh:  ');
            let dateOfBirth = readlineSync.question('Nhap ngay, thang, nam sinh(dd/mm/yy):  ');
            let phoneNumber = readlineSync.question('Nhap sdt:  ');
            let address = readlineSync.question('Nhap dia chi:  ');
            let position = readlineSync.question('Nhap group  ');
            let staff = new Staff(code, name, sex, dateOfBirth, phoneNumber, address, position);

            try {
                StaffManager.add(staff);
            } catch (e) {
                console.log(e.message);
            }
            break;

        case 6:

            menu1()
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
    let flag = false;
    while (!flag) {
        menuEdit()
        let number = +readlineSync.question('chon chuc nang:  ');
        switch (number) {
            case 1:
                StaffManager.StaffEdit();
            case 2:
                StaffManager.editName();
                break;
            case 3:
                StaffManager.editSex();
                break;
            case 4:
                StaffManager.editDateOfBirth();
                break;
            case 5:
                StaffManager.editPhoneNumber();
                break;
            case 6:
                StaffManager.editAdress();
                break;
            case 7:
                StaffManager.editgroup();
                break;
            case 0:
                flag = true;
                break;
        }
    }
}






