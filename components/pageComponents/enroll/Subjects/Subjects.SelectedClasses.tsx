import { UserDataContext } from '@lib/context';
import { Fragment, useContext } from 'react';
import ClassCells from '../ClassCells';

type Props = {
  campus: string;
  course: string;
};

const SubjectsSelectedClasses = ({ campus, course }: Props) => {
  const { userDetails } = useContext(UserDataContext);

  const selectedSubjects = userDetails?.classes?.[campus]?.[course];

  if (!selectedSubjects) return null;

  return (
    <>
      {Object.entries(selectedSubjects).map(([key, subject]) => (
        <Fragment key={key}>
          {Object.entries(subject).map(([key, classObject]) => (
            <ClassCells
              key={key}
              classObject={classObject}
              campus={campus}
              course={course}
            />
          ))}
        </Fragment>
      ))}
    </>
  );
};

export default SubjectsSelectedClasses;
