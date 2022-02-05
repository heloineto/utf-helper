import { useContext, useState } from 'react';
import { styled } from '@mui/system';
import SwitchUnstyled, { switchUnstyledClasses } from '@mui/base/SwitchUnstyled';

const blue = {
  500: '#007FFF',
};

const grey = {
  400: '#BFC7CF',
  500: '#AAB4BE',
};

const Root = styled('span')`
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  margin: 10px;
  cursor: pointer;

  &.${switchUnstyledClasses.disabled} {
    opacity: 0.4;
    cursor: not-allowed;
  }

  & .${switchUnstyledClasses.track} {
    border-radius: 10px;
  }

  & .${switchUnstyledClasses.thumb} {
    top: 3px;
    left: 3px;
    border-radius: 16px;
    transition: all 200ms ease;
  }

  &.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.thumb} {
    background-color: ${grey[500]};
    box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
  }

  &.${switchUnstyledClasses.checked} {
    .${switchUnstyledClasses.thumb} {
      left: 22px;
      top: 3px;
      background-color: #fff;
    }

    .${switchUnstyledClasses.track} {
      background: ${blue[500]};
    }
  }

  & .${switchUnstyledClasses.input} {
    cursor: inherit;
    z-index: 1;
  }
`;

interface Props {}

const Navbar = ({}: Props) => {
  return (
    <header className="w-full h-16 bg-white border-b border-gray-200 flex">
      <div>
        <SwitchUnstyled
          component={Root}
          componentsProps={{
            root: { className: 'relative inline-block w-10 h-5 m-2 cursor-pointer' },
            input: { className: 'absolute w-full h-full top-0 left-0 opacity-0 m-0' },
            thumb: { className: 'block w-3 h-3 bg-white relative' },
            track: { className: 'block h-full w-full absolute' },
          }}
        />
      </div>
    </header>
  );
};

export default Navbar;
