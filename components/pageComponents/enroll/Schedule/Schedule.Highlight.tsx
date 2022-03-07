import { HighlightContext } from '@lib/context';
import { useContext } from 'react';

type Props = {
  timeCode: string;
  dayCode: string;
};

const ScheduleHighlight = ({ timeCode, dayCode }: Props) => {
  const { highlights } = useContext(HighlightContext);

  const highlightColors = highlights?.[timeCode]?.[dayCode];

  if (!highlightColors) return null;

  return (
    <div
      className="absolute top-0 left-0 h-full w-full z-50"
      style={{
        background: `repeating-linear-gradient(45deg, ${highlightColors[0]}, ${highlightColors[0]} 0.25rem, ${highlightColors[1]} 0.25rem, ${highlightColors[1]} 0.5rem)`,
      }}
    />
  );
};

export default ScheduleHighlight;
