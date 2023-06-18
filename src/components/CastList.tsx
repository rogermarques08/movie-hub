import getData, { CastData, CastResponse } from "@/api/getData"
import ActorCard from "./ActorCard"
import { antonio } from "./Logo"

interface CastListProps {
    url: string
}
export default async function CastList({ url }: CastListProps) {
    let data: CastData[] = []

    try {
        data = (await getData<CastResponse>(url)).cast
    } catch (error) {
        throw new Error('Failed to fetch data')
    }

    return (
        <section className="px-5">
            <h1 className={`${antonio.className} text-[#7a7a7a] font-semibold text-xl my-2`}>ELENCO PRINCIPAL</h1>
            <ul className="flex gap-5 overflow-x-scroll max-w-[800px]">
                {data.slice(0, 10).map((actor) => (
                    <ActorCard key={actor.id} actor={actor}/>
                ))}
            </ul>
        </section>
    )
}