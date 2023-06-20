"use client"
import useSearch from '@/hooks/useSearch'
import { LuSearch } from 'react-icons/lu'
import SearchResults from './SearchResults'

export default function SearchInput() {
    const { search, getSearch, setSearch, movies, setMovies } = useSearch()
    console.log(movies)

    return (
        <div>
            <section className="flex justify-between items-center p-2 bg-stone-800/30 w-[280px] h-[40px] rounded-2xl backdrop-blur-sm">
                <input
                    type="text"
                    placeholder="Pesquise por um filme"
                    className="bg-transparent p-2 w-11/12 rounded-3xl placeholder:text-gray-500 text-white font-semibold"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && getSearch()}
                />
                <LuSearch className='text-lg text-white' onClick={getSearch} />
            </section>
            <SearchResults movies={movies}/>
        </div>
    )
}