//! DELETE IF NO PROBLEM (06/03/22)

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
  disabled,
  ...autocompleteProps
}: Omit<
  AutocompleteProps<T, Multiple, DisableClearable, FreeSolo, ChipComponent>,
  'renderInput'
> & { textFieldProps: TextFieldProps }) => {
  return (
    <Autocomplete
      className="disabled:text-opacity-100"
      openOnFocus
      fullWidth
      classes={{
        inputRoot: disabled ? 'dark:bg-slate-800/80' : 'dark:bg-slate-900',
        clearIndicator: 'dark:text-slate-50',
        popupIndicator: disabled ? 'dark:text-slate-500' : 'dark:text-slate-50',
        input: 'dark:!text-slate-50',
        paper: 'dark:bg-slate-800 dark:border dark:border-slate-700 dark:text-slate-100',
      }}
      size="small"
      renderInput={({ InputLabelProps, InputProps, ...params }) => (
        <TextField
          InputLabelProps={{
            ...InputLabelProps,
            className: disabled ? 'dark:text-slate-500' : 'dark:text-slate-400',
          }}
          InputProps={{
            ...InputProps,
            classes: {
              notchedOutline: disabled
                ? 'dark:!border-slate-600'
                : 'dark:border-slate-500',
            },
          }}
          {...textFieldProps}
          {...params}
          variant="outlined"
        />
      )}
      disabled={disabled}
      {...autocompleteProps}
    />
  );
};

export default CustomAutocomplete;
