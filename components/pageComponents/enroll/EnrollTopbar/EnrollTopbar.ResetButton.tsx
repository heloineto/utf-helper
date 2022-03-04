import { TrashIcon } from '@heroicons/react/outline';
import { UserDataContext } from '@lib/context';
import { IconButton, Tooltip } from '@mui/material';
import { useContext, useState } from 'react';
import ActionDialog from '@components/modals/ActionDialog';

type Props = {};

const EnrollTopbarResetButton = (props: Props) => {
  const { setSchedule, setSelectedClasses } = useContext(UserDataContext);
  const [resetDialogOpen, setResetDialogOpen] = useState(false);

  return (
    <>
      <Tooltip title="Limpar Cronograma" arrow>
        <IconButton className="group" onClick={() => setResetDialogOpen(true)}>
          <TrashIcon className="h-6 w-auto group-hover:text-slate-600 dark:group-hover:text-slate-300 dark:text-slate-400" />
        </IconButton>
      </Tooltip>
      <ActionDialog
        open={resetDialogOpen}
        onClose={() => setResetDialogOpen(false)}
        variant="warning"
        title="Limpar o Cronograma"
        subtitle="Todas as matérias seram removidas e o cronograma voltará para o estado inicial."
        actionButtons={[
          {
            className:
              'w-full border-red-500 text-red-500 bg-red-100 hover:bg-red-200 hover:border-red-600 dark:bg-red-600 dark:text-red-200 dark:hover:bg-red-700 dark:border-transparent',
            variant: 'outlined',
            label: 'Limpar',
            onClick: () => {
              setSelectedClasses?.({});
              setSchedule?.({
                M1: {
                  start: '07h30',
                  end: '08h20',
                  days: { 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
                },
                M2: {
                  start: '08h20',
                  end: '09h10',
                  days: { 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
                },
                M3: {
                  start: '09h10',
                  end: '10h00',
                  days: { 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
                },
                M4: {
                  start: '10h20',
                  end: '11h10',
                  days: { 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
                },
                M5: {
                  start: '11h10',
                  end: '12h00',
                  days: { 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
                },
                M6: {
                  start: '12h00',
                  end: '12h50',
                  days: { 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
                },
                T1: {
                  start: '13h00',
                  end: '13h50',
                  days: { 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
                },
                T2: {
                  start: '13h50',
                  end: '14h40',
                  days: { 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
                },
                T3: {
                  start: '14h40',
                  end: '15h30',
                  days: { 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
                },
                T4: {
                  start: '15h50',
                  end: '16h40',
                  days: { 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
                },
                T5: {
                  start: '16h40',
                  end: '17h30',
                  days: { 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
                },
                T6: {
                  start: '17h30',
                  end: '18h20',
                  days: { 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
                },
                N1: {
                  start: '18h40',
                  end: '19h30',
                  days: { 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
                },
                N2: {
                  start: '19h30',
                  end: '20h20',
                  days: { 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
                },
                N3: {
                  start: '20h20',
                  end: '21h10',
                  days: { 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
                },
                N4: {
                  start: '21h20',
                  end: '22h10',
                  days: { 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
                },
                N5: {
                  start: '22h10',
                  end: '23h00',
                  days: { 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
                },
              });
              setResetDialogOpen(false);
            },
          },
          {
            className:
              'border-slate-500 !text-slate-500 bg-slate-100 hover:bg-slate-200 hover:border-slate-600 dark:bg-slate-600 dark:!text-slate-200 dark:hover:bg-slate-700 dark:border-transparent',
            label: 'Cancelar',
            variant: 'outlined',
            color: 'inherit',
            onClick: () => setResetDialogOpen(false),
          },
        ]}
      />
    </>
  );
};

{
  /* <Button
className="w-1/4 border-red-500 text-red-500 bg-red-100 hover:bg-red-200 hover:border-red-600 dark:bg-red-600 dark:text-red-200 dark:hover:bg-red-700 dark:border-transparent"
variant="outlined"
onClick={onClose as any}
>
Remover
</Button>
<Button
className="w-1/4 border-sky-500 text-sky-500 bg-sky-100 hover:bg-sky-200 hover:border-sky-600 dark:bg-sky-600 dark:text-sky-200 dark:hover:bg-sky-700 dark:border-transparent"
variant="outlined"
onClick={onClose as any}
type="submit"
>
Ok
</Button> */
}

export default EnrollTopbarResetButton;
