import React from 'react';
const Comment = function ({ text, votes, id, thumbUpComment, thumbDownComment, removeComment }) {
    return (
        <ul>
            <li>
                {text} <span>votes: {votes}</span>
                <button onClick={() => thumbUpComment(id)}>Thumb up</button>
                <button onClick={() => thumbDownComment(id)}>Thumb down</button>
                <button onClick={() => removeComment(id)}>remove</button>
            </li>
        </ul>
    );
}

export default Comment;