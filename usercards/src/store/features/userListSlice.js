
/**
 * Slice,
 * ilgili sayfa için global olarak kullanılması planlan dataları tutar. abs
 * Ayrıca fetch istekleri ile yapılacak actionları burada işler.
 * 
 */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// import axios from 'axios'

const initialState = {

    data: [],
    loading: false,
    secilen: 0

}

export const getAllUsers = createAsyncThunk(

    'userList/getAllUsers',
    async()=>{

      const result = await fetch('https://randomuser.me/api/?results=10')

        // istek sonucu dönen değeri json formatında çıktılamnak için kullnırız.
        .then(response => response.json())
        .then(data=>data);
        return result;
    }

)

const userListSlice = createSlice({
    /**
     * her slice icin unique bir isim verilmelidir.
     */
    name: 'userList',
    initialState: initialState,

    /**
     * burada, genellikle state içindeki verileri güncellemek icin methodlar oluştururuz. Bunun dışında, fetch isteklerinin aksiyonlarını da düzenleriz.
     */
    reducers: {
        /**
         * setData -> 
         * state->içinde bulunduğumuz slice içindeki tanımlanan state lerdir.
         * action -> methoda cağrım yapılan yerden gönderilen verileri alan kısım bu gönderilen datalar, payload içinde bize ulaşır.
         */

        setData: (state, action) => {

            state.data = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },

        setSecilen: (state, action) => {
            state.secilen = action.payload;
        },
        addSecilen:(state) =>{
            state.secilen += 1;
        },

        removeSecilen:(state) =>{
            state.secilen -= 1;
        }
    },

    extraReducers:(build)=>{
        build.addCase(getAllUsers.pending, (state, action) =>{
            state.loading = true;
        });

        build.addCase(getAllUsers.fulfilled, (state, action) =>{
            state.data = action.payload.results;
            
            state.loading = false;
        });

        build.addCase(getAllUsers.rejected, (state) =>{

            state.loading = false;
        });

    }

});




export const {
    setData,
    setLoading,
    setSecilen,
    addSecilen,
    removeSecilen

} = userListSlice.actions;

export default userListSlice.reducer;