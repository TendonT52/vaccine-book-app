import styles from './info.module.css'

export default function Info() {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div className={styles.infoContainer}>
                <h2> สิ่งที่ควรรู้ก่อนฉีดวัคซีน ฉบับพื้นฐาน </h2>
                <br></br>
                <div className={styles.infoData}>
                    <ol className={styles.topic}>
                        <li> คืนก่อนฉีดวัคซีนควรพักผ่อนให้เพียงพอ </li>
                        <li> ศึกษารายละเอียดเกี่ยวกับวัคซีน รวมไปถึงผลกระทบต่าง ๆ ที่อาจเกิดขึ้นหลังฉีดวัคซีน </li>
                        <li> กรณีมีโรคประจำตัว โปรดแจ้งพนักงานก่อนทำการฉีดวัคซีนทุกครั้ง </li>
                        <li> หลังฉีดวัคซีน ควรพักผ่อนให้เพียงพอ และดื่มน้ำมากๆ </li>
                        <li> หากมีอาการผิดปกติหลังฉีดวัคซีน โปรดแจ้งพนักงานทันทีผ่านสายด่วน #1234 </li>
                    </ol>
                    <br></br>
                    <p> หมายเหตุ: กรณีต้องการใบรับรองการฉีดวัคซีน โปรดแจ้งเจ้าหน้าที่ ณ จุดจัดบัตรคิว</p>
                </div>
            </div>
        </div>
    )
}