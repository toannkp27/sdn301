import { createSlice } from '@reduxjs/toolkit'
const initialState = { apartment_id: null, department_id: null }

export const moreItemSlice = createSlice({
    name: 'moreItem',
    initialState,
    reducers: {
        setMoreItem: (state, action) => {
            state.apartment_id = action.payload.apartment_id
            state.department_id = action.payload.department_id
        },
        clearMoreItem: (state) => {
            state.apartment_id = null
            state.department_id = null
        },
    },
})

export const { setMoreItem, clearMoreItem } = moreItemSlice.actions
export default moreItemSlice.reducer
