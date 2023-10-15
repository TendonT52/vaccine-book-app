import FormSection from "@/components/FormSection";
import getUserProfile from "@/libs/getUserProfile";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Booking() {
    const session = await getServerSession(authOptions)
    let data = null
    if (session) {
        data = await getUserProfile(session.user.token)
    }

    return (
        <div className="bg-slate-100 mt-20 h-screen">
            <h1 className="m-7 font-bold">Booking Vaccine System</h1>
            <div className="m-7">
                {session?
                <div className="bg-blue-300 p-5">
                    <h2 className="underline"> User Info! </h2>
                    <div>
                        <div> ชื่อ: {data.data.name} </div>
                        <div> อีเมล: {data.data.email} </div>
                        <div> เบอร์โทร: {data.data.tel} </div>
                        <div> เป็นสมาชิกตั้งแต่: {data.data.createdAt.toString()} </div>
                    </div>
                </div>
                : <></>}
                <h2> Form Booking </h2>
                <FormSection />
            </div>
        </div>
    )
}