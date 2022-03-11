import { useEffect, useState } from 'react';
import { QueryConstraint, collection, query } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { firestore } from '@lib/firebase';
import { isEmpty } from 'lodash';

const useCollectionArray = <T>(path: string, ...queryConstraints: QueryConstraint[]) => {
  const colRef = collection(firestore, path);
  const colQuery = query(colRef, ...queryConstraints);

  const [colQuerySnapshot, loading, error] = useCollection(colQuery);

  let _collection: (T & { ref: DocumentReference })[] | undefined;

  if (colQuerySnapshot !== undefined) {
    _collection = colQuerySnapshot.docs.map((colQueryDocSnapshot) => {
      const data = colQueryDocSnapshot.data() as T;

      return {
        ...data,
        ref: colQueryDocSnapshot.ref,
      };
    });
  }

  return [_collection, loading, error] as [
    typeof _collection,
    typeof loading,
    typeof error
  ];
};

export default useCollectionArray;
