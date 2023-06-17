import { Antonio } from 'next/font/google';
import Link from "next/link";

export const antonio = Antonio({
    weight: ['400'],
    subsets: ['latin']
}) 

export default function Logo() {
    return (
        <Link href='/' className={`${antonio.className} text-white`}>
            <p className='text-[35px]'>Movie HUB</p>
        </Link>
    )
}