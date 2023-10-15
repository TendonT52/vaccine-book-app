import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import TopMenuItem from './TopMenuItem'
import Image from 'next/image'
import { Link } from '@mui/material'


export default async function TopMenu() {
    const session = await getServerSession(authOptions)
    return (
        <div className="h-20 bg-green-100 fixed top-0 left-0 right-0 z-30 border-gray-300 flex justify-start flex-row-reverse items-center">
            <Image src='/img/logo.png' className="w-auto h-full" alt="logo" width={100} height={100} />
            <TopMenuItem title='Booking Vaccine' pageRef='/booking' />
            {
                session ? <div className='w-4/5'> <Link  href="/api/auth/signout"> Sign Out </Link> </div>
                : <div className='w-4/5'> <Link href="/api/auth/signin"> Sign In </Link> </div>
            }
        </div>
    )
}