import { createSlice } from "@reduxjs/toolkit";

export const tweetsSlice = createSlice({
  name: "tweets",
  initialState: {
    list: [
      {
        id: 0,
        author: "TechCrunch",
        image:
          "https://www.smartworld.it/wp-content/uploads/2018/07/Facebook-Mark-Zuckerberg.jpg",
        message:
          "Facebook now lets everyone unsend messages for up to 10 minutes https://techcrunch.com/2019/02/05/facebook-messenger-remove/ … by @JoshConstine",
        likes: ["markZuck", "donnie", "EduardoSaverin", "DMoskovitz"],
        comments: [
          {
            author: "markZuck",
            message: "👏👏👏",
          },
        ],
      },
      {
        id: 1,
        author: "JoshConstine",
        image: "https://pbs.twimg.com/media/D1KNUQ8VAAAEx8L.jpg",
        message:
          "THREAD: After writing hundreds of articles about about apps this year, here’s my wishlist of feature launches like Twitter DM search & Uber “Quiet Ride”. First up, Instagram... 1/",
        likes: ["nick", "steve2"],
        comments: [
          {
            author: "steve2",
            message: "Thanks 🖐",
          },
          {
            author: "JoshConstine",
            message: "No problem",
          },
        ],
      },
    ],
  },
  reducers: {
    addPost: (state, action) => {
      state.list = [...state.list, action.payload];
    },
  },
});

export const { addPost } = tweetsSlice.actions;
export default tweetsSlice.reducer;
