import getData, { FilmData, FilmResponse } from "@/api/getData"
import MovieCard from "./MovieCard"

interface MoviesList {
    title: string
    url: string
    type: string
}
export default async function MovieList({title, url, type}: MoviesList){
    let data: FilmData[] = []
    
    try {
        data = (await getData<FilmResponse>(url)).results
    } catch (error) {
        throw new Error('Failed to fetch data')
    }

    return(
        <>
        <h1 className="text-2xl text-white font-bold">{title}</h1>
        <ul className="flex overflow-x-scroll gap-[15px] mb-[30px]">
            {data?.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} type={type}/>
            ))}
        </ul>
        </>
    )
}