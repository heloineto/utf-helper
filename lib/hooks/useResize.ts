import { useEffect, useRef, useState } from 'react';

const useResize = (direction: Direction = 'vertical') => {
  const [resizing, setResizing] = useState(false);
  const handleRef = useRef<HTMLDivElement>(null);
  const resize1Ref = useRef<HTMLDivElement>(null);
  const resize2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleElem = handleRef.current;
    const resize1Elem = resize1Ref.current;
    const resize2Elem = resize2Ref.current;

    if (!resize1Elem || !resize2Elem || !handleElem) return;

    if (direction === 'horizontal') {
      resize1Elem.style.height = `100%`;
      resize2Elem.style.height = `100%`;
    } else {
      resize1Elem.style.width = `100%`;
      resize2Elem.style.width = `100%`;
    }

    const resizeStart = (e: MouseEvent) => {
      document.body.classList.add('select-none');
      setResizing(true);
    };

    const resize = (e: MouseEvent) => {
      if (!resizing) return;

      if (direction === 'horizontal') {
        const percentage = (e.clientX * 100) / window.innerWidth;

        resize1Elem.style.width = `${percentage}%`;
        resize2Elem.style.width = `${100 - percentage}%`;

        return;
      }

      const percentage = (e.clientY * 100) / window.innerHeight;

      resize1Elem.style.height = `${percentage}%`;
      resize2Elem.style.height = `${100 - percentage}%`;
    };

    const resizeEnd = () => {
      document.body.classList.remove('select-none');
      setResizing(false);
    };

    handleElem.addEventListener('mousedown', resizeStart);
    window.addEventListener('mousemove', resize);
    window.addEventListener('mouseup', resizeEnd);

    return () => {
      handleElem.removeEventListener('mousedown', resizeStart);
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', resizeEnd);
    };
  }, [resizing, resize1Ref, resize2Ref, handleRef, direction]);

  return { handleRef, resize1Ref, resize2Ref };
};

export default useResize;
