import { createSlice } from '@reduxjs/toolkit'
import { checkJson } from '../../utils'
const itemJson = localStorage.getItem('item')
const itemLocal = checkJson(itemJson) || itemJson
const initialState = (Number(itemLocal?.building_id)) ? itemLocal : { company_id: Number(itemLocal?.company_id) || 1, building_id: null }

export const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        setItem: (state, action) => {
            state.company_id = action.payload.company_id
            state.building_id = action.payload.building_id
        },
        clearItem: (state) => {
            state.company_id = null
            state.building_id = null
        },
    },
})

export const { setItem, clearItem } = itemSlice.actions
export default itemSlice.reducer
