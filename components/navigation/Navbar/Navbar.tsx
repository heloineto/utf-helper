import classNames from 'clsx';
import { GitHubIcon } from '@components/decoration/icons/outlined';
import { Autocomplete, IconButton, TextField, Tooltip } from '@mui/material';
import { PrinterIcon } from '@heroicons/react/outline';
import NavbarThemeSwitch from './Navbar.ThemeSwitch';
import NavbarDirectionButton from './Navbar.DirectionButton';
import NavbarResetButton from './Navbar.ResetButton';
import { ChevronRightIcon } from '@heroicons/react/solid';
import NavbarContributeButton from './Navbar.ContributeButton';
import NavbarCampusAndCourse from './Navbar.CampusAndCourse';

interface Props {}

// [
//   { label: 'Curitiba', value: 'curitiba' },
//   { label: 'Cornélio Procópio', value: 'cornelioProcopio' },
//   { label: 'Campo Mourão', value: 'campoMourao' },
//   { label: 'Medianeira', value: 'medianeira' },
//   { label: 'Pato Branco', value: 'patoBranco' },
//   { label: 'Ponta Grossa', value: 'pontaGrossa' },
//   { label: 'Dois Vizinhos', value: 'doisVizinhos' },
//   { label: 'Londrina', value: 'londrina' },
//   { label: 'Toledo', value: 'toledo' },
//   { label: 'Apucarana', value: 'apucarana' },
//   { label: 'Francisco Beltrão', value: 'franciscoBeltrao' },
//   { label: 'Guarapuava', value: 'guarapuava' },
//   { label: 'Santa Helena', value: 'santaHelena' },
// ];

const Navbar = ({ className }: Props & ComponentProps<'header'>) => {
  return (
    <header
      className={classNames(
        className,
        'w-full h-14 px-5 bg-white dark:bg-slate-900 flex justify-between shadow-sm lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06]'
      )}
    >
      <div className="h-full flex items-center">
        <NavbarContributeButton />
      </div>
      <div className="h-full w-80 flex items-center">
        <NavbarCampusAndCourse />
      </div>
      <div className="h-full flex items-center gap-x-1">
        <NavbarThemeSwitch />
        <NavbarDirectionButton />

        <Tooltip title="Imprimir Cronograma" arrow>
          <IconButton className="group">
            <PrinterIcon className="h-5 w-auto group-hover:text-slate-600 dark:group-hover:text-slate-300 dark:text-slate-400" />
          </IconButton>
        </Tooltip>
        <NavbarResetButton />
      </div>
    </header>
  );
};

export default Navbar;
