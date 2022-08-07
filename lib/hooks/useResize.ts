import { useEffect, useRef, useState } from 'react';

const getDefaultSecondStyles = (direction: Direction): CSSProperties => {
  return direction === 'horizontal'
    ? {
        flexDirection: 'row',
        position: 'absolute',
        right: 0,
        width: '50%',
        height: '100%',
      }
    : {
        flexDirection: 'column',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '50%',
      };
};

const useResize = (direction: Direction = 'vertical') => {
  const [resizing, setResizing] = useState(false);
  const resizeButtonRef = useRef<HTMLButtonElement>(null);
  const firstRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);

  console.log(resizing);

  const [secondStyles, setSecondStyles] = useState<CSSProperties>(
    getDefaultSecondStyles(direction)
  );

  useEffect(() => {
    setSecondStyles(getDefaultSecondStyles(direction));
  }, [direction]);

  useEffect(() => {
    const buttonElem = resizeButtonRef.current;
    const firstElem = firstRef.current;
    const secondElem = secondRef.current;

    if (!firstElem || !secondElem || !buttonElem) return;

    const resizeStart = (e: MouseEvent) => {
      document.body.classList.add('select-none');
      console.log('hi');

      setResizing(true);
    };

    const resize = (e: MouseEvent) => {
      if (!resizing) return;

      if (direction === 'horizontal') {
        const percentage = (e.clientX * 100) / window.innerWidth;

        // resize1Elem.style.width = `${percentage}%`;

        console.log(percentage);

        setSecondStyles({
          flexDirection: 'row',
          position: 'absolute',
          right: 0,
          width: `${100 - percentage}%`,
          height: '100%',
        });

        return;
      }

      const percentage = (e.clientY * 100) / window.innerHeight;

      // resize1Elem.style.height = `${percentage}%`;
      secondElem.style.height = `${100 - percentage}%`;
    };

    const resizeEnd = () => {
      document.body.classList.remove('select-none');
      secondElem.style.position = 'block';
      setResizing(false);
    };

    buttonElem.addEventListener('pointerdown', resizeStart);
    window.addEventListener('pointermove', resize);
    window.addEventListener('pointerup', resizeEnd);

    return () => {
      buttonElem.removeEventListener('pointerdown', resizeStart);
      window.removeEventListener('pointermove', resize);
      window.removeEventListener('pointerup', resizeEnd);
    };
  }, [resizing, firstRef, secondRef, resizeButtonRef, direction]);

  return { resizeButtonRef, firstRef, secondRef, resizing, secondStyles };
};

export default useResize;
