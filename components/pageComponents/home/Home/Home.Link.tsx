import { Logomark } from '@components/decoration/logos/utfHelper';
import { useNavItems } from '@lib/hooks';
import { Button } from '@mui/material';
import { omit } from 'lodash';
import Link from 'next/link';
import { CaretRight } from 'phosphor-react';

interface Props {
  href: string;
  label: string;
  Icon: PhosphorIcon;
}

const HomeLink = ({ href, label, Icon }: Props) => {
  return (
    <li className="">
      <Link href={href} passHref>
        <Button className="py-6 bg-transparent hover:bg-sky-200">
          <span className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-sky-200">
            <Icon className="h-6 w-6 text-sky-700" aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="text-base font-medium text-slate-900">
              <span className="rounded-sm focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-sky-500">
                <span className="absolute inset-0" aria-hidden="true" />
                {label}
              </span>
            </h3>
            <p className="text-base text-slate-500">{label}</p>
          </div>
          <div className="flex-shrink-0 self-center">
            <CaretRight className="h-5 w-5 text-slate-400" aria-hidden="true" />
          </div>
        </Button>
      </Link>
    </li>
  );
};

export default HomeLink;
