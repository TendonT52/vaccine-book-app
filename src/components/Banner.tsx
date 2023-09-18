'use client'
import { useState } from 'react'
import styles from './Banner.module.css'
import Image from 'next/image'

export default function Banner() {
    const covers = ['/img/cover0.jpg', '/img/cover1.jpg', '/img/cover2.jpg', '/img/cover3.jpg']
    const [index, setIndex] = useState(0)
    return (
        <div className={styles.banner} onClick={()=>setIndex(index+1)}>
            <Image src={covers[index%4]} alt="cover" fill={true} objectFit="fill" />
            <div className={styles.bannerText}>
                <h1> บริการฉีดวัคซีนฟรี </h1>
                <h2> วันนี้ - 20 ธันวาคม เวลา: 08:00 - 18:00 น. </h2>
                <h2> สถานที่: ห้างสรรพสินค้าสามย่านมิตรทาวน์ </h2>
                <h2 style={{fontWeight:'bold', color: 'red'}}> กรุณาอย่าลืมนำบัตรประจำตัวประชาชนมา !!! </h2>
            </div>

            <div className={styles.priviledgeText}>
                <p> หมายเหตุ: สงวนสิทธิเฉพาะกลุ่มบุคคลที่ยังไม่ได้รับวัคซีนใดๆเลยตลอด 3 เดือนที่ผ่านมา </p>
            </div>
        </div>
    )
}
