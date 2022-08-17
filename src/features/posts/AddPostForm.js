import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit"; // generate a random id like uuid.
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers);

  const dispatch = useDispatch();
  const onTitleChanged = (e) => {
    setTitle(e.target.value);
  };
  const onContentChanged = (e) => {
    setContent(e.target.value);
  };
  const onAuthorChanged = (e) => {
    setUserId(e.target.value);
  };

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const usersOptions = users.map((user) => (
      <option key={user.id} value={user.id}>
      {user.name}
    </option>
    )
  );

  // we're using redux doesn't mean we won't use state in some components because this is a temporary state.
  // So we don't need to send those to the global state.
  // They just for this component.
  // So we only want to send things to the global state that other components would possibly use throughout the application.

  // Reduxを使うからと言ってuseStateを使わないわけではない。他のコンポーネントで使う可能性のあるstateだけをReduxでglobal stateして送ろうぜ。

  return (
    <section>
      <h2>新しい投稿を追加する</h2>
      <form>
        <label htmlFor="postTitle">タイトル：</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postAuthor">投稿者：</label>
        <select type="text" id="postAuthor" name="postAuthor" value={userId} onChange={onAuthorChanged}>
            <option value=""></option>
            {usersOptions}
        </select>
        <label htmlFor="postContent">内容：</label>
        <textarea
          name="postContent"
          id="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          保存
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
