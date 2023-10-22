'use client'
import { addBooking } from "@/redux/features/bookSlice"
import { AppDispatch } from "@/redux/store"
import { Select, MenuItem } from "@mui/material"
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import dayjs, { Dayjs } from "dayjs"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { BookingItem } from "../../interface"
import Link from "next/link"

export default function FormSection() {
    const [id, setId] = useState<string>("")
    const [fName, setFName] = useState<string>("")
    const [lName, setLName] = useState<string>("")
    const [hName, setHName] = useState<string>("")
    const [rDate, setRDate] = useState<Dayjs | null>(null)

    const dispatch = useDispatch<AppDispatch>()
    const bookVaccine = () => {
        if (fName && lName && id && hName && dayjs(rDate).format("DD/MM/YYYY")) {
            const booking: BookingItem = {
                firstName: fName,
                lastName: lName,
                id: id,
                hospital: hName,
                reserveDate: dayjs(rDate).format("DD/MM/YYYY")
            }
            dispatch(addBooking(booking))
        } else {
            alert("กรุณากรอกข้อมูลให้ครบถ้วน")
        }
    }
    return (
        <form className="m-7">
                <div className="sm:col-span-4">
                    <div className="sm:col-span-3 mb-5">
                        <label className="block text-sm font-medium leading-6 text-gray-900">กรุณาใส่ชื่อ</label>
                        <div className="mt-2">
                            <input type="text" name="first-name" id="first-name" placeholder="ชื่อและนามสกุล"
                            className="indent-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                            placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            onChange={(e) => setFName(e.target.value)} value={fName} />
                        </div>
                    </div>
                    <div className="sm:col-span-3 mb-5">
                        <label className="block text-sm font-medium leading-6 text-gray-900">กรุณาใส่นามสกุล</label>
                        <div className="mt-2">
                            <input type="text" name="last-name" id="last-name" placeholder="ชื่อและนามสกุล"
                            className="indent-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                            placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            onChange={(e) => setLName(e.target.value)} value={lName} />
                        </div>
                    </div>

                    <div className="sm:col-span-4 mb-5">
                        <label className="block text-sm font-medium leading-6 text-gray-900">กรุณาใส่หมายเลขบัตรประชาชน</label>
                        <div className="mt-2">
                            <input id="id-card" name="id-card" type="text" placeholder="หมายเลขบัตร"
                            className="indent-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                            placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            onChange={(e) => setId(e.target.value)} value={id} />
                        </div>
                    </div>
                    <div className="sm:col-span-4 mb-5">
                        <label className="block text-sm font-medium leading-6 text-gray-900">กรุณาเลือกโรงพยาบาล</label>
                        <Select variant="standard" name="hospital-select" id="hospital-select"
                            defaultValue={""} onChange={(e) => setHName(e.target.value)}
                        >
                            <MenuItem value={"Chulalongkorn Hospital"}>Chulalongkorn Hospital</MenuItem>
                            <MenuItem value={"Rajavithi Hospital"}>Rajavithi Hospital</MenuItem>
                            <MenuItem value={"Thammasat University Hospital"}>Thammasat University Hospital</MenuItem>
                        </Select>
                    </div>

                    <div className="sm:col-span-4">
                        <label className="block text-sm font-medium leading-6 text-gray-900">  กรุณาเลือกวันที่ต้องการจอง </label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker value={rDate} onChange={(newValue) => setRDate(newValue)} />
                        </LocalizationProvider>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <Link href="/mybooking">
                        <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm
                        hover:indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-900"
                        onClick={bookVaccine}>
                            ส่งคำตอบ
                        </button>
                    </Link>
                </div>
            </form>
    )
}