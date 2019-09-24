export class CreditCardDetail {
  creditCardNumber: number;
  cardHolderName: string;
  validTo: Date;
  balance: number;

  constructor(creditCardNumber: number, cardHolderName: string, validTo: Date, balance: number) {
    this.creditCardNumber = creditCardNumber;
    this.cardHolderName = cardHolderName;
    this.validTo = validTo;
    this.balance = balance;
  }
}
