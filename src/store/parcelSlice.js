import { createSlice } from "@reduxjs/toolkit"

const initialState = {}

const parcelSlice = createSlice({
    name: 'parcel',
    initialState,
    reducers: {
        addParcel(state, action) {
            return {
                ...state,
                ...action.payload
            }
        }
    }
})

export const { addParcel } = parcelSlice.actions;
export default parcelSlice.reducer;