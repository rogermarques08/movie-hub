import { LuSearch } from 'react-icons/lu'

export default function SearchInput() {
    return (
        <section className="flex justify-between items-center p-2 bg-stone-800/30 w-[280px] h-[40px] rounded-2xl backdrop-blur-sm">
            <input type="text" placeholder="Pesquise por um filme" className='bg-transparent p-2 w-11/12 rounded-3xl placeholder:text-gray-500'/>
            <LuSearch className='text-lg text-white' />
        </section>
    )
}