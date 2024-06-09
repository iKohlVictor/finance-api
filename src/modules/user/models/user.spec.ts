import { UserEmail } from './user-email.model';
import { User } from './user.model';

describe('user email create', () => {
  test('should return error when create user because not pass password', () => {
    expect(() => {
      return new UserEmail();
    }).toThrow();
  });
  test('should return error when create user because pass empty email', () => {
    expect(() => {
      return new UserEmail('');
    }).toThrow();
  });

  test('should return error when create user because pass invalid email', () => {
    expect(() => {
      return new UserEmail('abacaxi');
    }).toThrow();
  });

  test('should return sucess to create email', () => {
    const userEmail = new UserEmail('ian@gmail.com');
    expect(userEmail).toEqual({
      email: 'ian@gmail.com',
    });
  });
});
describe('user model', () => {
  test('should return user created', () => {
    const user = new User({
      name: 'Ian',
      password: 'abacaxi123',
      email: 'ian@gmail.com',
      phoneNumber: '(38) 99943-5044',
      lastName: 'Kohl',
    });

    expect(user).toEqual({
      name: 'Ian',
      password: 'abacaxi123',
      email: 'ian@gmail.com',
      phoneNumber: '38999435044',
      lastName: 'Kohl',
    });
  });

  test('should return error because invalid password', () => {
    expect(() => {
      const user = new User({
        name: 'Ian',
        password: '123',
        email: 'ian@gmail.com',
        phoneNumber: '38999435044',
        lastName: 'Kohl',
      });
    }).toThrow();
  });

  test('should return error because invalid phone number', () => {
    expect(() => {
      const user = new User({
        name: 'Ian',
        password: '123',
        email: 'ian@gmail.com',
        phoneNumber: '3899943504',
        lastName: 'Kohl',
      });
    }).toThrow();
  });

  test('should return error because invalid phone number', () => {
    expect(() => {
      const user = new User({
        name: 'Ian',
        password: '123',
        email: 'ian@gmail.com',
        phoneNumber: 'xxxxxxxxx',
        lastName: 'Kohl',
      });
    }).toThrow();
  });
});
