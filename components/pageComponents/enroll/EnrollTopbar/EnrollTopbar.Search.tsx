import PrimaryButton from '@components/elements/buttons/PrimaryButton';
import Searchbar from '@components/elements/inputs/Searchbar';
import CustomDialog from '@components/elements/modals/CustomDialog';
import { EnrollContext } from '@lib/context';
import {
  IconButton,
  Tooltip,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { MagnifyingGlass } from 'phosphor-react';
import { useContext, useState } from 'react';

interface Props {}

const SearchBar = ({}: Props) => {
  const { breakpoints } = useTheme();
  const mobile = useMediaQuery(breakpoints.down('sm'));

  const [modalOpen, setModalOpen] = useState(false);
  const { searchTerm, setSearchTerm } = useContext(EnrollContext);

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
        <CustomDialog open={modalOpen} onClose={() => setModalOpen(false)}>
          <div className="p-5 flex flex-col gap-y-2.5">
            <Searchbar
              size="medium"
              className=""
              variant="outlined"
              InputProps={{
                value: searchTerm,
                onChange: (e) => setSearchTerm?.(e.currentTarget.value),
              }}
            />
            <PrimaryButton className="w-1/3 ml-auto" onClick={() => setModalOpen(false)}>
              Ok
            </PrimaryButton>
          </div>
        </CustomDialog>
      </>
    );
  }

  return (
    <Searchbar
      className="w-64 "
      variant="outlined"
      InputProps={{
        value: searchTerm,
        onChange: (e) => setSearchTerm?.(e.currentTarget.value),
      }}
    />
  );
};

export default SearchBar;
