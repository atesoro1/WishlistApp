import React from 'react'
import WishlistTile from './WishlistTile';

export default function WishlistView({ items, deleteItem }) {

    return (
        <div>
            <div className="wishlist-tile-headers">
                <h2 className='wishlist-title-header'>title</h2>
                <h2>link</h2>
                <h2>comment</h2>
                <h2></h2>
            </div>
            {items.map((item) => {
                console.log(item.itemId);
                return <WishlistTile key={item.itemId} itemId={item.itemId} title={item.title} link={item.link} comment={item.comment} deleteItem={deleteItem}/>
            })}
        </div>
    )
}
