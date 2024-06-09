export class UserPhoneNumber {
  phoneNumber: string;

  constructor(phoneNumberToCreate: string) {
    if (!phoneNumberToCreate) {
      throw Error('phone number is required');
    }
    const formatterPhoneNumber =
      UserPhoneNumber.formatterPhoneNumber(phoneNumberToCreate);

    UserPhoneNumber.isValid(formatterPhoneNumber);

    this.phoneNumber = formatterPhoneNumber;
  }

  static formatterPhoneNumber(phoneNumber: string) {
    return phoneNumber.replace(/\D/g, '');
  }

  static isValid(phoneNumber: string) {
    const phoneNumberRegex = /^[0-9]+$/;

    if (!phoneNumberRegex.test(phoneNumber)) {
      throw Error('invalid phone number');
    }
    if (phoneNumber.length !== 11) {
      throw new Error('invalid phone number');
    }
  }
}
