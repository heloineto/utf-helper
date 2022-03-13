import { useState } from 'react';

const useEnroll = () => {
  const [searchTerm, setSearchTerm] = useState<string | undefined>();

  return {
    searchTerm,
    setSearchTerm,
  };
};

export default useEnroll;
