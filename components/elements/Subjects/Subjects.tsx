import { useSubjects } from '@lib/hooks';
import classNames from 'clsx';
import SubjectsTableData from './Subjects.TableData';
import SubjectsTableHeader from './Subjects.TableHeader';

interface Props {}

const Subjects = (props: Props) => {
  const subjects = useSubjects();

  return (
    <div className="w-full bg-white divide-y divide-slate-200">
      {Object.entries(subjects).map(([subjectCode, subject]) => (
        <div key={subjectCode}>
          <div className="bg-slate-100 px-6 py-3 flex items-center gap-x-2 text-md h-12 w-full font-medium text-slate-600 tracking-wider">
            <span className="text-slate-500">{subject.code}</span>
            <div className="h-full w-px bg-slate-400" />
            <span className="uppercase text-slate-700">{subject.name}</span>
          </div>
          <table className="w-full">
            <tbody className="w-full">
              <tr className="bg-slate-50">
                <SubjectsTableHeader className="w-[10%]">Turma</SubjectsTableHeader>
                <SubjectsTableHeader className="w-[20%]">Horário</SubjectsTableHeader>
                <SubjectsTableHeader className="w-[20%]">Professor</SubjectsTableHeader>
                <SubjectsTableHeader className="w-[20%]">Vagas</SubjectsTableHeader>
                <SubjectsTableHeader className="w-[20%] text-right">
                  Optativa
                </SubjectsTableHeader>
              </tr>
              {Object.entries(subject.classes).map(([classCode, classObj]) => (
                <tr
                  key={`${subjectCode}-${classCode}`}
                  className="cursor-pointer transition-all duration-900"
                >
                  <SubjectsTableData>{classCode}</SubjectsTableData>
                  <SubjectsTableData className="break-words">
                    {/* {classObj.schedule} */}
                  </SubjectsTableData>
                  <SubjectsTableData className="">{classObj.professor}</SubjectsTableData>
                  <SubjectsTableData className="text-slate-500 font-normal">
                    {classObj.vacanciesTotal}
                  </SubjectsTableData>
                  <SubjectsTableData className="text-right break-words w-80">
                    {classObj.optional}
                  </SubjectsTableData>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Subjects;
