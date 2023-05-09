import { FirebaseError } from 'firebase/app';
import {
  setPersistence,
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  User,
} from 'firebase/auth';
import { AuthFormInputs } from 'src/types/AuthFormInputs';
import { auth } from '../firebase/firebase';

export interface AuthSubmit extends AuthFormInputs {
  isSignIn: boolean;
}

export const authSubmit = async ({ isSignIn, email, password }: AuthSubmit) => {
  try {
    let user: User;

    await setPersistence(auth, browserLocalPersistence);
    if (isSignIn) {
      user = (await signInWithEmailAndPassword(auth, email, password)).user;
    } else {
      user = (await createUserWithEmailAndPassword(auth, email, password)).user;
    }

    return user;
  } catch (error) {
    return error as FirebaseError;
  }
};
