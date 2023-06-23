"use client"
import useWatchList, { WatchList } from "@/hooks/useWatchList"
import { BsBookmark, BsBookmarkFill } from "react-icons/bs"

interface WishListBtnnProps {
    movie: WatchList
}

export default function WishListBtn({ movie }: WishListBtnnProps) {
    const { addWatchList,watchList, isOnList, removeWatchList } = useWatchList()

    return (
        <>
            {watchList.some((item) => item.id === movie.id) ? (
                <button
                    onClick={() => removeWatchList(movie.id)}
                    className="flex items-center gap-3 rounded-md p-2 mt-3 font-semibold bg-red-600"
                >
                    <BsBookmarkFill />

                    Remover da Lista de Desejos
                </button>
            ) : (
                <button
                    onClick={() => addWatchList(movie)}
                    className="flex items-center gap-3 rounded-md p-2 mt-3 font-semibold bg-green-700"
                >
                    <BsBookmark />

                    Adiconar na Lista de Desejos
                </button>
            )}
        </>
    )
}