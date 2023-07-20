import { FirebaseError } from 'firebase/app';
import { User } from 'firebase/auth';
import { authSubmit } from './authSubmit';

describe('authSubmit', () => {
  it('returns an error if user does exist', async () => {
    const data = {
      code: '',
    };

    try {
      await authSubmit({
        isSignIn: false,
        email: 'test@gmail.com',
        password: 'test_user',
      });
    } catch (error) {
      const typedError = error as FirebaseError;
      data.code = typedError.code;
    }

    expect(data.code).toMatch('auth/email-already-in-use');
  });

  it('returns a user instance if data is correct', async () => {
    const email = 'test@gmail.com';
    const data = (await authSubmit({
      isSignIn: true,
      email,
      password: 'test_user',
    })) as User;
    expect(data.email).toMatch(email);
  });
});
