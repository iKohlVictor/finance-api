export class UserEmail {
  email!: string;

  constructor(emailToCreate?: string) {
    if (!emailToCreate) {
      throw Error('email is required');
    }
    UserEmail.isValid(emailToCreate);

    this.email = emailToCreate;
  }

  static isValid(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw Error('email is not valid');
    }
  }
}
