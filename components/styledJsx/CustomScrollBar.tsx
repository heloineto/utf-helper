const CustomScrollBar = () => {
  return (
    <style global jsx>{`
      ::-webkit-scrollbar {
        background: #fff;
      }

      .dark ::-webkit-scrollbar,
      .dark ::-webkit-scrollbar-corner {
        background: #1e293b;
      }

      *::-webkit-scrollbar {
        width: 12px;
        height: 12px;
      }

      *::-webkit-scrollbar-thumb {
        height: 56px;
        border-radius: 8px;
        border: 3px solid transparent;
        background-clip: content-box;
        background-color: #999;
      }

      .dark *::-webkit-scrollbar-thumb {
        border-radius: 8px;
        background-color: #cbd5e1;
      }

      *:hover > ::-webkit-scrollbar-thumb {
        background: #888;
        background-clip: content-box;
      }

      .dark *:hover > ::-webkit-scrollbar-thumb {
        background: #f1f5f9;
        background-clip: content-box;
      }
    `}</style>
  );
};

export default CustomScrollBar;
