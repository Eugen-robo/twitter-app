import React from 'react';

import './post-add-from.css';

const PostAddForm = () => {
    return (
        <form className="botton-panel d-flex">
            <input
                type="text"
                placeholder="О чем Вы думаете сейчас?"
                className="form-control new-post-label"
            />
            <button
                type="submit"
                className="btn btn-outline-secondary">
                Добавить</button>
        </form>
    )
}


export default PostAddForm;