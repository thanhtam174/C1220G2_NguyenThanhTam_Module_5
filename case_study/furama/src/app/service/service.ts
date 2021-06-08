export class Service {
  code: string;
  name: string;
  standard: string;
  area: number;
  poolArea: number;
  numberOfFloor: number;
  maxOfPeople: number;
  description: string;
  status: string;
  cost: number;
  serviceType: string;
  rentType: string;


  constructor(code: string, name: string, standard: string, area: number, poolArea: number, numberOfFloor: number, maxOfPeople: number, description: string, status: string, cost: number, serviceType: string, rentType: string) {
    this.code = code;
    this.name = name;
    this.standard = standard;
    this.area = area;
    this.poolArea = poolArea;
    this.numberOfFloor = numberOfFloor;
    this.maxOfPeople = maxOfPeople;
    this.description = description;
    this.status = status;
    this.cost = cost;
    this.serviceType = serviceType;
    this.rentType = rentType;
  }
}
