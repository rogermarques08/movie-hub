"use client"

import WatchList from "@/components/WatchList"
import useWatchList from "@/hooks/useWatchList"

export default function WatchListPage() {
    const { watchList } = useWatchList()

    return (
        <main className="px-5">
            <h1 className="text-white text-3xl font-bold text-center">Assistir mais tarde</h1>
            {(watchList.length === 0) ? (
                <h1 className="text-white font-semibold text-center mt-5">Voçê Ainda Não Adicionou Nenhum Item a Sua Lista</h1>
            ): (
                <WatchList watchList={watchList} />
            )}
        </main>
    )
} 