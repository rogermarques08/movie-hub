import { FilmData } from "@/api/getData";
import Image from "next/image";
import Link from "next/link";

interface MovieCardProps {
    movie: FilmData,
    type: string
}

export default function MovieCard({ movie, type }: MovieCardProps) {
    return (
        <li className="fade-intro flex flex-col p-2 w-[150px]">
            <Link href={`/media/${type}/${movie.id}`}>
                <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.poster_path}
                    width={150}
                    height={200}
                    priority
                    className="rounded-2xl"
                />
            </Link>
            {/* <p className="truncate w-full text-start text-white font-bold">{movie.title}</p> */}
        </li>
    )
}