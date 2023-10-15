import CardPanel from '@/components/CardPanel'
import HospitalCatalog from '@/components/HospitalCatalog'
import getHospitals from '@/libs/getHospitals'

import { LinearProgress } from '@mui/material'
import { Suspense } from 'react'

export default async function Hospital() {
    const resp = getHospitals()
    return (
        <main className='my-20'>
            {/* <CardPanel /> */}
            <Suspense fallback={<p>Loading... <LinearProgress/> </p>}>
                <HospitalCatalog getHospitals={resp} />
            </Suspense>
        </main>
    )
}