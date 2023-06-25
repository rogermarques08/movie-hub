"use client"
import getData, { TrailerResponse } from '@/api/getData';
import YouTube from 'react-youtube';
import { antonio } from './Logo';

export default async function MovieTrailer({ movieId }: { movieId: number }) {
    const data = await getData<TrailerResponse>(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)

    return (
        <div className='px-5 max-w-[700px]'>
            <h1 className={`${antonio.className} text-[#7a7a7a] font-semibold text-xl`}>Trailer</h1>
            <YouTube
                videoId={data.results[data.results.length - 1].key}
                className='mt-3'
                opts={{
                    width: '100%',
                }} />
        </div>
    );
};
