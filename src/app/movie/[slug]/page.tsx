import getData, { FilmDataDetails } from "@/api/getData"
import BannerImage from "@/components/BannerImage"
import Details from "@/components/Details"

export default async function MovieDetails({ params }: { params: { slug: string } }) {
    const movie = await getData<FilmDataDetails>(`https://api.themoviedb.org/3/movie/${params.slug}?language=pt-BR`)

    return (
        <main>
            <BannerImage url={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
            <Details movie={movie} />
        </main>
    )
}