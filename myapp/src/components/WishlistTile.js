import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointUp } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export default function WishlistTile({ itemId, title, link, comment, deleteItem }) {

    if(link === ''){
        link = 'none'
    }

    if(comment === ''){
        comment = 'none'
    }
    
    return (
        <div>
            <div className="wishlist-tile-container">
                <p className='wishlist-tile-item'>{title}</p>
                <a className='wishlist-tile-item' href={link} target={"_blank"}><FontAwesomeIcon className='wishlist-tile-item-link-icon' icon={ faHandPointUp } /> {link}</a>
                <p className='wishlist-tile-item'>{comment}</p>
                <button className='wishlist-tile-delete' onClick={ () => { deleteItem(itemId)} }><FontAwesomeIcon icon={ faTrashAlt } /></button>
            </div>
        </div>
    )
}
