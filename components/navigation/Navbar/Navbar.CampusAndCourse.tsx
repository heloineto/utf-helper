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
    <Autocomplete
      openOnFocus
      fullWidth
      classes={{
        inputRoot: 'dark:bg-slate-900',
        clearIndicator: 'dark:text-slate-50',
        popupIndicator: 'dark:text-slate-50',
        input: 'dark:text-slate-50',
        paper: 'dark:bg-slate-800 dark:border dark:border-slate-700 dark:text-slate-100',
      }}
      size="small"
      renderInput={({ InputLabelProps, InputProps, ...params }) => (
        <TextField
          InputLabelProps={{ ...InputLabelProps, className: 'dark:text-slate-400' }}
          InputProps={{
            ...InputProps,
            classes: { notchedOutline: 'dark:border-slate-500' },
          }}
          variant="outlined"
          label="Câmpus"
          {...params}
        />
      )}
      options={campuses}
    />
  );
};

export default NavbarCampusAndCourse;
