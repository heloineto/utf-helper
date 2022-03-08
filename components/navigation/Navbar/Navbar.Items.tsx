import { useNavItems } from '@lib/hooks';
import { indexOfNth } from '@lib/utils/typescript';
import { animate, motion, useMotionValue } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import classNames from 'clsx';

type Props = {};

const NavbarItems = (props: Props) => {
  const { pathname } = useRouter();
  const currentPage = pathname.slice(0, indexOfNth(pathname, '/', 2));

  const x = useMotionValue(0);
  const width = useMotionValue(0);
  const [hoverItem, setHoverItem] = useState<string | null>(null);

  const navItems = useNavItems();
  const wrapperRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="flex gap-x-2 h-full font-medium text-slate-700 dark:text-slate-400 relative"
      ref={wrapperRef}
      onMouseLeave={() => {
        setHoverItem(null);
      }}
    >
      <motion.div
        className="absolute h-9 bg-slate-200 dark:bg-slate-800 top-2.5 z-10 rounded"
        style={{ x, width, opacity: hoverItem ? 1 : 0 }}
      />
      {Object.values(navItems).map(({ href, label, Icon }) => {
        const current = href === currentPage;
        const hover = href === hoverItem;

        return (
          <div className="h-full flex flex-col justify-between z-20">
            <div className="h-px" />
            <Link key={href} href={href} passHref>
              <a
                className={classNames(
                  current
                    ? 'text-slate-500 dark:text-slate-200'
                    : hover && 'text-slate-600 dark:text-slate-300',
                  'flex justify-center items-center gap-x-1.5 px-3 h-9 text-sm'
                )}
                onMouseEnter={(e) => {
                  if (!wrapperRef.current) return;

                  const wrapperRect = wrapperRef.current.getBoundingClientRect();
                  const rect = e.currentTarget.getBoundingClientRect();

                  if (!hoverItem) {
                    width.set(rect.width);
                    x.set(rect.x - wrapperRect.x);

                    setHoverItem(href);
                    return;
                  }

                  setHoverItem(href);
                  animate(width, rect.width, { duration: 0.05 });
                  animate(x, rect.x - wrapperRect.x, {
                    duration: 0.25,
                  });
                }}
                onMouseLeave={() => {}}
                onClick={() => {}}
              >
                <Icon
                  className="h-[1.1rem] w-auto"
                  weight={current ? 'fill' : 'regular'}
                />
                {label}
              </a>
            </Link>
            <div className={classNames(current && 'h-px bg-white')} />
          </div>
        );
      })}
    </div>
  );
};

export default NavbarItems;
