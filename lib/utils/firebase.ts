import { firestore } from '@lib/firebase';
import { doc, getDoc, QueryDocumentSnapshot } from 'firebase/firestore';

export const docExists = async (docPath: string) => {
  const currRef = doc(firestore, docPath);
  return (await getDoc(currRef)).exists();
};

export const converter = <T>() => ({
  toFirestore: (data: T) => data,
  fromFirestore: (snapshot: QueryDocumentSnapshot) => snapshot.data() as T,
});
