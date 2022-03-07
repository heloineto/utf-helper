import { useEffect, useState } from 'react';
import { QueryConstraint, collection, query } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { firestore } from '@lib/firebase';
import { isEmpty } from 'lodash';

const useCollectionArray = <T>(path: string, ...queryConstraints: QueryConstraint[]) => {
  const [col, setCol] = useState<(T & { ref: FirebaseRef })[]>([]);
  const [empty, setEmpty] = useState(false);

  const colRef = collection(firestore, path);
  const colQuery = query(colRef, ...queryConstraints);

  const [colQuerySnapshot, loading, error] = useCollection(colQuery);

  useEffect(() => {
    if (!colQuerySnapshot) {
      return;
    }

    if (isEmpty(colQuerySnapshot.docs)) {
      setCol([]);
      setEmpty(true);
      return;
    }

    const colArray = colQuerySnapshot.docs.map((colQueryDocSnapshot) => {
      const data = colQueryDocSnapshot.data() as T;

      return {
        ...data,
        ref: colQueryDocSnapshot.ref,
      };
    });

    setCol(colArray);
    setEmpty(false);
  }, [colQuerySnapshot]);

  return [col, loading, error, empty] as [
    typeof col,
    typeof loading,
    typeof error,
    typeof empty
  ];
};

export default useCollectionArray;
