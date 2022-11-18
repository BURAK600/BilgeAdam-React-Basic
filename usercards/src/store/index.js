
import {configureStore} from '@reduxjs/toolkit';

import {
    userListSlice,
    projectSlice
} from './features'


const store = configureStore({
    reducer:{
        userList: userListSlice,
        project: projectSlice
    }
});

export default store;
