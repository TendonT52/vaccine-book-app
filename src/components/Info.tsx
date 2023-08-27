import styles from './info.module.css'
import Image from 'next/image'

export default function Info({hospitalName, hospitalImage}: {hospitalName: string, hospitalImage: string}) {
    return (
        <div className={styles.infoContainer}>
            <div className='w-full h-4/6 relative'>
                <Image src={hospitalImage} alt="Hospital Pic" objectFit='cover' fill={true} />
            </div>
            <div className='w-full h-2/6 flex items-center justify-center text-2xl'>
                <h2> {hospitalName} </h2>
            </div>
        </div>
    )
}