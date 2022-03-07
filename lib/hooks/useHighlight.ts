import { useState } from 'react';

const useHighlight = () => {
  const [highlights, setHighlights] = useState<ScheduleMap<string>>({});

  const addHighlight = (dayTimeCodes: string | string[], colorName: string) =>
    setHighlights((value) => {
      const newValue = { ...value };

      if (typeof dayTimeCodes === 'string') dayTimeCodes = [dayTimeCodes];

      dayTimeCodes.forEach((dayTimeCode) => {
        const dayCode = dayTimeCode.charAt(0);
        const timeCode = dayTimeCode.slice(1);

        newValue[timeCode][dayCode] = colorName;
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
