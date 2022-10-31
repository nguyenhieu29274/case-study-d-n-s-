import {Staff} from "./Model/Staff";
import {StaffManager} from "./Model/StaffManager";
import * as readlineSync from 'readline-sync';

// let a = new Staff(1,'name','nam',1,'ha noi','nhan vien');
// let a1 = new Staff(2,'name1','nam',123412134,'thai binh','nhan vien');
// let a3 = new Staff(3,'name2','nam',13234234,'hai phong','to truong');
// let a2 = new Staff(4,'name3','nam',1234234,'nam dinh','pho phong');
// // StaffManager.add(a);
// StaffManager.add(a1);
// StaffManager.add(a2);
// StaffManager.add(a3);

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
            console.table(StaffManager.shareCode(codes));
            break;

        case 3:
            let Positions = readlineSync.question('nhap group can tim:  ');
            console.table(StaffManager.shareGroup(Positions));
            break;

        case 4:
            console.table(StaffManager.deleteStaff());
            break;

        case 5:
            let code = readlineSync.question('Nhap ma nv:  ');
            let name = readlineSync.question('Nhap name:  ');
            let sex = readlineSync.question('Nhap gioi tinh:  ');
            let dateOfBirth = readlineSync.question('Nhap ngay, thang, nam sinh(dd/mm/yy):  ');
            let phoneNumber = readlineSync.question('Nhap sdt:  ');
            let address = readlineSync.question('Nhap dia chi:  ');
            let position = readlineSync.question('Nhap group  ');
            let staff = new Staff(code, name, sex,dateOfBirth, phoneNumber, address, position);

            try {
                StaffManager.add(staff);
            } catch (e) {
                console.log(e.message);
            }
            break;

        case 6:
            StaffManager.StaffEdit();
            break;

        case 0:
            isExist = true;
            break;
    }
}






