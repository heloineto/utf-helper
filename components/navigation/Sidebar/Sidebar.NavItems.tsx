import Link from 'next/link';
import classNames from 'clsx';
import { useRouter } from 'next/router';
import { indexOfNth } from '@lib/utils/typescript';
import useNavItems from '@lib/hooks/useNavItems';
import { Logomark } from '@components/decoration/logos/utfHelper';
import PrimaryButton from '@components/elements/buttons/PrimaryButton';

interface Props {}

const SidebarNavItems = ({}: Props) => {
  const navItems = useNavItems();

  const { pathname } = useRouter();
  const currentHref = pathname.substring(0, indexOfNth(pathname, '/', 2));

  return (
    <div className="w-full flex flex-col items-center">
      <Logomark className="h-20 w-20" />
      <div className="flex-1 mt-2 w-full px-2 space-y-1">
        {Object.entries(navItems).map(([key, { label, Icon, href }]) => {
          const current = href === currentHref;

          return (
            <Link key={key} href={href} passHref>
              <PrimaryButton
                className={classNames(
                  current
                    ? 'dark:ring-sky-500 dark:text-sky-300 dark:shadow-md dark:shadow-sky-800/50'
                    : 'dark:ring-white/10 !bg-white text-sky-400',
                  'h-16 text-xs font-semibold tracking-wide group flex-col gap-y-1 justify-center flex items-center rounded-lg shadow dark:ring-1 ring-slate-700/5 dark:!bg-slate-900 dark:hover:!bg-sky-900/50'
                )}
                classes={{ startIcon: 'm-0' }}
                startIcon={
                  <Icon
                    className={classNames(current ? '' : '', 'h-6 w-auto')}
                    weight={current ? 'fill' : 'regular'}
                  />
                }
              >
                {label}
              </PrimaryButton>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SidebarNavItems;
