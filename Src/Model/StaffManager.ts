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
    static shareCode(code:string ): void {

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


    static shareGroup(group: string): void {

        let Group: Staff[] = [];
        for (let i = 0; i < this.staff.length; i++) {
            if (group == this.staff[i].getGroup()) {
                Group.push(this.staff[i]);
            }
        }
        console.table(Group);
    }


    static deleteStaff(): void {
        let checkCodeDelete = false;
        while (!checkCodeDelete) {
            let idDelete = readlineSync.question('nhap code:  ');
            for (let i = 0; i < StaffManager.totalStaff(); i++) {
                if (StaffManager.staff[i].getcode() == idDelete) {
                    this.staff.splice(i, 1);
                    checkCodeDelete = true;
                    break;
                }
            }
            console.log('code khong dung');
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
        let code = +readlineSync.question('nhap code can tim:   ')
        let index = this.checkindex(code);
        if (index >= 0) {
            let names = readlineSync.question('nhap ten moi:   ')
            let sex = readlineSync.question('nhap gioi tinh:   ')
            let dateofbirth = readlineSync.question('nhap ngay, thang, nam sinh:   ')
            let phoneNumber = readlineSync.question('nhap sdt:   ')
            let address = readlineSync.question('nhap dia chi:   ')
            let group = readlineSync.question('nhap group:   ')
            this.staff[index].setName(names)
            this.staff[index].setSex(sex)
            this.staff[index].setDateOfBirth(dateofbirth)
            this.staff[index].setPhoneNumber(phoneNumber)
            this.staff[index].setAddress(address)
            this.staff[index].setGroup(group)
            console.log('da thay doi thanh cong.')
        } else {
            console.log('khong tim thay id.')
        }
    }

}



