import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        isOpenSearch: false,
    },
    reducers: {
        toggleDisplaySearch(state) {
            state.isOpenSearch = !state.isOpenSearch;
        }
    }
})

export default searchSlice.reducer;

export const { toggleDisplaySearch } = searchSlice.actions;