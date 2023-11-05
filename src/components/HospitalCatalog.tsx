'use client'
import Link from "next/link";
import Card from './Info'
import { useReducer } from "react";
import { GetHospitalsResponse } from "@/libs/interface";

export default async function HospitalCatalog({getHospitals}: {getHospitals: Promise<GetHospitalsResponse>}) {
    const ratingReducer = (state: Map<string, number | null>, action: {type: string, hName: string, score: number | null}) => {
        var m = new Map(state);
        switch (action.type) {
            case 'add':
                m.set(action.hName, action.score ?? 0);
                return m;
            case 'remove':
                m.delete(action.hName);
                return m;
            default:
                return state
        }
    }

    let mapReview = new Map<string, number | null>();
    const [allReviews, dispatchReview] = useReducer(ratingReducer, mapReview)

    const result = await getHospitals;
    let hospitals = result.data;

    return (
        <div>
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent:"space-around", alignContent: "space-around" }}>
                {hospitals.map((h) => (
                    <Link key={h.id} href={`/hospital/${h.id}`}>
                        <div>
                            <Card hospitalName={h.name} hospitalImage={h.picture}
                                // onChangeReview={(name: string, rating: number | null) => dispatchReview({type:'add', hName: name, score: rating})}
                                reviewScore={allReviews.get(h.name) ?? 0}
                            />
                        </div>
                    </Link>
                ))}
            </div>

            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent:"space-around", alignContent: "space-around" }}>
                <h1> รีวิวโรงพยาบาล </h1>
                <div>
                    {Array.from(allReviews).map(([name, rating]) => {
                        return (
                            <div key={name} onClick={()=> dispatchReview({type:'remove', hName: name, score: rating })}>
                                <p> {name} มีคะแนนรีวิวเท่ากับ {rating} </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}