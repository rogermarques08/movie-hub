import { FilmData } from "@/api/getData"
import useSearch from "@/hooks/useSearch"
import Image from "next/image"
import Link from "next/link"

export default function SearchResults({ movies }: { movies: FilmData[] }) {
    const { setMovies } = useSearch()

    return (
        <>
            {movies.length > 0 && (
                <ul
                    className='absolute top-[63px] w-[280px] h-[400px] bg-stone-800/30 backdrop-blur-sm overflow-y-scroll rounded-3xl
            flex flex-wrap justify-center gap-2 p-2 max-[475px]:mt-[60px]
            '
                >
                    {movies.map((movie) => (
                        <li key={`result-${movie.id}`}>
                            <Link href={`/movie/${movie.id}`}>
                                <Image
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                    width={100}
                                    height={150}
                                    priority
                                    className="rounded-2xl"
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}