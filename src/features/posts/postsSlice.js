import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
    {
        id: 1,
        title: 'こんにちは',
        content: '初投稿ですよろしくね',
        date: sub(new Date() , { minutes: 10 }).toISOString()
    },
    {
        id: 2,
        title: 'やっほー',
        content: 'こんちくわヨロチコ',
        date: sub(new Date() , { minutes: 5 }).toISOString()
    }
];

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action){
                state.push(action.payload);
                // payload = the form data that we send or we actually dispatch
                // You are famliar enough with react, you know we isn't use mutate state
                // and that's what
            },
            prepare(title, content, userId){
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        userId
                    }
                    // ↑のpayloadはreducerの引数actionから取り出せる
                    // action.payloadって感じで。
                }
            }
        }
    }
})

export const selectAllPosts = (state) => state.posts;
// ↓postAdded関数を作った時に自動的にsliceが自動的にアクションクリエイター（action creator function）を同名で生成する
export const { postAdded } = postsSlice.actions; // ←だからactionsの中にあるpostAddedを代入できる
export default postsSlice.reducer;