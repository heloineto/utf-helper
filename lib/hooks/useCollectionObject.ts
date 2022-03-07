import { QueryConstraint, collection, query } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { firestore } from '@lib/firebase';

const useCollectionObject = <T>(path: string, ...queryConstraints: QueryConstraint[]) => {
  const colRef = collection(firestore, path);
  const colQuery = query(colRef, ...queryConstraints);

  const [colQuerySnapshot, loading, error] = useCollection(colQuery);

  let _collection:
    | {
        [key: string]: T & { ref: DocumentReference };
      }
    | undefined = undefined;

  if (colQuerySnapshot !== undefined) {
    const _collectionObj: {
      [key: string]: T & { ref: DocumentReference };
    } = {};

    colQuerySnapshot.docs.map((colQueryDocSnapshot) => {
      const data = colQueryDocSnapshot.data() as T;

      _collectionObj[colQueryDocSnapshot.id] = {
        ...data,
        ref: colQueryDocSnapshot.ref,
      };
    });

    _collection = _collectionObj;
  }

  return [_collection, loading, error] as [
    typeof _collection,
    typeof loading,
    typeof error
  ];
};

export default useCollectionObject;
