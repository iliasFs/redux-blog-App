import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I've heard good things.",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },

  {
    id: "2",
    title: "Slices",
    content:
      "In Redux, a slice refers to a portion of the global state managed by the Redux store.",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];

const postsSlice = createSlice({
  //createSlice automatically generates an action creator function with the same name.
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload); //inside of the createSlice we can use.push it doesn't mutate the array.
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
            reactions: {
                thumbsUp: 0,
                wow: 0,
                heart: 0,
                rocket: 0,
                coffee: 0
            }
          },
        };
      },
    },
  },
});

//what if the structure of our state changes in the future?
//thats why we create a selector in the slice file and export it.
//so, if the SHAPE of the state changes (not the state because this is covered with the selector in the component. if the state changes it will rerender that component.here we talk about the shape of the state)
//by creating that we dont need later to change each component individually. we can change it once in the slide.

export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
