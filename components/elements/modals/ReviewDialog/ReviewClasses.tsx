import { Fragment } from 'react';

type Props = {
  classes: ClassMap<ClassObject>;
};

const ReviewClasses = ({ classes }: Props) => {
  return (
    <>
      {Object.entries(classes).map(([campusKey, campus]) => (
        <Fragment key={campusKey}>
          {Object.entries(campus).map(([courseKey, course]) => (
            <Fragment key={courseKey}>
              {Object.entries(course).map(([subjectKey, subject]) => (
                <Fragment key={subjectKey}>
                  {Object.entries(subject).map(([classKey, classObject]) => (
                    <div>Hi</div>
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

{
  /* <ul
  role="list"
  className="rounded-md divide-y divide-slate-200 dark:divide-slate-700"
></ul>; */
}

// {selectedClassesArr.map((selectedClass) => {
//   if (!selectedClass) return null;

//   return (
//     <li
//       key={selectedClass.subjectCode + selectedClass.code}
//       className="px-8 py-5 flex items-center justify-between text-sm"
//     >
//       <div className="w-0 flex-1 flex items-center">
//         <span className="flex-1 w-0 truncate">
//           {selectedClass.subjectName}
//         </span>
//       </div>
//       <div className="flex-shrink-0 flex space-x-4">
//         <button
//           type="button"
//           className="p-1.5 bg-white dark:bg-slate-700 rounded-md font-medium text-sky-600 dark:text-sky-400 hover:text-sky-500 dark:hover:text-sky-300 focus:outline-none dark:focus:ring-offset-slate-900 focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
//           onClick={() => copyText(selectedClass.subjectCode)}
//         >
//           {selectedClass.subjectCode}
//         </button>
//         <span className="p-1.5 text-slate-300">|</span>
//         <button
//           type="button"
//           className="p-1.5 bg-white dark:bg-slate-700 rounded-md font-medium text-sky-600 dark:text-sky-400 hover:text-sky-500 dark:hover:text-sky-300 focus:outline-none dark:focus:ring-offset-slate-900 focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
//           onClick={() => copyText(selectedClass.code)}
//         >
//           {selectedClass.code}
//         </button>
//       </div>
//     </li>
//   );
// })}

export default ReviewClasses;
