import {Staff} from "./Staff";
import * as readlineSync from 'readline-sync'

export class StaffManager {
    static staff: Staff[] = [];

    constructor() {
    }

    static add(staff: Staff): void {
        this.staff.push(staff);
    }

    static show(): Staff[] {
        return this.staff;
    }

    static totalStaff(): number {
        return this.staff.length;
    }

    static shareCode(code: string): void {

        let codes: Staff[] = [];
        for (let i = 0; i < this.staff.length; i++) {
            if (code == this.staff[i].getcode()) {
                codes.push(this.staff[i]);
            } else {
                console.log('khong tim thay')
            }
        }
        console.table(codes);
    }

    static shareGroup(group: string): void {

        let Group: Staff[] = [];
        for (let i = 0; i < this.staff.length; i++) {
            if (group == this.staff[i].getGroup()) {
                Group.push(this.staff[i]);
            }
        }
        console.table(Group);
    }

    static deleteStaff() {
        let codeDelete = readlineSync.question('nhap ma nv');
        let index = this.checkindex(codeDelete);
        if (index == -1) {
            console.log('id khong dung')
        } else {
            this.staff.splice(index, 1);
            console.log('xoa thanh cong')
        }
    }

    static checkindex(code) {

        for (let i = 0; i < this.staff.length; i++) {
            if (this.staff[i].code == code) {
                return i;
            }
        }
        return -1;
    }

    static StaffEdit() {
        let code = readlineSync.question('nhap code can tim:   ');
        let index = this.checkindex(code);
        if (index == -1) {
            console.log('khong tim thay id.')
        } else {
            let names = readlineSync.question('nhap ten moi:   ');
            this.staff[index].setName(names);
            let sex = readlineSync.question('nhap gioi tinh:   ');
            this.staff[index].setSex(sex);
            let dateofbirth = readlineSync.question('nhap ngay, thang, nam sinh:   ');
            this.staff[index].setDateOfBirth(dateofbirth);
            let phoneNumber = readlineSync.question('nhap sdt:   ');
            let address = readlineSync.question('nhap dia chi:   ');
            let group = readlineSync.question('nhap group:   ');
            this.staff[index].setPhoneNumber(phoneNumber);
            this.staff[index].setAddress(address);
            this.staff[index].setGroup(group);
            console.log('da thay doi thanh cong.');
        }
    }

    static editName() {
        let code = readlineSync.question('nhap code can tim:   ');
        let index = this.checkindex(code);
        if (index == -1) {
            console.log('khong tim thay id.')
        } else {
            let names = readlineSync.question('nhap ten moi:   ');
            this.staff[index].setName(names);
            console.log('da thay doi thanh cong.');
        }
    }

    static editSex() {
        let code = readlineSync.question('nhap code can tim:   ');
        let index = this.checkindex(code);
        if (index == -1) {
            console.log('khong tim thay id.')
        } else {
            let sex = readlineSync.question('nhap gioi tinh:   ');
            this.staff[index].setSex(sex);
            console.log('da thay doi thanh cong.');
        }
    }

    static editDateOfBirth() {
        let code = readlineSync.question('nhap code can tim:   ');
        let index = this.checkindex(code);
        if (index == -1) {
            console.log('khong tim thay id.')
        } else {
            let dateofbirth = readlineSync.question('nhap ngay, thang, nam sinh:   ');
            this.staff[index].setDateOfBirth(dateofbirth);
            console.log('da thay doi thanh cong.');
        }
    }

    static editPhoneNumber() {
        let code = readlineSync.question('nhap code can tim:   ');
        let index = this.checkindex(code);
        if (index == -1) {
            console.log('khong tim thay id.')
        } else {
            let phoneNumber = readlineSync.question('nhap sdt:   ');
            this.staff[index].setPhoneNumber(phoneNumber);
            console.log('da thay doi thanh cong.');
        }
    }

    static editAdress() {
        let code = readlineSync.question('nhap code can tim:   ');
        let index = this.checkindex(code);
        if (index == -1) {
            console.log('khong tim thay id.')
        } else {
            let address = readlineSync.question('nhap dia chi:   ');
            this.staff[index].setAddress(address);
            console.log('da thay doi thanh cong.');
        }

    }

    static editgroup() {
        let code = readlineSync.question('nhap code can tim:   ');
        let index = this.checkindex(code);
        if (index == -1) {
            console.log('khong tim thay id.')
        } else {
            let group = readlineSync.question('nhap group:   ');
            this.staff[index].setGroup(group);
            console.log('da thay doi thanh cong.');
        }
    }
}
