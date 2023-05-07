import { FirebaseError } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import type { User } from 'firebase/auth';
import { AuthFormInputs } from 'src/types/AuthFormInputs';

export interface AuthSubmit extends AuthFormInputs {
  isSignIn: boolean;
}

export const authSubmit = async ({ isSignIn, email, password }: AuthSubmit) => {
  const auth = getAuth();

  try {
    let user: User;

    if (isSignIn) {
      user = (await signInWithEmailAndPassword(auth, email, password)).user;
    }
    user = (await createUserWithEmailAndPassword(auth, email, password)).user;

    return user;
  } catch (error) {
    return error as FirebaseError;
  }
};
