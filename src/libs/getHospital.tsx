import { GetHospitalResponse } from "./interface"

export default async function getHospital(id: string): Promise<GetHospitalResponse> {
    const response = await fetch(`http://localhost:5000/api/v1/hospitals/${id}`, {next: {tags: ['hospitals']}})
    if (!response.ok) {
        throw new Error("ERROR: Cannot get hospital data.")
    }

    return await response.json()
}