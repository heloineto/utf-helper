import { UserDataContext } from '@lib/context';
import { useFirestoreOperations, useTimeCodes } from '@lib/hooks';
import { merge } from 'lodash';
import { useContext } from 'react';

type Props = {
  campus: string;
  course: string;
};

const SubjectsSelectedClasses = ({ campus, course }: Props) => {
  const { userDetails } = useContext(UserDataContext);
  const { update: updateUserDetails } = useFirestoreOperations();
  const timeCodes = useTimeCodes();

  const selectedSubjects = userDetails?.classes?.[campus]?.[course];

  if (!selectedSubjects) return;

  Object.values(selectedSubjects).map((selectedSubject) =>
    Object.values(selectedSubject).map((classeObjs) => {})
  );

  return null;
};

export default SubjectsSelectedClasses;
