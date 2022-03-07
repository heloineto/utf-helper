import { useCampuses } from '@lib/hooks';
import { useSnackbar } from 'notistack';
import { Fragment } from 'react';
import ReviewDialogAccordion from './ReviewDialog.Accordion';

type Props = {
  classes: ClassMap<ClassObject>;
};

const ReviewClasses = ({ classes }: Props) => {
  const campuses = useCampuses();
  const { enqueueSnackbar } = useSnackbar();

  const copyText = (str: string) => {
    navigator.clipboard.writeText(str);
    enqueueSnackbar('Copiado para a área de transferência', {
      variant: 'success',
      anchorOrigin: {
        horizontal: 'center',
        vertical: 'bottom',
      },
      autoHideDuration: 2000,
    });
  };

  return (
    <>
      {Object.entries(classes).map(([campusKey, campus]) => (
        <ReviewDialogAccordion key={campusKey} title={campuses[campusKey].label}>
          {Object.entries(campus).map(([courseKey, course]) => (
            <ReviewDialogAccordion
              key={courseKey}
              title={campuses[campusKey].courses[courseKey].label}
              titleProps={{ className: 'text-base' }}
            >
              {Object.entries(course).map(([subjectKey, subject]) => (
                <ul
                  key={subjectKey}
                  role="list"
                  className="rounded-md divide-y divide-slate-200 dark:divide-slate-700"
                >
                  {Object.entries(subject).map(([classKey, classObject]) => (
                    <li
                      key={classKey}
                      className="px-8 py-5 flex items-center justify-between text-sm"
                    >
                      <div className="w-0 flex-1 flex items-center">
                        <span className="flex-1 w-0 truncate">
                          {classObject.subjectName}
                        </span>
                      </div>
                      <div className="flex-shrink-0 flex space-x-4">
                        <button
                          type="button"
                          className="p-1.5 bg-white dark:bg-slate-700 rounded-md font-medium text-sky-600 dark:text-sky-400 hover:text-sky-500 dark:hover:text-sky-300 focus:outline-none dark:focus:ring-offset-slate-900 focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                          onClick={() => copyText(classObject.subjectCode)}
                        >
                          {classObject.subjectCode}
                        </button>
                        <span className="p-1.5 text-slate-300">|</span>
                        <button
                          type="button"
                          className="p-1.5 bg-white dark:bg-slate-700 rounded-md font-medium text-sky-600 dark:text-sky-400 hover:text-sky-500 dark:hover:text-sky-300 focus:outline-none dark:focus:ring-offset-slate-900 focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                          onClick={() => copyText(classObject.code)}
                        >
                          {classObject.code}
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              ))}
            </ReviewDialogAccordion>
          ))}
        </ReviewDialogAccordion>
      ))}
    </>
  );
};

export default ReviewClasses;
