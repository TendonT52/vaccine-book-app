import CardPanel from '@/components/CardPanel'
import HospitalCatalog from '@/components/HospitalCatalog'
import getHospitals from '@/libs/getHospitals'
import { LinearProgress } from '@mui/material'
import { Suspense } from 'react'
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from 'next-auth';
import getUserProfile from '@/libs/getUserProfile';
import AddHospitalForm from '@/components/AddHospitalForm'

export default async function Hospital() {
    const resp = getHospitals()
    const session = await getServerSession(authOptions)
    let profile = null
    if (session) {
        profile = await getUserProfile(session.user.token)
    }
    return (
        <main className='my-20'>
            {/* <CardPanel /> */}
            <Suspense fallback={<p>Loading... <LinearProgress/> </p>}>
                <HospitalCatalog getHospitals={resp} />
                {
                    profile?.data?.role === 'admin'?
                    <AddHospitalForm />
                    : null
                }
            </Suspense>
        </main>
    )
}