import { useEffect, useState } from "react"

interface Banner {
    id: number,
    type: string
    title: string,
    img: string,
    desc: string
}

const mainMovies: Banner[] = [
    { id: 677179, type: "movie", title: "Creed III", img: "https://images8.alphacoders.com/130/1306116.jpeg", desc: "Depois de dominar o mundo do boxe, Adonis Creed tem prosperado em sua carreira e vida familiar. Quando um amigo de infância e ex-prodígio do boxe, Damien Anderson" },
    { id: 157336, type: "movie", title: "Interestelar", img: "https://wallpapers.com/images/featured/interstellar-d5hpgadclxszmpeh.webp", desc: "As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial" },
    { id: 324857, type: "movie", title: "Homem-Aranha: No Aranhaverso", img: "https://images7.alphacoders.com/979/979511.jpg", desc: "Miles Morales é um jovem negro do Brooklyn que se tornou o Homem-Aranha inspirado no legado de Peter Parker, já falecido. Entretanto, ao visitar o túmulo de seu ídolo em uma noite chuvosa" },
    { id: 245891, type: "movie", title: "John Wick", img: "https://images6.alphacoders.com/637/637352.jpg", desc: "John Wick é um lendário assassino de aluguel aposentado, lidando com o luto após perder o grande amor de sua vida. Quando um gângster invade sua casa, mata seu cachorro" },
    { id: 324786, type: "movie", title: "Até o Último Homem", img: "https://images8.alphacoders.com/724/724296.png", desc: "Desmond T. Doss, foi o médico do Exército Americano da Segunda Guerra Mundial, que serviu durante a Batalha de Okinawa, se recusando a matar pessoas, tornando-se o primeiro homem" }
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