// 1、とりあえずstoreを作る
import  { configureStore } from"@reduxjs/toolkit";
// 6、counterSlice.jsで作ったreducerをstoreに登録すればこれでApp.ts全体で使うことができるsliceを追加完了
import counterReducer from "../features/counter/counterSlice";
import postsReducer from "../features/posts/postsSlice";
import usersReducer from "../features/users/usersSlice";

// 7、Couterコンポーネントを作ってreducerを使っていこう

// confiugreStoreはオブジェクトを持つ
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsReducer,
        users: usersReducer,
    }
})
