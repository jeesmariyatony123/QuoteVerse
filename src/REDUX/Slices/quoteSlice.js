import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchQuotes = createAsyncThunk('quotes/fetchQuotes', async () => {
    const response = await axios.get("https://api.quotable.io/quotes/random?limit=4")
    // console.log(response.data);
    sessionStorage.setItem("allQuotes", JSON.stringify(response.data))
    return response.data
})

const quoteSlice = createSlice({
    name: 'quotes',
    initialState: {
        allQuotes: [],
        error: "",
        loading: false
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchQuotes.fulfilled, (state, action) => {
            state.loading = false
            state.allQuotes = action.payload
            state.error = ""
        })
        builder.addCase(fetchQuotes.pending, (state, action) => {
            state.loading = true
            state.allQuotes = []
            state.error = ""
        })
        builder.addCase(fetchQuotes.rejected, (state, action) => {
            state.loading = false
            state.allQuotes = []
            state.error = "API Call Failed... Please try after some time!!!"
        })
    }
})

export default quoteSlice.reducer