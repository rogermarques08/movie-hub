'use client'

import Link from "next/link"

export default function Error({
    error,
    reset,
}: {
    error: Error
    reset: () => void
}) {
    return (
        <div className="flex flex-col items-center text-white">
            <h2 className="text-lg font-semibold">Algo de errado aconteceu ao tentar carregar esta página!</h2>
            <p className="my-2">Tente carrega ou voltar a 
                <Link href='/' className="underline ml-1">
                    tela inicial
                </Link>
            </p>
            <button
                className="font-semibold bg-stone-800/30 p-2 rounded-2xl backdrop-blur-sm"
                onClick={() => reset()}
            >
                Tentar novamente
            </button>
        </div>
    )
}