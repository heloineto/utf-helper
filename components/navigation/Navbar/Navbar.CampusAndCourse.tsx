import CustomAutocomplete from '@components/inputs/CustomAutocomplete';
import { UserDataContext } from '@lib/context';
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
    <div className="flex w-full gap-x-2">
      <CustomAutocomplete options={campuses} textFieldProps={{ label: 'Câmpus' }} />
      <CustomAutocomplete
        options={campuses}
        disabled={!campus}
        textFieldProps={{ label: 'Curso' }}
      />
    </div>
  );
};

export default NavbarCampusAndCourse;
