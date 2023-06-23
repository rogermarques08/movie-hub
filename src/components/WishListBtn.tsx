"use client"
import useWishList, { WishList } from "@/hooks/useWishList"
import { BsBookmark, BsBookmarkFill } from "react-icons/bs"

interface WishListBtnnProps {
    movie: WishList
}

export default function WishListBtn({ movie }: WishListBtnnProps) {
    const { addWishList, isOnList, removeWishList } = useWishList()

    return (
        <>
            {isOnList(movie.id) ? (
                <button
                    onClick={() => removeWishList(movie.id)}
                    className="flex items-center gap-3 rounded-md p-2 mt-3 font-semibold bg-red-600"
                >
                    <BsBookmarkFill />

                    Remover da Lista de Desejos
                </button>
            ) : (
                <button
                    onClick={() => addWishList(movie)}
                    className="flex items-center gap-3 rounded-md p-2 mt-3 font-semibold bg-green-700"
                >
                    <BsBookmark />

                    Adiconar na Lista de Desejos
                </button>
            )}
        </>
    )
}