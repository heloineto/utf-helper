import { useEffect, useRef, useState } from 'react';

const useResize = () => {
  const [resizing, setResizing] = useState(false);
  const handleRef = useRef<HTMLDivElement>(null);
  const resize1Ref = useRef<HTMLDivElement>(null);
  const resize2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleElem = handleRef.current;
    const resize1Elem = resize1Ref.current;
    const resize2Elem = resize2Ref.current;

    if (!resize1Elem || !resize2Elem || !handleElem) return;

    const resizeStart = (e: MouseEvent) => {
      document.body.classList.add('select-none');
      setResizing(true);
    };

    const resize = (e: MouseEvent) => {
      if (!resizing) return;

      const height = e.clientY - resize1Elem.getBoundingClientRect().top;

      resize1Elem.style.height = `${height}px`;
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
  }, [resizing, resize1Ref, handleRef]);

  return { handleRef, resize1Ref, resize2Ref };
};

export default useResize;
