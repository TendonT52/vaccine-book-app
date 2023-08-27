import TopMenuItem from './TopMenuItem'
import Image from 'next/image'

export default function TopMenu() {
    return (
        <div className="h-20 bg-green-100 fixed top-0 left-0 right-0 z-30 border-gray-300 flex justify-start flex-row-reverse items-center">
            <Image src='/img/logo.png' className="w-auto h-full" alt="logo" width={100} height={100} />
            <TopMenuItem title='Booking Vaccine' pageRef='/booking' />
        </div>
    )
}