import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
const initialState = {
    isLoading: false,
    check_otp: false,
    token: null,
    register_status: 0,
    user: null,
    province: [],
    users_ranking: [],
    last_page_user_ranking: 0,
    friends: [],
    friends_request: [],
    total_friend_request: 0,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      loading(state,action){
        state.isLoading = action.payload
      }
    },
    extraReducers: {
      
  }
})
export const {loading} = authSlice.actions;
export const selectToken = (state) => state.auth.token;
const authReducer = authSlice.reducer;
export default authReducer;