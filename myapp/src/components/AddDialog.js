import React from 'react'
import { useState } from 'react'

export default function AddDialog({ onAdd, personId, openDialog }) {

    console.log(personId);

    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [comment, setComment] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    return (
        <div>
            <div className="form-container">
                <div className='form-inputs'>
                    <h2 className='form-title'>Enter Item</h2>
                    <div className="form-item">
                        <label htmlFor="itemTitleInput">Item Name</label>
                        <input className='inner-form-item' type="text" name='title' id='itemTitleInput' onChange={(value) => {setTitle(document.getElementById('itemTitleInput').value);}}/>
                    </div>
                    <div className="form-item">
                        <label htmlFor="itemLinkInput">Link</label>
                        <input className='inner-form-item' type="text" name='link' id='itemLinkInput'onChange={(value) => {setLink(document.getElementById('itemLinkInput').value);}} />
                    </div>
                    <div className="form-item">
                        <label htmlFor="itemCommentInput">Comments</label>
                        <textarea className='inner-form-item' name='comment' id='itemCommentInput' onChange={(value) => {setComment(document.getElementById('itemCommentInput').value)}} />
                    </div>
                    <div className="buttons">
                        <button className='form-close-button' onClick={ () => {openDialog(false)} }>Cancel</button>
                        <button className='form-button' onClick={ () => { if(title != ''){onAdd(title, link, comment, personId)} else {setErrorMessage('Please enter a title!')}} }>Submit</button>
                    </div>
                    <p>{errorMessage}</p>
                </div>
            </div>
        </div>
    )
}
