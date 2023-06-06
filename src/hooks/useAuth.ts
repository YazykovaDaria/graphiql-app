import { useContext } from 'react';
import { AuthContext } from '../hocs/WithAuthProvider';

export function useAuth() {
  return useContext(AuthContext);
}
