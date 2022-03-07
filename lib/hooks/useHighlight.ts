import { colord } from 'colord';
import { merge } from 'lodash';
import { useState } from 'react';
import twColors from 'tailwindcss/colors';

const useHighlight = () => {
  const [highlights, setHighlights] = useState<ScheduleMap<string[]>>({});

  const addHighlight = (dayTimeCodes: string | string[], colorName: string) =>
    setHighlights((value) => {
      let newValue = { ...value };

      if (typeof dayTimeCodes === 'string') dayTimeCodes = [dayTimeCodes];

      dayTimeCodes.forEach((dayTimeCode) => {
        const dayCode = dayTimeCode.charAt(0);
        const timeCode = dayTimeCode.slice(1);

        const hexColor = (twColors as any)[colorName][500];

        const color = colord(hexColor);

        newValue = merge(newValue, {
          [timeCode]: {
            [dayCode]: [color.alpha(0.6).toRgbString(), color.alpha(0.8).toRgbString()],
          },
        });
      });

      return newValue;
    });

  const removeHighlight = (dayTimeCodes: string | string[]) =>
    setHighlights((value) => {
      const newValue = { ...value };

      if (typeof dayTimeCodes === 'string') dayTimeCodes = [dayTimeCodes];

      dayTimeCodes.forEach((dayTimeCode) => {
        const dayCode = dayTimeCode.charAt(0);
        const timeCode = dayTimeCode.slice(1);

        delete newValue[timeCode][dayCode];
      });

      return newValue;
    });

  return { highlights, addHighlight, removeHighlight };
};

export default useHighlight;
