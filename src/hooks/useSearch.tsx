"use client"
import getData, { FilmData, FilmResponse } from "@/api/getData";
import 'dotenv/config';
import { useState } from "react";

export default function useSearch() {
    const [search, setSearch] = useState("")
    const [movies, setMovies] = useState<FilmData[]>([])

    function getSearch() {
        console.log('opa')
        getData<FilmResponse>(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=pt-BR&page=1&api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
            .then((data) => {
                console.log(data)
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