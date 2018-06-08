
import React from 'react';

const AddComment = function ({ text, votes, id, addComment }) {
    return (
        <div>
            <button onClick={() => addComment(id)}>Add Comment</button>
        </div>
    );
}

export default AddComment;