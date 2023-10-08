import { GetHospitalsResponse } from "./interface"

export default async function getHospitals(): Promise<GetHospitalsResponse> {
    await new Promise((resolve) => setTimeout(resolve, 5000))

    const response = await fetch('http://localhost:5001/api/v1/hospitals')
    if (!response.ok) {
        throw new Error("ERROR: Cannot get hospitals data.")
    }

    return await response.json()
}