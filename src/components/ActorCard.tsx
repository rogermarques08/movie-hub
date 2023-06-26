"use client"
import { CastData } from "@/api/getData";
import Image from "next/image";
import { useState } from "react";

export default function ActorCard({ actor }: { actor: CastData }) {
    const [src, setSrc] = useState(`https://image.tmdb.org/t/p/w500${actor.profile_path}`)

    return (
        <li key={actor.id} className="flex flex-col w-[80px]">
            <Image
                src={src}
                alt={actor.original_name}
                placeholder="blur"
                blurDataURL="https://img.freepik.com/free-photo/abstract-luxury-blur-grey-color-gradient-used-as-background-studio-wall-display-your-products_1258-54073.jpg"
                onError={() => setSrc("https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg")}
                width={80}
                height={80}
                className="rounded-md h-[120px] object-cover"
            />
            <h1 className="text-white font-semibold text-md truncate w-[80px]">{actor.original_name}</h1>
            <h2 className="text-[#7a7a7a] mt-[-5px] truncate w-[80px]">{actor.character}</h2>
        </li>
    )
}