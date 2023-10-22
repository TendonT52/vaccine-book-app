import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interface";

type BookingState = {
    item: BookingItem;
};

const initialState: BookingState = {
    item: {
        firstName: "",
        lastName: "",
        id: "",
        hospital: "",
        reserveDate: "",
    }
};

export const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        addBooking: (state, action:PayloadAction<BookingItem>) => {
            state.item.firstName = action.payload.firstName;
            state.item.lastName = action.payload.lastName;
            state.item.id = action.payload.id;
            state.item.hospital = action.payload.hospital;
            state.item.reserveDate = action.payload.reserveDate;
        },

        cancelBooking: (state, action:PayloadAction<BookingItem>) => {
            state.item.firstName = "";
            state.item.lastName = "";
            state.item.id = "";
            state.item.hospital = "";
            state.item.reserveDate = "";
        }
    },
});

export const { addBooking, cancelBooking } = bookSlice.actions;
export default bookSlice.reducer;