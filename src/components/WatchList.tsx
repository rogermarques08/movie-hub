import { WatchList } from "@/hooks/useWatchList"
import Image from "next/image"
import Link from "next/link"

interface WatchListProps {
    watchList: WatchList[]
}
export default function WatchList({watchList} : WatchListProps){
    return(
        <ul className="flex flex-wrap justify-center items-center gap-2 mt-5">
                {watchList.map((movie) => (
                    <li key={movie.id}>
                        <Link href={`/media/${movie.type}/${movie.id}`}>
                            <Image
                                src={`https://image.tmdb.org/t/p/w500${movie.img}`}
                                alt={movie.title}
                                width={120}
                                height={170}
                                priority
                                className="rounded-2xl"
                            />
                        </Link>
                    </li>

                ))}
            </ul>
    )
}