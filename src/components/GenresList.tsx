interface GenresData{
    id: number,
    name: string
}

interface GenresListProps {
    genres: GenresData[]
}
export default function GenresList({genres} : GenresListProps){
    return(
        <ul className="flex gap-2 flex-wrap">
            {genres.map((genre) => (
                <li key={genre.id} className="border border-stone-400 rounded-md p-1 font-semibold bg-800/30 backdrop-blur-sm">
                    <p>{genre.name}</p>
                </li>
            ))}
        </ul>
    )
}