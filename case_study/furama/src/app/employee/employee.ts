export class Employee {
  code: string;
  name: string;
  birthday: string;
  idCard: string;
  email: string;
  gender: string;
  phone: string;
  address: string;
  position: string;
  educationDegree: string;
  division: string;


  constructor(code: string, name: string, birthday: string, idCard: string, email: string, gender: string, phone: string, address: string, position: string, educationDegree: string, division: string) {
    this.code = code;
    this.name = name;
    this.birthday = birthday;
    this.idCard = idCard;
    this.email = email;
    this.gender = gender;
    this.phone = phone;
    this.address = address;
    this.position = position;
    this.educationDegree = educationDegree;
    this.division = division;
  }
}
