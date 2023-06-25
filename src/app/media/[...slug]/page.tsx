import getData, { FilmDataDetails } from "@/api/getData"
import BannerImage from "@/components/BannerImage"
import CastList from "@/components/CastList"
import Details from "@/components/Details"
import MovieTrailer from "@/components/MovieTrailer"
import RecomendationList from "@/components/RecomendationList"

export default async function MovieDetails({ params }: { params: { slug: string[] } }) {
    const slugs = params.slug
    const movie = await getData<FilmDataDetails>(`https://api.themoviedb.org/3/${slugs[0]}/${slugs[1]}?language=pt-BR`)
    return (
        <main>
            <BannerImage url={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
            <Details movie={movie} />
            <MovieTrailer movieId={movie.id} />
            <CastList url={`https://api.themoviedb.org/3/movie/${movie.id}/credits?language=pt-BR`} />
            <RecomendationList url={`https://api.themoviedb.org/3/movie/${movie.id}/recommendations?language=en-US&page=1`} />
        </main>
    )
}