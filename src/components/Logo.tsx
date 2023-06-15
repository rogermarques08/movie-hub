import { Rubik_Vinyl } from 'next/font/google';
import Link from "next/link";

const rubik_Vinyl = Rubik_Vinyl({
    weight: ['400'],
    subsets: ['latin']
}) 

export default function Logo() {
    return (
        <Link href='/' className={`${rubik_Vinyl.className} text-white`}>
            <p className='text-[35px]'>Movie HUB</p>
        </Link>
    )
}