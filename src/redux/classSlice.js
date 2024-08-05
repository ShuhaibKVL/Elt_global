import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentPage : 1 ,
    bookedOnly : false,
    classes : [], // To store classes data
}

const classSlice = createSlice({
    name : 'classes',
    initialState,
    reducers : {
        setPage : ( state , action) => {
            state.currentPage = action.payload;
        },
        toggleBookedOnly : (state) => {
            state.bookedOnly = !state.bookedOnly;
        },
        setClasses : (state , action) => {
            state.classes = action.payload;
        },
        updateClassById: (state, action) => {
            const { id, updatedFields } = action.payload;
            const classIndex = state.classes.findIndex((classItem) => classItem.id === id);
            if (classIndex !== -1) {
                state.classes[classIndex] = { ...state.classes[classIndex], ...updatedFields };
            }
        },
    }
})

export const { setPage , toggleBookedOnly , setClasses ,updateClassById} = classSlice.actions// export actions to components

export default classSlice.reducer;  // export reducer to store.js