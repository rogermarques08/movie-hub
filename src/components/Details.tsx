import { FilmDataDetails } from "@/api/getData"
import getRunTime from "@/services/getRunTime"
import GenresList from "./GenresList"
import { antonio } from "./Logo"
import WishListBtn from "./WishListBtn"

interface DetailsProps {
    movie: FilmDataDetails
}                                         
export default function Details(props: DetailsProps) {
    const { movie } = props

    return (
        <section className="p-5 mt-[170px] text-white">
            <h1 className={`${antonio.className} font-bold text-3xl`}>{movie.title}</h1>
            <h2 className="my-3 mt-0 text-gray-300">{movie?.tagline}</h2>
            <p>{getRunTime(movie.runtime)}</p>
            <GenresList genres={movie.genres} />
            <div className="max-w-[800px]">
                <h3 className={`${antonio.className} text-[#7a7a7a] font-semibold text-xl my-2`}>SINOPSE</h3>
                <p>{movie.overview || 'O filme não tem descrição'}</p>
            </div>
            <WishListBtn  movie={{id: movie.id, img: movie.poster_path, type: "movie", title: movie.title}}/>
        </section>
    )
}