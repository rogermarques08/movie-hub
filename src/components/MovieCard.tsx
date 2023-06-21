import { FilmData } from "@/api/getData";
import Image from "next/image";
import Link from "next/link";

interface MovieCardProps {
    movie: FilmData,
    type: string
}

export default function MovieCard({ movie, type }: MovieCardProps) {
    console.log(type)
    return (
        <li className="flex flex-col p-2 w-[150px]">
            <Link href={`/media/${type}/${movie.id}`}>
                <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
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