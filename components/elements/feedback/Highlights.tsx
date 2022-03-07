import { Portal } from '@mui/material';

type Props = {
  highlights: Highlights;
};

const Highlights = ({ highlights }: Props) => {
  return (
    <>
      {Object.entries(highlights).map(([dayTimeCode, colors]) => (
        <Portal
          key={dayTimeCode}
          container={document && document.getElementById(`schedule-${dayTimeCode}`)}
        >
          <div
            className="absolute top-0 left-0 h-full w-full z-50"
            style={{
              background: `repeating-linear-gradient(45deg, ${colors[0]}, ${colors[0]} 0.25rem, ${colors[1]} 0.25rem, ${colors[1]} 0.5rem)`,
            }}
          />
        </Portal>
      ))}
    </>
  );
};

export default Highlights;
