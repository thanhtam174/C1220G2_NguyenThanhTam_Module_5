export class Customer {
  code: string;
  name: string;
  birthday: string;
  idCard: string;
  email: string;
  gender: string;
  phone: string;
  address: string;
  typeCustomer: string;

  // tslint:disable-next-line:max-line-length
  constructor(code: string, name: string, birthday: string, idCard: string, email: string, gender: string, phone: string, address: string, typeCustomer: string) {
    this.code = code;
    this.name = name;
    this.birthday = birthday;
    this.idCard = idCard;
    this.email = email;
    this.gender = gender;
    this.phone = phone;
    this.address = address;
    this.typeCustomer = typeCustomer;
  }
}
