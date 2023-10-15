'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import styles from './Banner.module.css'
import Image from 'next/image'
import { useSession } from 'next-auth/react'

export default function Banner() {
    const router = useRouter()
    const covers = ['/img/cover0.jpg', '/img/cover1.jpg', '/img/cover2.jpg', '/img/cover3.jpg']
    const [index, setIndex] = useState(0)
    const {data: session} = useSession()

    return (
        <div className={styles.banner} onClick={()=>setIndex(index+1)}>
            <Image src={covers[index%4]} alt="cover" fill={true} objectFit="fill" />
            {
                session? <div className='absolute z-30 top-15 right-10 text-l p-5 bg-teal-200'> สวัสดี, {session.user?.name} </div>
                : null
            }
            <div className={styles.bannerText}>
                <h1> บริการฉีดวัคซีนฟรี </h1>
                <h2> วันนี้ - 20 ธันวาคม เวลา: 08:00 - 18:00 น. </h2>
                <h2> สถานที่: ห้างสรรพสินค้าสามย่านมิตรทาวน์ </h2>
                <h2 style={{fontWeight:'bold', color: 'red'}}> กรุณาอย่าลืมนำบัตรประจำตัวประชาชนมา !!! </h2>
            </div>

            <div className={styles.priviledgeText}>
                <p> หมายเหตุ: สงวนสิทธิเฉพาะกลุ่มบุคคลที่ยังไม่ได้รับวัคซีนใดๆเลยตลอด 3 เดือนที่ผ่านมา </p>
            </div>

            <div className="absolute bottom-0 right-0 h-36 w-60">
                <button className="bg-pink-200 z-20"
                onClick={(e) => {e.stopPropagation(); router.push('/hospital')}}>
                    คลิกที่นี่ เพื่อดูรายชื่อโรงพยาบาล
                </button>
            </div>
        </div>
    )
}
