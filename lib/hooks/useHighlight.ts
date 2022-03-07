import { useState } from 'react';

const useHighlight = () => {
  const [highlights, setHighlights] = useState<ClassMap<string>>({});

  const addHighlight = (dayTimeCodes: string | string[], hexColor: string) =>
    setHighlights((value) => {
      if (typeof dayTimeCodes === 'string') dayTimeCodes = [dayTimeCodes];

      dayTimeCodes.forEach((dayTimeCode) => {
        value;
      });
    });
};

export default useHighlight;
