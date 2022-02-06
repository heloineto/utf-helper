const CustomScrollBar = () => {
  return (
    <style global jsx>{`
      ::-webkit-scrollbar-track {
        background: #fff;
      }

      .dark ::-webkit-scrollbar-track {
        background: #1e293b;
      }

      *::-webkit-scrollbar {
        width: 1rem;
        height: 1rem;
      }

      *::-webkit-scrollbar-thumb {
        height: 56px;
        border-radius: 8px;
        border: 4px solid transparent;
        background-clip: content-box;
        background-color: #999;
      }

      .dark *::-webkit-scrollbar-thumb {
        height: 56px;
        border-radius: 8px;
        border: 4px solid transparent;
        background-clip: content-box;
        background-color: #cbd5e1;
      }

      *:hover > ::-webkit-scrollbar-thumb {
        background: #888;
        border: 4px solid transparent;
        background-clip: content-box;
      }

      .dark *:hover > ::-webkit-scrollbar-thumb {
        background: #f1f5f9;
        border: 4px solid transparent;
        background-clip: content-box;
      }
    `}</style>
  );
};

export default CustomScrollBar;
