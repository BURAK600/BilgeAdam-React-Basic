import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

import AuthService from '../../config/AuthService'

const initialStateAuth={
    token:'',
    auth: [],
    isAuthenticated: false,
    isLoadingLogin: false,
    isLoadingRegister: false,
};

export const fetchRegister= createAsyncThunk(

    'auth/fetchRegister',

    /**

     * payload -> ilgili methosdumuza dışarıdan girilen bilgilerdir.

     * Eğer sadece bir değer girerseniz payload o değer olacaktır.

     * Ancak, eğer bir dizi yada json object girerseniz bu kullanıma göre göre payload şu
     * şekilde kullanılır -> {username: 'test', password: 'test'}
     * örn: dispatch(fetchRegister({username:'ali'}))
     * datayı method içinde almak için ise -> payload.username olacaktır.
     *
     */
    /**
     *
     * @param {"username": "", "password": "", "email": "", "admincode": ""} payload

     */

    async (payload)=>{

        try {

            const response = await fetch(AuthService.register,{
                method: 'POST',
                headers: {
    
                    'Content-Type': 'application/json'              
    
                  },
                body: JSON.stringify(payload),
            }).then(data => data.json())
    
            .then(data => data)
            .catch(err => console.log(err));    
            return response;
            
        } catch (e) {

            console.log('Hata: ', e);


            
            
        }

       

    }

);

export const fetchLogin= createAsyncThunk(

    'auth/fetchLogin',    

    async (payload)=>{

        console.log(payload);

        const response = await fetch(AuthService.login,{

            method: 'POST',
            // mode: 'no-cors',

            headers: {

                'Content-Type': 'application/json'              

              },        

            body: JSON.stringify(payload),

        }).then(data => data.json())

        .then(data => data)
        .catch(err => console.log(err));    
        return response;

    }

);

const authSlice = createSlice({

    name: 'auth',
    initialState: initialStateAuth,
    /**
     * initial state içindeki değerleri set etmek için kullanılır.
     */
    reducers: {},

    /**
     * 
     * async işlemler için kullanılır.
     */

    extraReducers: (build) => {
        build.addCase(fetchRegister.pending, (state)=>{
            state.isLoadingRegister = true;

        });
        build.addCase(fetchRegister.fulfilled, (state,action) =>{
            state.isLoadingRegister = false;

            state.auth = action.payload
        });

        build.addCase(fetchRegister.rejected,(state)=>{
            state.isLoadingRegister = false;
        });


        build.addCase(fetchLogin.pending,(state)=>{

            state.isLoadingLogin=true;

        });    

        build.addCase(fetchLogin.fulfilled,(state,action)=>{

            console.log('dologin...', action.payload)
            state.isLoadingLogin=false;

            state.token = action.payload.token;

        });

        build.addCase(fetchLogin.rejected,(state)=>{

            state.isLoadingLogin=false;
        });
    }
})

export default authSlice.reducer;