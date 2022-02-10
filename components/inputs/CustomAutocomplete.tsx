import {
  Autocomplete,
  AutocompleteProps,
  TextField,
  TextFieldProps,
} from '@mui/material';

const CustomAutocomplete = <
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends React.ElementType<any> = 'div'
>({
  textFieldProps,
  ...autocompleteProps
}: Omit<
  AutocompleteProps<T, Multiple, DisableClearable, FreeSolo, ChipComponent>,
  'renderInput'
> & { textFieldProps: TextFieldProps }) => {
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
          {...textFieldProps}
          {...params}
          variant="outlined"
        />
      )}
      {...autocompleteProps}
    />
  );
};

export default CustomAutocomplete;
