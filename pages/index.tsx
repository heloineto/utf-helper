import MainShell from '@components/appShells/MainShell';
import Divider from '@components/elements/Resizer';
import Schedule from '@components/elements/Schedule';
import Table from '@components/elements/Subjects';
import { SettingsContext } from '@lib/context';
import { useResize } from '@lib/hooks';
import { useContext } from 'react';
import classNames from 'clsx';

//! Changes
//! Add subject & class information on scheduler classObject modal
//! Add modal to select campus and course
//! Add search bar
//! Create scrapper to scrape data from portal do aluno (puppeteer) or get them from grade na hora
//! Add firebase to handle requests for subjects list, since it's a lot of data to store in a variable
//! Make a relatorio to make it easy to enroll
//! Adicionar opçoes de quais colunas ver
//! Loading screen while user data and settings load
// Update Schedule state (highlights) declaratively
//// Adicionar enquadramento

const Home: NextPage = () => {
  const { direction } = useContext(SettingsContext);
  const { handleRef, resize1Ref, resize2Ref, resizing } = useResize(direction);

  return (
    <MainShell>
      <div
        className={classNames(
          direction === 'horizontal' ? 'flex-row' : 'flex-col',
          'h-full w-full flex overflow-hidden'
        )}
      >
        <div className="h-2/3 overflow-auto" ref={resize1Ref}>
          <Table />
        </div>
        <Divider direction={direction} ref={handleRef} resizing={resizing} />
        <div className="flex-grow flex overflow-auto" ref={resize2Ref}>
          <Schedule />
        </div>
      </div>
    </MainShell>
  );
};

export default Home;
