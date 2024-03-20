import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  is_authenticated : false,
  token : {
    acces_token : null ,
    refresh_token : null
  },
  user : null 
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state , action) => {
      
      state.is_authenticated = true 
      state.token = action.payload.token
      state.user = action.payload.user
    },
    logout: (state) => {
      state = initialState
    },
    refeach_token :(state ,action)=>{
      state.token.acces_token = action.payload.access
      state.token.refresh_token = action.payload.refresh
    }
  },
})

export const { login , logout ,refeach_token} = authSlice.actions

export default authSlice.reducer