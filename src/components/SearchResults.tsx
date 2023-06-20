import { FilmData } from '@/api/getData';
import Image from 'next/image';
import Link from 'next/link';
import { MouseEventHandler, memo } from 'react';
import { IoMdClose } from 'react-icons/io';

interface SearchResultsProps {
    movies: FilmData[];
    isListVisible: boolean;
    setListVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

function SearchResults({ movies, isListVisible, setListVisible }: SearchResultsProps) {
    const handleClick: MouseEventHandler<HTMLLIElement> = () => {
        setListVisible(false);
    };

    return (
        <>
            {movies.length > 0 && isListVisible && (
                <ul className='absolute top-[63px] w-[280px] h-[400px] bg-stone-800/30 backdrop-blur-sm overflow-y-scroll rounded-3xl flex flex-wrap justify-center gap-2 p-2 max-[475px]:mt-[60px]'>
                    <li
                        className='fixed right-1 text-white text-[24px] cursor-pointer'
                        onClick={() => {setListVisible(false)}}
                    >
                        <IoMdClose />
                    </li>
                    {movies.map((movie) => (
                        <li key={`result-${movie.id}`} onClick={handleClick}>
                            <Link href={`/movie/${movie.id}`}>
                                <Image
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                    width={100}
                                    height={150}
                                    priority
                                    className='rounded-2xl'
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}

export default memo(SearchResults)
