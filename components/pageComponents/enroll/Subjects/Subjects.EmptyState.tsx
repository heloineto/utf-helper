import { useState } from 'react';
import EmptyState from '@components/elements/feedback/EmptyState';
import { FileX } from 'phosphor-react';

type Props = {};

const SubjectsEmptyState = (props: Props) => {
  const [campusDialogOpen, setCampusDialogOpen] = useState(false);

  return (
    <>
      <EmptyState
        className="h-full"
        title="Nenhuma Matéria para esse Curso"
        subtitle="No nosso sistema"
        Icon={FileX}
      ></EmptyState>
    </>
  );
};

export default SubjectsEmptyState;
