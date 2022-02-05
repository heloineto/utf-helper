import { useEffect, useRef, useState } from 'react';

const useResize = (
  resizeRef: RefObject<HTMLDivElement>,
  handleRef: RefObject<HTMLDivElement>
) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [resizing, setResizing] = useState(false);

  useEffect(() => {
    const handleElem = handleRef.current;
    const resizeElem = resizeRef.current;

    if (!resizeElem || !handleElem) return;

    const resizeStart = (e: MouseEvent) => {
      document.body.classList.add('select-none');

      setOffset({
        x: e.clientX - resizeElem.getBoundingClientRect().left,
        y: e.clientY - resizeElem.getBoundingClientRect().top,
      });

      setResizing(true);
    };

    const resize = (e: MouseEvent) => {
      if (!resizing) return;

      const height = e.pageY - resizeElem.getBoundingClientRect().top;

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
  }, [resizing, resizeRef, handleRef, offset.x, offset.y]);
};

export default useResize;
