import Link from 'next/link';
import classNames from 'clsx';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import { indexOfNth } from '@lib/utils/typescript';
import useNavItems from '@lib/hooks/useNavItems';
import { Logomark } from '@components/decoration/logos/utfHelper';

interface Props {
  expanded: boolean;
}

const SidebarNavItems = ({ expanded }: Props) => {
  const navItems = useNavItems();

  const { pathname } = useRouter();
  const currentHref = pathname.substring(0, indexOfNth(pathname, '/', 2));

  return (
    <div className="w-full flex flex-col items-center">
      <div
        className={classNames(
          expanded
            ? 'justify-start items-end pb-[0.8rem] gap-x-3'
            : 'justify-center items-center',
          'h-20 flex'
        )}
      >
        <Logomark />
        {expanded && <Logomark />}
      </div>
      <div className="flex-1 mt-2 w-full px-2 space-y-1">
        {Object.entries(navItems).map(([key, { label, Icon, href }]) => {
          const current = href === currentHref;

          return (
            <Link
              key={key}
              href={href}
              aria-current={current ? 'page' : 'false'}
              passHref
            >
              <Button
                className={classNames(
                  current
                    ? 'bg-primary-200 text-primary-800'
                    : 'text-gray-800 hover:text-primary-800',
                  expanded ? 'h-12 px-4 text-sm' : 'h-16 text-xs',
                  'group w-full hover:bg-primary-100'
                )}
                classes={{
                  // label: classNames(
                  //   expanded
                  //     ? 'flex-row gap-x-2 justify-start text-'
                  //     : 'flex-col gap-y-1 justify-center',
                  //   'static flex items-center'
                  // ),
                  startIcon: 'static m-0',
                }}
                startIcon={
                  <Icon
                    className={classNames(
                      current
                        ? 'text-primary-900'
                        : 'text-gray-700 group-hover:text-primary-900',
                      expanded ? 'h-7 w-auto' : 'h-6 w-auto'
                    )}
                  />
                }
              >
                {label}
              </Button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SidebarNavItems;
