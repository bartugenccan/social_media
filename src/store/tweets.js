import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTweets = createAsyncThunk(
  "tweets/fetchTweets",
  async (thunkAPI) => {
    const res = await axios
      .get("https://fake-tweets-api.herokuapp.com/posts")
      .then((response) => response.data);
    return res;
  }
);

export const tweetsSlice = createSlice({
  name: "tweets",
  initialState: {
    username: "",
    list: [],
  },
  reducers: {
    addPost: (state, action) => {
      state.list = [...state.list, action.payload];
    },
    getUsername: (state, action) => {
      state.username = action.payload;
    },
    likeTweet: (state, action) => {
      action.payload = [...action.payload, state.username];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTweets.pending, (state) => {
        console.log("pending");
      })
      .addCase(fetchTweets.fulfilled, (state, action) => {
        console.log("fulfilled");
        state.list = action.payload;
      })
      .addCase(fetchTweets.rejected, (state) => {
        console.log("rejected");
      });
  },
});

export const { addPost, getUsername, likeTweet } = tweetsSlice.actions;
export default tweetsSlice.reducer;
