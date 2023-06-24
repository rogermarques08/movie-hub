import MovieList from "./MovieList"

export default async function GlobalMovieList() {
    return (
        <div className="px-5 mt-[30px]">
            <MovieList url="https://api.themoviedb.org/3/trending/movie/day?language=pt-BR" title="Populares Hoje" type="movie" />
            <MovieList url="https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1" title="Filmes Mais Bem Avaliados" type="movie" />
            <MovieList url="https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1" title="Filmes Populares" type="movie" />
            <MovieList url="https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1" title="Próximos Lançametos" type="movie" />
            {/* <MovieList url="https://api.themoviedb.org/3/tv/top_rated?language=pt-BR&page=1" title="Séries Mais Bem Avaliadas" type="tv" /> */}
        </div>
    )
}