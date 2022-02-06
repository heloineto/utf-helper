import { useEffect, useState } from 'react';

const useResize = (
  resizeRef: RefObject<HTMLDivElement>,
  handleRef: RefObject<HTMLDivElement>
) => {
  const [resizing, setResizing] = useState(false);

  useEffect(() => {
    const handleElem = handleRef.current;
    const resizeElem = resizeRef.current;

    if (!resizeElem || !handleElem) return;

    const resizeStart = (e: MouseEvent) => {
      document.body.classList.add('select-none');

      setResizing(true);
    };

    const resize = (e: MouseEvent) => {
      if (!resizing) return;

      const height = e.clientY - resizeElem.getBoundingClientRect().top;

      resizeElem.style.height = `${height}px`;
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
  }, [resizing, resizeRef, handleRef]);
};

export default useResize;
