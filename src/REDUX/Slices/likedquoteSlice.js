import { createSlice } from "@reduxjs/toolkit"

const likedquoteSlice = createSlice({
    name: 'likedquote',
    initialState: [],
    reducers: {
        addLiked: (state, action) => {
            state.push(action.payload)
        },
        removeLiked: (state, action) => {
            return state.filter(item => item._id != action.payload)
        }

    }
})
export const { addLiked, removeLiked } = likedquoteSlice.actions

export default likedquoteSlice.reducer