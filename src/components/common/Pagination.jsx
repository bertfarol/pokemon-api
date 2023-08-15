import React, { useContext } from 'react'
import { Icon } from '@iconify/react';
import { PokemonContext } from 'context/PokemonContext';

const Pagination = () => {

  const { gotoNextPage, gotoPrevPage } = useContext(PokemonContext);

  return (
    <div className="flex justify-center max-w-5xl gap-4 pt-10 pb-32 mx-auto">
      <button
        disabled={!gotoPrevPage}
        onClick={gotoPrevPage}
        className="flex items-center justify-center h-10 gap-2 px-3 font-medium duration-300 rounded hover:bg-zinc-100 disabled:opacity-40 disabled:bg-white"
      >
        <Icon icon="fa:angle-left" className="w-4 h-4" />
        Prev
      </button>
      <button
        disabled={!gotoNextPage}
        onClick={gotoNextPage}
        className="flex items-center justify-center h-10 gap-2 px-3 font-medium duration-300 rounded hover:bg-zinc-100 disabled:opacity-10"
      >
        <span>Next</span>
        <Icon icon="fa:angle-right" className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Pagination