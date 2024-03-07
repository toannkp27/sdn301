import { configureStore } from '@reduxjs/toolkit'
import toastSlice from './features/toast'


const store = configureStore({
    reducer: {
        // loading: loadingSlice,
        toast: toastSlice,
        // userInfo: userSlice,
        // item: itemSlice,
        // myTool: myToolSlice,
        // users: usersSlice,
        // apartments: apartmentsSlice,
        // buildings: buildingSlice,
        // residents: residentSlice,
        // services: serviceSlice,
        // moreItem: moreItemSlice,
        // residentInfo: residentsSlice,
        // cardInfo: cardSlice,
        // debtInfo: debtSlice,
        // bookingInfo: bookingSlice,
        // vehicleInfo: vehicleSlice,
        // paymentInfo: paymentInfoSlice,
    },
})

export default store
export const reduxStage = store.getState()
