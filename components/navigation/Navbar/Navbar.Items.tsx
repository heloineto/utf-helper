import { useNavItems } from '@lib/hooks';
import { indexOfNth } from '@lib/utils/typescript';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import classNames from 'clsx';

type Coordinates = { x: number; y: number };

type Props = {};

const NavbarItems = (props: Props) => {
  const { pathname } = useRouter();
  const currentPage = pathname.slice(0, indexOfNth(pathname, '/', 2));

  const navItems = useNavItems();
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);

  return (
    <div className="flex gap-x-5 font-medium text-slate-700 dark:text-slate-400 relative">
      <motion.div className="absolute" />
      {navItems.map(({ key, label, Icon, href }) => {
        const selected = href === currentPage;

        return (
          <Link href={href} passHref>
            <a
              key={key}
              className={classNames(
                selected && 'text-slate-600 dark:text-slate-300',
                'flex justify-center items-center gap-x-1'
              )}
              onMouseEnter={() => {}}
              onMouseLeave={() => {}}
              onClick={() => {}}
            >
              <Icon className="h-5 w-auto" weight={selected ? 'fill' : 'regular'} />
              {label}
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default NavbarItems;
