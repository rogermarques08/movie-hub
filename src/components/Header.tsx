import Link from "next/link";
import Logo from "./Logo";
import SearchInput from "./SearchInput";

export default function Header() {
    return (
        <header className='flex justify-center min-[695px]:justify-between gap-4 px-6 py-4 items-center flex-wrap'>
            <Logo />
            <Link
                href='/watch-list'
                className="font-semibold text-white text-center bg-stone-800/30 p-2 rounded-2xl backdrop-blur-sm"
            >
                Assistir mais tarde
            </Link>
            <SearchInput />
        </header>
    )
}