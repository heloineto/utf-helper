import { useEffect, useState } from 'react';
import { QueryConstraint, collection, query } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { firestore } from '@lib/firebase';
import { isEmpty } from 'lodash';

const useCollectionObject = <T>(path: string, ...queryConstraints: QueryConstraint[]) => {
  const [col, setCol] = useState<{
    [key: string]: (T & { ref: FirebaseRef }) | undefined;
  }>({});
  const [empty, setEmpty] = useState(false);

  const colRef = collection(firestore, path);
  const colQuery = query(colRef, ...queryConstraints);

  const [colQuerySnapshot, loading, error] = useCollection(colQuery);

  useEffect(() => {
    if (!colQuerySnapshot) return;

    const colObject: { [key: string]: T & { ref: FirebaseRef } } = {};

    if (isEmpty(colQuerySnapshot.docs)) {
      setCol(colObject);
      setEmpty(true);
      return;
    }

    colQuerySnapshot.docs.map((colQueryDocSnapshot) => {
      const data = colQueryDocSnapshot.data() as T;

      colObject[colQueryDocSnapshot.id] = {
        ...data,
        ref: colQueryDocSnapshot.ref,
      };
    });

    setCol(colObject);
  }, [colQuerySnapshot]);

  return [col, loading, error, empty] as [
    typeof col,
    typeof loading,
    typeof error,
    typeof empty
  ];
};

export default useCollectionObject;
