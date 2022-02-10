import { Autocomplete, TextField } from '@mui/material';

type Props = {};

const NavbarCampusAndCourse = (props: Props) => {
  return (
    <Autocomplete
      // className="w-full"
      openOnFocus
      fullWidth
      classes={{
        // popper: 'bg-red-500',
        // fullWidth
        root: 'text-white',
        inputRoot: 'dark:bg-slate-600 !border-0',
        endAdornment: 'text-white',
        groupLabel: 'bg-red-500',
        tag: '!bg-red-500 !text-red-500',
        tagSizeSmall: '!bg-red-500 !text-red-500',
        tagSizeMedium: '!bg-red-500 !text-red-500',
        // popupIndicatorOpen: '!bg-red-500 !text-red-500',
        // focused: '!bg-red-500 !text-red-500',
        groupUl: '!bg-red-500 !text-red-500',
        popperDisablePortal: '!bg-red-500 !text-red-500',
        loading: '!bg-red-500 !text-red-500',
        // inputFocused: 'bg-red-500',
        //
        clearIndicator: 'dark:text-slate-50',
        popupIndicator: 'dark:text-slate-50',
        input: 'dark:text-slate-50',
        paper: 'dark:bg-slate-800 dark:border dark:border-slate-700 text-slate-100',
      }}
      size="small"
      renderInput={(params) => <TextField {...params} label="Câmpus" />}
      options={[
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
      ]}
    />
  );
};

export default NavbarCampusAndCourse;
