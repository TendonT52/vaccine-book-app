'use client'
import { Select, MenuItem } from "@mui/material"
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"

export default function FormSection() {
    return (
        <form className="m-7">
                <div className="sm:col-span-4">
                    <div className="sm:col-span-3 mb-5">
                        <label className="block text-sm font-medium leading-6 text-gray-900">กรุณาใส่ชื่อ-นามสกุล</label>
                        <div className="mt-2">
                            <input type="text" name="first-name" id="first-name" placeholder="ชื่อและนามสกุล"
                            className="indent-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                            placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div className="sm:col-span-4 mb-5">
                        <label className="block text-sm font-medium leading-6 text-gray-900">กรุณาใส่หมายเลขบัตรประชาชน</label>
                        <div className="mt-2">
                            <input id="id-card" name="id-card" type="text" placeholder="หมายเลขบัตร"
                            className="indent-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                            placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div className="sm:col-span-4 mb-5">
                        <label className="block text-sm font-medium leading-6 text-gray-900">กรุณาเลือกโรงพยาบาล</label>
                        <Select variant="standard" name="hospital-select" id="hospital-select" defaultValue={"Chulalongkorn Hospital"}>
                            <MenuItem value={"Chulalongkorn Hospital"}>Chulalongkorn Hospital</MenuItem>
                            <MenuItem value={"Rajavithi Hospital"}>Rajavithi Hospital</MenuItem>
                            <MenuItem value={"Thammasat University Hospital"}>Thammasat University Hospital</MenuItem>
                        </Select>
                    </div>

                    <div className="sm:col-span-4">
                        <label className="block text-sm font-medium leading-6 text-gray-900">  กรุณาเลือกวันที่ต้องการจอง </label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker />
                        </LocalizationProvider>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm
                    hover:indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-900">
                        ส่งคำตอบ
                    </button>
                </div>
            </form>
    )
}