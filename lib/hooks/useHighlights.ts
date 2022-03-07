import { UserDataContext } from '@lib/context';
import { useContext, useState } from 'react';
import classNames from 'clsx';
import { IconButton, Portal, Tooltip } from '@mui/material';
import { useFirestoreOperations } from '@lib/hooks';
import { getConflicts, getFramingDescription } from '@lib/utils/schedule';
import { deleteField } from 'firebase/firestore';
import twColors from 'tailwindcss/colors';
import { colord } from 'colord';

type Highlights = { [dayTimeCode: string]: string[] };

const useHighlights = () => {
  const [highlights, setHighlights] = useState<Highlights | null>(null);

  const addHighlights = (dayTimeCodes: string[], colorName: keyof typeof twColors) => {
    setHighlights((value) => {
      let newValue = { ...value };

      dayTimeCodes.forEach((dayTimeCode) => {
        const hexColor = (twColors as any)[colorName][500];

        const color = colord(hexColor);

        newValue[dayTimeCode] = [
          color.alpha(0.6).toRgbString(),
          color.alpha(0.8).toRgbString(),
        ];
      });

      return newValue;
    });
  };

  const removeHighlights = (dayTimeCodes: string[]) => {
    setHighlights((value) => {
      let newValue = { ...value };

      dayTimeCodes.forEach((dayTimeCode) => {
        delete newValue[dayTimeCode];
      });

      return newValue;
    });
  };

  return { highlights, addHighlights, removeHighlights };
};

export default useHighlights;
