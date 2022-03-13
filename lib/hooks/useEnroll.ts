import { useState } from 'react';

const useEnroll = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return {
    searchTerm,
    setSearchTerm,
  };
};

export default useEnroll;
