import { createContext, useState, useEffect, useMemo } from 'react';

import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase/firebase';

type SignInCheck = {
  user: User | null;
  checked: boolean;
};

export const AuthContext = createContext<SignInCheck>({ user: null, checked: false });

interface IAuthProvider {
  children?: React.ReactElement | string;
}

export function AuthProvider({ children = '' }: IAuthProvider) {
  const [user, setUser] = useState<User | null>(null);
  const [checked, setChecked] = useState(false);

  const status = useMemo(
    () => ({
      user,
      checked,
    }),
    [user, checked]
  );

  useEffect(() => {
    onAuthStateChanged(auth, (us) => {
      setUser(us);
      setChecked(true);
    });
  }, []);

  return <AuthContext.Provider value={status}>{children}</AuthContext.Provider>;
}
