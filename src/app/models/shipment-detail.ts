export class ShipmentDetail {
  name: string;
  address: string;
  city: string;
  state: string;
  pin: number;
  mobileNumber: string;
  landline: string;
  orderStatus: string;

  constructor(
    name: string,
    address: string,
    city: string,
    state: string,
    pin: number,
    mobileNumber: string,
    landline: string,
    orderStatus: string
  ) {
    this.name = name;
    this.address = address;
    this.city = city;
    this.state = state;
    this.pin = pin;
    this.mobileNumber = mobileNumber;
    this.landline = landline;
    this.orderStatus = orderStatus;
  }
}
