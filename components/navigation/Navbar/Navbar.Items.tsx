import { useNavItems } from '@lib/hooks';
import { indexOfNth } from '@lib/utils/typescript';
import { animate, motion, useMotionValue } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import classNames from 'clsx';

type Props = {};

const NavbarItems = (props: Props) => {
  const { pathname } = useRouter();
  const currentPage = pathname.slice(0, indexOfNth(pathname, '/', 2));

  const x = useMotionValue(0);
  const width = useMotionValue(0);
  const [initialValues, setInitialValues] = useState({ x: 0, width: 0 });

  const navItems = useNavItems();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const currentRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!wrapperRef.current || !currentRef.current) return;

    const wrapperRect = wrapperRef.current.getBoundingClientRect();
    const rect = currentRef.current.getBoundingClientRect();

    setInitialValues({ x: rect.x - wrapperRect.x, width: rect.width });

    width.set(rect.width);
    x.set(rect.x - wrapperRect.x);
  }, []);

  return (
    <div
      className="flex gap-x-2 font-medium text-slate-700 dark:text-slate-400 relative"
      ref={wrapperRef}
      onMouseLeave={() => {
        animate(width, initialValues.width, { duration: 0.25 });
        animate(x, initialValues.x, {
          duration: 0.25,
        });
      }}
    >
      <motion.div
        className="absolute h-9 bg-slate-200 dark:bg-slate-800 top-0 z-10 rounded"
        style={{ x, width }}
      />
      {navItems.map(({ key, label, Icon, href }) => {
        const current = href === currentPage;

        return (
          <Link href={href} passHref>
            <a
              key={key}
              ref={current ? currentRef : undefined}
              className={classNames(
                current && 'text-slate-600 dark:text-slate-300',
                'flex justify-center items-center gap-x-1.5 z-20 px-3 h-9 text-sm'
              )}
              onMouseEnter={(e) => {
                if (!wrapperRef.current) return;

                const wrapperRect = wrapperRef.current.getBoundingClientRect();
                const rect = e.currentTarget.getBoundingClientRect();

                animate(width, rect.width, { duration: 0.25 });
                animate(x, rect.x - wrapperRect.x, {
                  type: 'spring',
                  duration: 0.25,
                  bounce: 0.4,
                });
              }}
              onMouseLeave={() => {}}
              onClick={() => {}}
            >
              <Icon className="h-[1.1rem] w-auto" weight={current ? 'fill' : 'regular'} />
              {label}
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default NavbarItems;
