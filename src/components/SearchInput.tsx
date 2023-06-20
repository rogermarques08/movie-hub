"use client"
import useSearch from '@/hooks/useSearch';
import React, { ChangeEvent, useState } from 'react';
import { LuSearch } from 'react-icons/lu';
import SearchResults from './SearchResults';

export default function SearchInput() {
  const { search, getSearch, setSearch, movies } = useSearch();
  const [isListVisible, setListVisible] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value: string = event.currentTarget.value;
    setSearch(value);
    setListVisible(true);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
        getSearch()
        setListVisible(true);
    }
  };

  return (
    <div>
      <section className="flex justify-between items-center p-2 bg-stone-800/30 w-[280px] h-[40px] rounded-2xl backdrop-blur-sm">
        <input
          type="text"
          placeholder="Pesquise por um filme"
          className="bg-transparent p-2 w-11/12 rounded-3xl placeholder:text-gray-500 text-white font-semibold"
          value={search}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <LuSearch className="text-lg text-white cursor-pointer" onClick={getSearch} />
      </section>
      <SearchResults movies={movies} isListVisible={isListVisible} setListVisible={setListVisible} />
    </div>
  );
}
