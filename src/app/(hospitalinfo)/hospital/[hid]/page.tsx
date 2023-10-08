import getHospital from "@/libs/getHospital"

export default async function HospitalItem({params}: {params : {hid: string}}) {
    const result = await getHospital(params.hid)
    const detail = result.data

    return (
        <div className="w-screen my-20">
            <h1 className="text-lg font-medium text-blue-600"> This Hospital ID is {params.hid} </h1>
            <div className="flex flex-row items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    <img src={detail.picture} className="w-100 h-100" alt="Hospital Picture" />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="text-md mx-5 text-rose-700"> {detail.name} </div>
                    <div className="text-md mx-5 text-rose-700"> {detail.address} </div>
                    <div className="text-md mx-5 text-rose-700"> {detail.district} </div>
                    <div className="text-md mx-5 text-rose-700"> {detail.province} </div>
                    <div className="text-md mx-5 text-rose-700"> {detail.postalcode} </div>
                    <div className="text-md mx-5 text-rose-700"> {detail.tel} </div>
                </div>
            </div>
        </div>
    )
}