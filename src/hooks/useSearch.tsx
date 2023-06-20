"use client"
import getData, { FilmData, FilmResponse } from "@/api/getData";
import { SearchContext } from "@/context/SeachContext";
import 'dotenv/config';
import { useContext, useState } from "react";

export default function useSearch() {
    const { search, setSearch } = useContext(SearchContext)
    const [movies, setMovies] = useState<FilmData[]>([])

    async function getSearch() {
        getData<FilmResponse>(`https://api.themoviedb.org/3/search/multi?query=${search}&include_adult=false&language=pt-BR&page=1&api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
            .then((data) => {
                const filteredResults = data.results?.filter((item) => item.media_type !== 'person')
                setMovies(filteredResults)
            })
    }

    return {
        movies,
        search,
        setSearch,
        getSearch,
        setMovies
    }
}