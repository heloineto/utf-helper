import CustomDialog from '@components/elements/modals/CustomDialog';
import {
  IconButton,
  InputAdornment,
  OutlinedTextFieldProps,
  TextField,
  Tooltip,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { merge } from 'lodash';
import { MagnifyingGlass } from 'phosphor-react';
import { useState } from 'react';
import classNames from 'clsx';

interface Props extends OutlinedTextFieldProps {}

const Searchbar = ({ className, InputProps, ...muiTextFieldProps }: Props) => {
  return (
    <TextField
      size="small"
      name="search"
      className={classNames(className, 'w-full group text-sm font-normal')}
      placeholder="Pesquisar"
      InputProps={merge(InputProps, {
        className: 'text-sm font-normal',
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
      })}
      {...muiTextFieldProps}
    />
  );
};

export default Searchbar;
