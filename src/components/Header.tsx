import Logo from "./Logo";
import SearchInput from "./SearchInput";

export default function Header() {
    return (
        <header className='flex justify-center min-[537px]:justify-between gap-4 px-6 py-4 items-center flex-wrap'>
            <Logo />
            <SearchInput />
        </header>
    )
}