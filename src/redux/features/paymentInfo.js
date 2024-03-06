import { createSlice } from '@reduxjs/toolkit'

const paymentInfoSlice = createSlice({
    name: 'paymentInfo',
    initialState: [],
    reducers: {
        setPaymentInfo: (state, action) => {
            return action.payload
        },
        addPaymentInfo: (state, action) => {
            return [...state, action.payload]
        },
        removePaymentInfo: (state, action) => {
            return state.filter((a) => a.id !== action.payload)
        },
    },
})

export const { setPaymentInfo, addPaymentInfo, removePaymentInfo } = paymentInfoSlice.actions
export default paymentInfoSlice.reducer
