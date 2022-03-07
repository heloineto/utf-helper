import { UserDataContext } from '@lib/context';
import { useFirestoreOperations } from '@lib/hooks';
import { useContext } from 'react';

type Props = {
  campus: string;
  course: string;
};

const SubjectsSelectedClasses = ({ campus, course }: Props) => {
  const { userDetails } = useContext(UserDataContext);
  const { update: updateUserDetails } = useFirestoreOperations();

  const selectedClasses = userDetails?.classes?.[campus]?.[course];

  console.log(selectedClasses);

  return null;
};

export default SubjectsSelectedClasses;
