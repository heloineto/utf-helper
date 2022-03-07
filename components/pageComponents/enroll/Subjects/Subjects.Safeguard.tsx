import { useState } from 'react';
import EmptyState from '@components/elements/feedback/EmptyState';
import { GraduationCap } from 'phosphor-react';
import PrimaryButton from '@components/elements/buttons/PrimaryButton';
import CustomDialog from '@components/elements/modals/CustomDialog';
import CampusForm from '@components/elements/forms/CampusForm';

type Props = {};

const SubjectsSafeguard = (props: Props) => {
  const [campusDialogOpen, setCampusDialogOpen] = useState(false);

  return (
    <>
      <EmptyState
        className="h-full"
        title="Selecione o Campus e Curso"
        subtitle="Para ver a lista de matérias"
        Icon={GraduationCap}
      >
        <PrimaryButton className="w-40 mt-5" onClick={() => setCampusDialogOpen(true)}>
          Selecionar
        </PrimaryButton>
      </EmptyState>
      <CustomDialog open={campusDialogOpen} onClose={() => setCampusDialogOpen(false)}>
        <CampusForm afterSubmit={() => setCampusDialogOpen(false)} />
      </CustomDialog>
    </>
  );
};

export default SubjectsSafeguard;
