const CustomScrollBar = () => {
  return (
    <style global jsx>{`
      ::-webkit-scrollbar {
        width: 0.5rem;
        height: 0.5rem;
      }

      ::-webkit-scrollbar-track {
        background: transparent;
      }

      ::-webkit-scrollbar-thumb {
        background: #f5f5f5;
        border-radius: 1rem;
      }

      ::-webkit-scrollbar-thumb {
        background: #767676;
      }

      *:hover > ::-webkit-scrollbar-thumb {
        background: #d6d6d6;
      }
    `}</style>
  );
};

export default CustomScrollBar;
