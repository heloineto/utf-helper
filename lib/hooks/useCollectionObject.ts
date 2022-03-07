import { useEffect, useState } from 'react';
import { QueryConstraint, collection, query } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { firestore } from '@lib/firebase';
import { isEmpty } from 'lodash';

const useCollectionObject = <T>(path: string, ...queryConstraints: QueryConstraint[]) => {
  const colRef = collection(firestore, path);
  const colQuery = query(colRef, ...queryConstraints);

  const [colQuerySnapshot, loading, error] = useCollection(colQuery);

  type Col =
    | {
        [key: string]: T & { ref: FirebaseRef };
      }
    | undefined;

  let col: Col = undefined;

  if (colQuerySnapshot !== undefined) {
    const col2: NonNullable<Col> = {};

    colQuerySnapshot.docs.map((colQueryDocSnapshot) => {
      const data = colQueryDocSnapshot.data() as T;

      col2[colQueryDocSnapshot.id] = {
        ...data,
        ref: colQueryDocSnapshot.ref,
      };
    });

    col = col2;
  }

  return [col, loading, error] as [typeof col, typeof loading, typeof error];
};

export default useCollectionObject;
