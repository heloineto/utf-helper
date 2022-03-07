import { Fragment, useState } from 'react';
import ClassCell from './ClassCell';
import ClassDialog from '../../../elements/modals/ClassDialog';
import useCellsInfo from './lib/hooks/useCellsInfo';

interface Props extends ComponentProps<'div'> {
  classObject: ClassObject;
}

const ClassCells = ({ classObject, ...divProps }: Props) => {
  const [classDialogOpen, setClassDialogOpen] = useState(false);

  const cellsInfo = useCellsInfo(classObject);

  console.log(cellsInfo);

  return (
    <>
      {Object.entries(cellsInfo).map(([dayCode, cellInfo]) => (
        <Fragment key={dayCode}>
          {cellInfo.map(({ startTimeCode, length }) => (
            <ClassCell
              key={startTimeCode}
              classObject={classObject}
              dayCode={dayCode}
              timeCode={startTimeCode}
              length={length}
            />
          ))}
        </Fragment>
      ))}

      <ClassDialog
        classObject={classObject}
        open={classDialogOpen}
        onClose={() => setClassDialogOpen(false)}
      />
    </>
  );
};

export default ClassCells;
