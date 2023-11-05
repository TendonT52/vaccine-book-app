import { render, screen, waitFor } from '@testing-library/react';
import HospitalCatalog from "@/components/HospitalCatalog";
import { GetHospitalsResponse } from "@/libs/interface";

jest.mock('react', () => {
    const actualReact = jest.requireActual('react');
    return {
        ...actualReact,
        useReducer: (reducer: (state: Map<string, number | null>, action: {
            type: string;
            hName: string;
            score: number | null;
        }) => Map<string, number | null>, mapReview: Map<string, number | null>) => {
            return [mapReview, reducer];
        },
    };
});

jest.mock('next/link', () => {
    return ({ children }: { children: React.ReactNode }) => {
        return children;
    };
});

const mockHospitalJson: GetHospitalsResponse = {
    "success": true,
    "count": 3,
    "pagination": {},
    "data": [
        {
            "name": "Thammasat University Hospital",
            "address": "95 Moo 8 Phaholyothin Frontage Rd, Khlong Nueng",
            "district": "Khlong Luang",
            "province": "Pathum Thani",
            "postalcode": "12120",
            "tel": "029269999",
            "picture": "https://drive.google.com/uc?id=1jit7S4cRATEfDi64YjjK1ur2jGlZYs2e",
            "id": "671fdobf4de660c9b2df8c5a"
        },
        {
            "name": "Vajira Hospital",
            "address": "681 Samsen Road",
            "district": "Dusit",
            "province": "Bangkok",
            "postalcode": "10300",
            "tel": "02-244-3000",
            "picture": "https://drive.google.com/uc?id=1YLciRsApgCzbozEZQpnu_5hz5g0HsIwP",
            "id": "653dff64cd6207e1f53ecc08"
        },
        {
            "name": "TendonLaLa",
            "address": "681 Samsen Road",
            "district": "bbbb",
            "province": "cccc",
            "postalcode": "10300",
            "tel": "0856005639",
            "picture": "https://drive.google.com/uc?id=1YLciRsApgCzbozEZQpnu_5hz5g0HsIwP",
            "id": "6543a7d28dbbdf2afe106261"
        }
    ]
}

describe('Hospital Catalog', () => {
    it('should success return hospital catalog', async () => {
        const hospitalCatalog = await HospitalCatalog({ getHospitals: Promise.resolve(mockHospitalJson) });
        render(hospitalCatalog);

        await waitFor(
            () => {
                const hospitalImages = screen.queryAllByRole('img');
                expect(hospitalImages.length).toBe(3);
            }
        )
    });
})