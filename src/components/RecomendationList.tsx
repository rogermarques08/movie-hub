import getData, { FilmData, FilmResponse } from "@/api/getData";
import { antonio } from "./Logo";
import MovieCard from "./MovieCard";

interface MoviesList {
    url: string
}

export default async function RecomendationList({ url }: MoviesList) {
    let data: FilmData[] = []

    try {
        data = (await getData<FilmResponse>(url)).results
    } catch (error) {
        throw new Error('Failed to fetch data')
    }

    if (data.length === 0)
        data = (await getData<FilmResponse>("https://api.themoviedb.org/3/movie/298618/similar?language=pt-BR&page=1")).results

    return (
        <section className="px-5">
            <h1 className={`${antonio.className} text-[#7a7a7a] font-semibold text-xl my-2`}>RECOMENDAÇÕES</h1>
            <ul className="flex overflow-x-scroll gap-[15px]">
                {data.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} type="movie"/>
                ))}
            </ul>
        </section>
    )
}