'use client'
import InteractiveCard from './InteractiveCard'
import Image from 'next/image'
import { useState } from 'react';
import { Rating } from '@mui/material';

export default function Card({hospitalName, hospitalImage, reviewScore, onChangeReview}:
    {hospitalName: string, hospitalImage: string, reviewScore: number | null, onChangeReview: (name: string, rating: number | null) => void}) {
    const [value, setValue] = useState<number | null>(0);
    return (
        <InteractiveCard>
            <div className='p-5 w-96 h-80 rounded-lg'>
                <div className='w-full h-4/6 relative'>
                    <Image src={hospitalImage} alt="Hospital Pic" objectFit='cover' fill={true} />
                </div>
                <div className='w-full h-1/6 flex items-center justify-center text-2xl'>
                    <h2> {hospitalName} </h2>
                </div>
                <div className='w-full h-1/6 flex items-center justify-center' onClick={(e) => e.stopPropagation()}>
                    <Rating
                        name="simple-controlled"
                        value={reviewScore}
                        onChange={(event, newValue) => {
                            event.stopPropagation();
                            setValue(newValue);
                            onChangeReview(hospitalName, newValue);
                        }}
                    />
                </div>
            </div>
        </InteractiveCard>
    )
}