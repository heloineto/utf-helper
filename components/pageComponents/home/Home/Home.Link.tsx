import { Logomark } from '@components/decoration/logos/utfHelper';
import { useNavItems } from '@lib/hooks';
import { Button } from '@mui/material';
import { omit } from 'lodash';
import Link from 'next/link';
import { CaretRight } from 'phosphor-react';
import { useState } from 'react';

interface Props {
  href: string;
  label: string;
  Icon: PhosphorIcon;
}

const HomeLink = ({ href, label, Icon }: Props) => {
  const [hover, setHover] = useState(false);

  return (
    <Link href={href} passHref>
      <Button
        className="group py-6 bg-transparent hover:bg-sky-200 dark:hover:bg-sky-900/70 rounded-none gap-x-4"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <span className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-sky-100 dark:bg-sky-700 group-hover:bg-sky-300 dark:group-hover:bg-sky-600">
          <Icon
            className="h-6 w-6 text-sky-700 dark:text-sky-200"
            weight={hover ? 'fill' : 'bold'}
          />
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-medium text-slate-900 dark:text-sky-500">
            {label}
          </h3>
          <p className="text-base text-slate-500 dark:text-slate-400">{label}</p>
        </div>
        <CaretRight
          className="flex-shrink-0 self-center group-hover:-mr-2 transition-all h-5 w-5 text-slate-400"
          aria-hidden="true"
        />
      </Button>
    </Link>
  );
};

export default HomeLink;
