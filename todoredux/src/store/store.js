import {configureStore} from '@reduxjs/toolkit';

import {todoSlice, projectSlice} from './features'


const store = configureStore({
    reducer:{
        userList: todoSlice,
        project: projectSlice
    }
});

export default store;
