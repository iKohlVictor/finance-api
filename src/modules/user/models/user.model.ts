import { UserEmail } from './user-email.model';
import { UserPassword } from './user-password.model';
import { UserPhoneNumber } from './user-phone-number.model';

export class User {
  id: number;
  name: string;
  lastName: string;
  phoneNumber: string;
  password: string;
  email: string;

  constructor(data: {
    name: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    password: string;
  }) {
    this.name = data.name;
    this.email = new UserEmail(data.email).email;
    this.password = new UserPassword(data.password).password;
    this.phoneNumber = new UserPhoneNumber(data.phoneNumber).phoneNumber;
    this.lastName = data.lastName;
  }
}
