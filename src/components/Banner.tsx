"use client"

import useHandleBanner from '@/hooks/useHandleBanner'
import { Antonio } from 'next/font/google'
import BannerImage from './BannerImage'

const antonio = Antonio({
    weight: ['100', '300', '400'],
    subsets: ['latin']
})

export default function Banner() {
    const { movie } = useHandleBanner()
    return (
        <>
            <BannerImage url={movie?.img} />
            <h1 id="teste" className={`${antonio.className} text-[35px] font-bold mt-[170px] min-[537px]:mt-[220px] text-white p-5`}>{movie.title}</h1>
        </>
    )
}