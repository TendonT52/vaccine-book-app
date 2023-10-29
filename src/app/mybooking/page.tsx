"use client"
import { useDispatch } from "react-redux"
import { AppDispatch, useAppSelector } from "@/redux/store"
import { cancelBooking } from "@/redux/features/bookSlice"

export default function MyBooking() {
    const dispatch = useDispatch<AppDispatch>()
    const bookItem = useAppSelector((state) => state.reduxPersistReducer.bookSlice.item)
    if (bookItem.firstName === "" && bookItem.lastName === "" && bookItem.id === "" && bookItem.hospital === "" && bookItem.reserveDate === "") {
        return (
            <div className="m-20">
                <h1 className="mt-1 text-xl leading-6 text-gray-600"> No Vaccine Booking </h1>
            </div>
        )
    }

    return (
        <div className="m-20">
            <h1 className="mt-5 text-xl leading-6 text-gray-600"> Your booking information </h1>
            <div className=" bg-red-200">
                <p> ชื่อจริง: {bookItem.firstName} </p>
                <p> ชื่อนามสกุล: {bookItem.lastName} </p>
                <p> บัตรประจำตัวประชาชน: {bookItem.id} </p>
                <p> ชื่อโรงพยาบาล: {bookItem.hospital} </p>
                <p> วันที่จอง: {bookItem.reserveDate} </p>
            </div>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={() => dispatch(cancelBooking(bookItem))}> Cancel Booking </button>
        </div>
    )
}