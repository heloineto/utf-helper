import { Fragment, useState } from 'react';
import LessonCell from './LessonCell';
import ClassDialog from '@components/elements/modals/ClassDialog';

interface Props extends ComponentProps<'div'> {
  classObject: ClassObject;
  campus: string;
  course: string;
}

const LessonCells = ({ classObject, campus, course, ...divProps }: Props) => {
  const [classDialogOpen, setClassDialogOpen] = useState(false);

  return (
    <>
      {/* {classObject.scheduleCells &&
        Object.entries(classObject.scheduleCells).map(
          ([dayCode, cellInfo]) =>
            dayCode && (
              <Fragment key={dayCode}>
                {cellInfo.map(({ startTimeCode, length }) => (
                  <LessonCell
                    key={startTimeCode}
                    classObject={classObject}
                    dayCode={dayCode}
                    timeCode={startTimeCode}
                    length={length}
                    onClick={() => setClassDialogOpen(true)}
                    {...divProps}
                  />
                ))}
              </Fragment>
            )
        )}

      <ClassDialog
        campus={campus}
        course={course}
        classObject={classObject}
        open={classDialogOpen}
        onClose={() => setClassDialogOpen(false)}
      /> */}
    </>
  );
};

export default LessonCells;
