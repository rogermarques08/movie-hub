import { Antonio } from 'next/font/google'

const antonio = Antonio({
    weight: ['100', '300', '400'],
    subsets: ['latin']
  })
export default function MainMovie() {
    return (
        <>
            <section
                className="bg-[url('https://images7.alphacoders.com/979/979511.jpg')] w-full h-[500px] bg-center bg-no-repeat bg-cover
        absolute top-0 -z-10 brightness-50 shadow-[inset_120px_-200px_300px_-25px_#062635]
        "
            >
            </section>
            <h1 className={`${antonio.className} text-[35px] font-bold mt-[170px] min-[537px]:mt-[220px] text-white p-5`}>Homem-Aranha: No Aranhaverso</h1>
        </>
    )
}