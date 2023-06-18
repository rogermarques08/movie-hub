import { CastData } from "@/api/getData";
import Image from "next/image";

export default function ActorCard({actor}: {actor: CastData}) {
    return (
        <li key={actor.id} className="flex flex-col w-[80px]">
            <Image
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.original_name}
                width={80}
                height={80}
                className="rounded-md"
            />
            <h1 className="text-white font-semibold text-md truncate w-[80px]">{actor.original_name}</h1>
            <h2 className="text-[#7a7a7a] mt-[-5px] truncate w-[80px]">{actor.character}</h2>
        </li>
    )
}