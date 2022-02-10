import CustomAutocomplete from '@components/inputs/CustomAutocomplete';
import { Autocomplete, TextField } from '@mui/material';

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
  return (
    <div className="flex w-full gap-x-2">
      <CustomAutocomplete textFieldProps={{ label: 'Câmpus' }} options={campuses} />
      <CustomAutocomplete textFieldProps={{ label: 'Curso' }} options={campuses} />
    </div>
  );
};

export default NavbarCampusAndCourse;
