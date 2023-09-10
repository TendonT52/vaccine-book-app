'use client'
import Card from './Info'
import { useReducer } from "react";

export default function CardPanel() {
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
    mapReview.set("Chulalongkorn Hospital", 0);
    mapReview.set("Rajavithi Hospital", 0);
    mapReview.set("Thammasat University Hospital", 0);
    const [allReviews, dispatchReview] = useReducer(ratingReducer, mapReview)

    return (
        <div>
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent:"space-around", alignContent: "space-around" }}>
                <Card hospitalName="Chulalongkorn Hospital" hospitalImage='/img/chula.jpg'
                    onChangeReview={(name: string, rating: number | null) => dispatchReview({type:'add', hName: name, score: rating})}
                    reviewScore={allReviews.get("Chulalongkorn Hospital") ?? 0}
                />
                <Card hospitalName="Rajavithi Hospital" hospitalImage='/img/rajavithi.jpg'
                    onChangeReview={(name: string, rating: number | null) => dispatchReview({type:'add', hName: name, score: rating})}
                    reviewScore={allReviews.get("Rajavithi Hospital") ?? 0}
                />
                <Card hospitalName="Thammasat University Hospital" hospitalImage='/img/thammasat.jpg'
                    onChangeReview={(name: string, rating: number | null) => dispatchReview({type:'add', hName: name, score: rating})}
                    reviewScore={allReviews.get("Thammasat University Hospital") ?? 0}
                />
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
