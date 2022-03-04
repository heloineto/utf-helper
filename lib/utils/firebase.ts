import { firestore } from '@lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

export const docExists = async (docPath: string) => {
  const currRef = doc(firestore, docPath);
  return (await getDoc(currRef)).exists();
};
