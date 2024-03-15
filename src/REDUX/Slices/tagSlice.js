import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTagQuotes = createAsyncThunk('quotes/fetchTagQuotes', async () => {
    const response = await axios.get("https://api.quotable.io/quotes")
    console.log(response.data.results);
    sessionStorage.setItem("allTagQuotes", JSON.stringify(response.data.results))
    return response.data.results
})

const tagSlice = createSlice({
    name: 'tag',
    initialState: {
        allTagQuotes: [],
        error: "",
        loading: false
    },
    reducers: {

     
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTagQuotes.fulfilled, (state, action) => {
            state.loading = false
            state.allTagQuotes = action.payload
            state.error = ""
        })
        builder.addCase(fetchTagQuotes.pending, (state, action) => {
            state.loading = true
            state.allTagQuotes = []
            state.error = ""
        })
        builder.addCase(fetchTagQuotes.rejected, (state, action) => {
            state.loading = false
            state.allTagQuotes = []
            state.error = "API Call Failed... Please try after some time!!!"
        })
    }
})

export default tagSlice.reducer