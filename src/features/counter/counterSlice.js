// sliceという名前はReduxの状態オブジェクトを複数の切り身(slice)に分割することに由来している。
// だからsliceはアプリ内の1つのfeatureのためのReducer logicとactionのコレクションである。
// ブログは投稿のスライスを1つとコメントのスライスを持つだろうが、あなたはそれぞれ異なったロジックを扱うだろう。
// だからそれらはそれぞれ自身のスライスを持つ。
// それで、カウンターアプリのために私たちはスライスをfeatures/counterディレクトリに作る。

// 2、スライスを作るにはcreateSliceをインポートする必要がある。
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 10
}
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    // 3、reducersは全ての異なるアクションに名前を付ける場所である。
    // ここら辺はuseReducerみたいな感じ（らしい）
    reducers: { // reducer = 前のstateとactionを使って次のstateを返す役割
        // だから↓の全てにstateを引数に持っている。
        increment: (state) => {
            state.count += 1;
        },
        // incrementやdecrementを作ったのと同時に自動でtoolkitがactioncreatorを作っているらしい。
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0;
        },
        // payload = state以外に受け取るデータのこと。オブジェクトでも可。
        // 例）input:textの数字や文字列、チェックボックスのvalueなど
        incrementByAmount: (state,action) => {
            state.count += action.payload;
        }
    }
});

// 4、reducerにあるactionを使うためには以下のexportをしなければならない
// まずcounterSlice.actionsにactionをぶち込んで、他のファイルでもactionを使えるようにする。
export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;
// storeがreducerを使うので、全てのreducerをexportしておく。
export default counterSlice.reducer;

// 5、store.jsに行って↑をimportしよう