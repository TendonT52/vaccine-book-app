export interface GetHospitalsResponse {
    count: number,
    data: Hospital[],
    pagination: any,
    success: boolean,
}

export interface GetHospitalResponse {
    data: Hospital,
    success: boolean,
}

export interface Hospital {
    id: string,
    name: string,
    address: string,
    district: string,
    province: string,
    postalcode: string,
    tel: string,
    picture: string,
}