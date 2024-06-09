export class UserPassword {
  password: string;

  constructor(passwordToCreate: string) {
    UserPassword.isValid(passwordToCreate);
    this.password = passwordToCreate;
  }

  static isValid(password: string) {
    const minLength = 8;
    if (password.length < minLength) {
      throw Error(`password must be at least ${minLength} characters long`);
    }
  }
}
