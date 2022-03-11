import {
  IconButton,
  InputAdornment,
  OutlinedTextFieldProps,
  TextField,
} from '@mui/material';
import { MagnifyingGlass } from 'phosphor-react';
import { useState } from 'react';

interface Props extends OutlinedTextFieldProps {}

const SearchBar = ({ ...muiTextFieldProps }: Props) => {
  const [value, setValue] = useState('');

  return (
    <TextField
      size="small"
      name="search"
      className="w-full group text-sm font-normal"
      InputProps={{
        className: 'text-sm font-normal',
        value: value,
        onChange: (e) => setValue(e.currentTarget.value),
        startAdornment: (
          <InputAdornment position="start">
            <IconButton
              className="text-slate-200 dark:text-slate-400 hover:text-sky-600 group-focus-within:text-sky-600"
              edge="start"
            >
              <MagnifyingGlass className="h-6 w-6" />
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...muiTextFieldProps}
    />
  );
};

export default SearchBar;
