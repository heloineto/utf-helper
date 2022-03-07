import { UserDataContext } from '@lib/context';
import { Fragment, useContext } from 'react';
import ClassCells from '../ClassCells';

type Props = {};

const SubjectsSelectedClasses = ({}: Props) => {
  const { userDetails } = useContext(UserDataContext);

  if (!userDetails?.classes) return null;

  return (
    <>
      {Object.entries(userDetails.classes).map(([campusKey, campus]) => (
        <Fragment key={campusKey}>
          {Object.entries(campus).map(([courseKey, course]) => (
            <Fragment key={courseKey}>
              {Object.entries(course).map(([subjectKey, subject]) => (
                <Fragment key={subjectKey}>
                  {Object.entries(subject).map(([classKey, classObject]) => (
                    <ClassCells
                      key={classKey}
                      classObject={classObject}
                      campus={campusKey}
                      course={courseKey}
                    />
                  ))}
                </Fragment>
              ))}
            </Fragment>
          ))}
        </Fragment>
      ))}
    </>
  );
};

export default SubjectsSelectedClasses;
