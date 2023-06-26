"use client"
import { FilmData } from "@/api/getData";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ResultcardProps {
    movie: FilmData
}
export default function Resultcard({movie}: ResultcardProps) {
    const [src, setSrc] = useState(`https://image.tmdb.org/t/p/w500${movie.poster_path}`)

    return (
        <Link href={`/media/movie/${movie.id}`} >
            <Image
                src={src}
                alt={movie.title}
                placeholder='blur'
                blurDataURL='https://img.freepik.com/free-photo/abstract-luxury-blur-grey-color-gradient-used-as-background-studio-wall-display-your-products_1258-54073.jpg'
                onError={() => setSrc("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSWSxsVpAmqb_T7CLGolJ193Bw9xh7X7r0yQ&usqp=CAU")}
                width={100}
                height={150}
                priority
                className='fade-intro rounded-2xl h-[150px] object-cover'
            />
        </Link>
    )
}