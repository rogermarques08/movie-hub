import { FilmData } from "@/api/getData";
import Image from "next/image";

interface MovieCardProps {
    movie: FilmData
}

export default function MovieCard({ movie }: MovieCardProps) {
    
    return (
        <li className="flex flex-col p-2 w-[150px]">
            <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width={150}
                height={200}
                priority
                className="rounded-2xl"
            />
            <p className="truncate w-full text-start text-white font-bold">{movie.title}</p>
        </li>
    )
}