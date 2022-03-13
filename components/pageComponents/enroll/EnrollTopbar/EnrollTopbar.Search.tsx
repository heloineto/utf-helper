import {
  IconButton,
  InputAdornment,
  OutlinedTextFieldProps,
  TextField,
  Tooltip,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { MagnifyingGlass } from 'phosphor-react';
import { useState } from 'react';

interface Props extends OutlinedTextFieldProps {}

const SearchBar = ({ ...muiTextFieldProps }: Props) => {
  const { breakpoints } = useTheme();
  const mobile = useMediaQuery(breakpoints.down('sm'));
  const [value, setValue] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  if (mobile) {
    return (
      <>
        <Tooltip title="Pesquisar" arrow>
          <IconButton
            className="text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 dark:text-slate-400"
            onClick={() => setModalOpen(true)}
          >
            <MagnifyingGlass className="h-6" />
          </IconButton>
        </Tooltip>
      </>
    );
  }

  return (
    <TextField
      size="small"
      name="search"
      className="w-64 group text-sm font-normal"
      placeholder="Pesquisar"
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
