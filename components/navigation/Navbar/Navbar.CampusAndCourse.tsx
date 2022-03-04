import CustomAutocomplete from '@components/inputs/CustomAutocomplete';
import { UserDataContext } from '@lib/context';
import { NotePencil } from 'phosphor-react';
import { useContext } from 'react';

type Props = {};

const campuses = [
  { label: 'Curitiba', value: 'curitiba' },
  { label: 'Cornélio Procópio', value: 'cornelioProcopio' },
  { label: 'Campo Mourão', value: 'campoMourao' },
  { label: 'Medianeira', value: 'medianeira' },
  { label: 'Pato Branco', value: 'patoBranco' },
  { label: 'Ponta Grossa', value: 'pontaGrossa' },
  { label: 'Dois Vizinhos', value: 'doisVizinhos' },
  { label: 'Londrina', value: 'londrina' },
  { label: 'Toledo', value: 'toledo' },
  { label: 'Apucarana', value: 'apucarana' },
  { label: 'Francisco Beltrão', value: 'franciscoBeltrao' },
  { label: 'Guarapuava', value: 'guarapuava' },
  { label: 'Santa Helena', value: 'santaHelena' },
];

const NavbarCampusAndCourse = (props: Props) => {
  const { campus, setCampus, course, setCourse } = useContext(UserDataContext);

  return (
    <div>
      <button className="group flex flex-col items-end rounded-md px-2.5 relative">
        <div className="hidden group-hover:flex justify-center items-center absolute w-full h-full bg-slate-900/10 dark:bg-slate-50/10 top-0 left-0 rounded-md">
          <NotePencil
            className="h-7 w-auto text-slate-900/50 dark:text-slate-50/50"
            weight="bold"
          />
        </div>
        <p className="text-sky-500 dark:text-sky-400 text-sm">Ponta Grossa</p>
        <p className="text-slate-700 dark:text-slate-500 text-sm">
          Ciência Da Computação
        </p>
      </button>

      {/* <div className="flex w-full gap-x-2">
      <CustomAutocomplete
        options={[]}
        textFieldProps={{ label: 'Câmpus' }}
        // disabled={true}
        inputValue="Ponta Grossa"
      />
      <CustomAutocomplete
        options={[]}
        // disabled={true}
        textFieldProps={{ label: 'Curso' }}
        inputValue="Ciência Da Computação"
      />
    </div> */}
    </div>
  );
};

export default NavbarCampusAndCourse;
