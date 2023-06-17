import { useEffect, useState } from "react"

interface Banner {
    title: string,
    img: string
}

const mainMovies: Banner[] = [
    { title: "Arcane", img: "https://images4.alphacoders.com/119/1194463.jpg" },
    { title: "Interestelar", img: "https://wallpapers.com/images/featured/interstellar-d5hpgadclxszmpeh.webp" },
    { title: "Homem-Aranha: No Aranhaverso", img: "https://images7.alphacoders.com/979/979511.jpg" },
    { title: "John Wick", img: "https://images6.alphacoders.com/637/637352.jpg" },
    {title: "Até o Último Homem", img:"https://images8.alphacoders.com/724/724296.png"}
]

export default function useHandleBanner() {
    const [movie, setMovie] = useState(mainMovies[0])

    useEffect(() => {
        let index = 1
        setInterval(() => {
            setMovie(mainMovies[index])
            index += 1

            if (index >= mainMovies.length) {
                index = 0;
            }
        }, 8000)
    }, [])

    return {
        movie
    }
}