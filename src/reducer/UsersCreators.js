import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchAllUsers = createAsyncThunk('users/fetchAll', async (payload, thunkApi) => {
    try{
        const responce = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await responce.json(); 

        return users
    }catch(err) {
        return thunkApi.rejectWithValue(err.message)
    }
})

export default fetchAllUsers;