import { Button, Dialog, IconButton, Tooltip } from '@mui/material';
import { ClipboardCopyIcon } from '@heroicons/react/outline';
import { useContext, useMemo, useState } from 'react';
import { UserDataContext } from '@lib/context';

type Props = {};

const NavbarReportButton = (props: Props) => {
  const [reportOpen, setReportOpen] = useState(false);
  const { selectedClasses } = useContext(UserDataContext);

  const selectedClassesArr = useMemo(() => {
    if (!selectedClasses) return [];

    const result: ClassObject[] = [];

    Object.values(selectedClasses).map((selectedClass) => {
      if (!selectedClass) return;

      Object.values(selectedClass).map((classObject) => {
        if (classObject) result.push(classObject);
      });
    });

    return result;
  }, [selectedClasses]);

  return (
    <>
      <Tooltip title="Criar Relatório" arrow>
        <IconButton className="group" onClick={() => setReportOpen(true)}>
          <ClipboardCopyIcon className="h-6 w-auto group-hover:text-slate-600 dark:group-hover:text-slate-300 dark:text-slate-400" />
        </IconButton>
      </Tooltip>
      <Dialog
        open={reportOpen}
        onClose={() => setReportOpen(false)}
        maxWidth="sm"
        fullWidth
        classes={{
          paper: 'bg-white dark:bg-slate-900 px-8 py-6',
        }}
      >
        <div>
          <div className="flex  flex-col justify-center items-center text-slate-800 dark:text-slate-200 text-2xl font-semibold border-b border-slate-200 dark:border-slate-700 -mx-8 -mt-8 pt-8 pb-6 mb-4">
            Relatório das Matérias
            <span></span>
          </div>
          <div className="text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <ul
              role="list"
              className="border border-gray-200 rounded-md divide-y divide-gray-200"
            >
              {selectedClassesArr.map((selectedClass) => {
                if (!selectedClass) return null;

                return (
                  <li
                    key={selectedClass.subjectCode + selectedClass.code}
                    className="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
                  >
                    <div className="w-0 flex-1 flex items-center">
                      <span className="flex-1 w-0 truncate">
                        {selectedClass.subjectName}
                      </span>
                    </div>
                    <div className="ml-4 flex-shrink-0 flex space-x-4">
                      <button
                        type="button"
                        className="p-1.5 bg-white rounded-md font-medium text-sky-600 hover:text-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                        onClick={() => {
                          navigator.clipboard.writeText(selectedClass.subjectCode);
                        }}
                      >
                        {selectedClass.subjectCode}
                      </button>
                      <span className="p-1.5 text-gray-300">|</span>
                      <button
                        type="button"
                        className="p-1.5 bg-white rounded-md font-medium text-sky-600 hover:text-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                        onClick={() => {
                          navigator.clipboard.writeText(selectedClass.code);
                        }}
                      >
                        {selectedClass.code}
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="border-t border-slate-200 dark:border-slate-700 -mx-8 px-8 mt-3 pt-6 flex flex-col justify-end md:flex-row gap-5 ">
            <Button
              className="w-1/4 border-sky-500 text-sky-500 bg-sky-100 hover:bg-sky-200 hover:border-sky-600 dark:bg-sky-600 dark:text-sky-200 dark:hover:bg-sky-700 dark:border-transparent"
              variant="outlined"
              onClick={() => setReportOpen(false)}
              type="submit"
            >
              Ok
            </Button>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default NavbarReportButton;
