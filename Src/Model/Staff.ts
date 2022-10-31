export class Staff {
     code:string;
     name:string;
     sex:string;
     dateOfBirth:string;
     phoneNumber:number;
     address:string;
     group:string;

    constructor(code:string,name:string,sex:string,dateOfBirth:string,phoneNumber:number,address:string,group:string) {
        this.code=code;
        this.name=name;
        this.sex=sex;
        this.dateOfBirth=dateOfBirth;
        this.phoneNumber=phoneNumber;
        this.address=address;
        this.group=group

    }


    getcode():string {
        return this.code
    }
    getName(): string{
        return this.name
    }
    getSex():string {
        return this.sex
    }
    getDateofbirth():string{
        return this.dateOfBirth
    }
    getPhoneNumber():number {
        return this.phoneNumber
    }
    getAddress():string {
        return this.address
    }
    getGroup():string{
        return this.group
    }

    setCode(code:string):void {
        this.code=code
    }
    setName(fistName:string):void {
        this.name=fistName
    }
    setSex(sex:string):void {
        this.sex=sex
    }
    setDateOfBirth(dateOfBirth:string){
        this.dateOfBirth=dateOfBirth
    }
    setPhoneNumber(phoneNumber:number):void {
        this.phoneNumber=phoneNumber
    }
    setAddress(address:string):void{
        this.address=address
    }
    setGroup(group:string):void {
        this.group=group
    }

}
