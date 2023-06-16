import MovieList from "./MovieList"

export default async function GlobalMovieList() {
    return (
        <div className="px-5">
            <MovieList url="https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1" title="Filmes Populares" />
            <MovieList url="https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1" title="Mais Bem Avaliados" />
            <MovieList url="https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1" title="Próximos Lançametos" />
        </div>
    )
}