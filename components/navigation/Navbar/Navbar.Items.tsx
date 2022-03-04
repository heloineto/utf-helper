import { useNavItems } from '@lib/hooks';
import { motion } from 'framer-motion';
import { useState } from 'react';

type Props = {};

const NavbarItems = (props: Props) => {
  const navItems = useNavItems();
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="flex gap-x-5 font-medium text-slate-700 dark:text-slate-400">
      <motion.div className="absolute" />
      {navItems.map(({ key, label, Icon }) => {
        return (
          <button
            key={key}
            className="flex justify-center items-center gap-x-1"
            onClick={() => setSelected(key)}
          >
            <Icon className="h-5 w-auto" weight="regular" />
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default NavbarItems;
