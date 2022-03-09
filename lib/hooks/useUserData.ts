import { useEffect, useState } from 'react';
import { auth, firestore } from '@lib/firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

const useUserDataNew = () => {
  const [user, _loading] = useAuthState(auth);
  const [loading, setLoading] = useState(true);
  const [userDetails, setUserDetails] = useState<UserDetailsWithRef | null>(null);

  useEffect(() => {
    let unsubscribe;

    if (user) {
      const userRef = doc(firestore, `users/${user.uid}`);

      unsubscribe = onSnapshot(userRef, (userDoc) => {
        const userDocData = userDoc.data();

        if (!userDocData) return;

        setUserDetails({ ...userDocData, ref: userRef });
      });
    } else {
      setUserDetails(null);
    }

    return unsubscribe;
  }, [user]);

  useEffect(() => {
    // if(_loading) setLoading(true);
    //   else if((!userDetails && user) || (userDetails && !user)) setLoading(true);
    //   else setLoading(false);
    //
    // const d = !!userDetails;
    // const u = !!user;
    // const l = !!_loading;
    // setLoading((!d && u) || (d && !u) || l);

    setLoading((!userDetails && !!user) || (!!userDetails && !user) || !!_loading);
  }, [user, _loading, userDetails]);

  return { user, loading, userDetails };
};

export default useUserDataNew;
