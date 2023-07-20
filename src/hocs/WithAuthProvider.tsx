import { createContext, useState, useEffect, useMemo } from 'react';

import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase/firebase';

type SignInCheck = {
  email: string | null;
  checked: boolean;
};

export const AuthContext = createContext<SignInCheck>({ email: null, checked: false });

interface IAuthProvider {
  children?: React.ReactElement | string;
}

export function WithAuthProvider({ children = '' }: IAuthProvider) {
  const [user, setUser] = useState<User | null>(null);
  const [checked, setChecked] = useState(false);

  const email = user?.email || null;

  const status = useMemo(
    () => ({
      email,
      checked,
    }),
    [email, checked]
  );

  useEffect(() => {
    onAuthStateChanged(auth, (us) => {
      setUser(us);
      setChecked(true);
    });
  }, []);

  return <AuthContext.Provider value={status}>{children}</AuthContext.Provider>;
}
