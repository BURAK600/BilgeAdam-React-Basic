import {createSlice} from '@reduxjs/toolkit'



const initialState = {

    data: [],


}

const projectSlice = createSlice({
    name: 'project',
    initialState: initialState,
    reducers: {}

});

export default projectSlice.reducer;

