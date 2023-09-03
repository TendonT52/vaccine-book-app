import InteractiveCard from './InteractiveCard'
import Image from 'next/image'

export default function Card({hospitalName, hospitalImage}: {hospitalName: string, hospitalImage: string}) {
    return (
        <InteractiveCard>
            <div className='"p-5 w-96 h-80 rounded-lg"'>
                <div className='w-full h-4/6 relative'>
                    <Image src={hospitalImage} alt="Hospital Pic" objectFit='cover' fill={true} />
                </div>
                <div className='w-full h-2/6 flex items-center justify-center text-2xl'>
                    <h2> {hospitalName} </h2>
                </div>
            </div>
        </InteractiveCard>
    )
}