export interface GetHospitalsResponse {
    count: number,
    data: Hospital[],
    pagination: any,
    sucess: boolean,
}

export interface GetHospitalResponse {
    data: Hospital,
    sucess: boolean,
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