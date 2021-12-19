import React from 'react';
import WishlistView from './WishlistView';
import { useState } from 'react';
import AddDialog from './AddDialog';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

export default function Wishlist() {

    const [items, setItems] = useState([]);
    const [person, setPerson] = useState("Select a member");
    const [add, setAdd] = useState(false);

    let people = [
        {
            "name": "Bill",
            "id": 1,
            "items": []
        },
        {
            "name": "Jingle",
            "id": 2,
            "items": []
        },
        {
            "name": "Cj",
            "id": 3,
            "items": []
        },
        {
            "name": "Brielle",
            "id": 4,
            "items": []
        },
        {
            "name": "Adrian",
            "id": 5,
            "items": []
        },

    ]

    function getPersonItems(id){
        for(let x = 0; x < people.length; x++){
            if(people[x].id === id){
                setPerson(people[x].name);
            }
        }
        fetch('http://localhost:4000/people/items/',
            {
                method: 'GET',
                headers: {person: id},
            }
        ).then(response => response.json())
        .then(data => {
            let userId = data['userId'];
            let userItems = data['userItems'];
            console.log(userItems);
            for(let x = 0; x < people.length; x++){
                if(people[x].id === userId){
                    for(let y = 0; y < userItems.length; y++){
                        people[x].items.push(
                            {
                                itemId: userItems[y]['itemId'],
                                title: userItems[y]['title'],
                                link: userItems[y]['link'],
                                comment: userItems[y]['comment'],
                            }
                        );
                    }
                }

            }
        }).then(() => {
            for(let x = 0; x < people.length; x++){
                if(people[x].id === id){
                    setItems(people[x].items);
                }
            }
        });
        
    }

    function getPerson(){
        for(let x = 0; x < people.length; x++){
            if(person === people[x].name){
                return people[x].id;
            }
        }
        return -1;
    }

    function insertItem(title, link, comment, personId){
        const temp = {
            personId: personId,
            title: title,
            link: link,
            comment: comment,
        }
        fetch('http://localhost:4000/people/items/insert/',
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify(temp),
            }
        ).then(response => response.json())
        .then(data => {
            console.log(data);
            setAdd(false);
            getPersonItems(personId);
        })
        
    }

    function deleteItem(itemId){

        const temp = {
            itemId: itemId
        }

        fetch('http://localhost:4000/people/items/delete/',
            {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify(temp),
            }
        ).then(response => response.json())
        .then(data => {
            console.log(data);
            getPersonItems(getPerson());
        })
    }

    function openAdd(open){
        setAdd(open);
    }


    return (
        <div className='yes'>
            <div className="wishlist-container">
                <div className="wishlist-top-section">
                    <ul className='wishlist-people'>
                        {people.map((person) => {
                            return <button className='wishlist-person' onClick={() => {getPersonItems(person.id); setAdd(false);}} key={person.id}><span>{person.name}</span></button>
                        })}
                    </ul>
                    <button className='wishlist-add' onClick={() => {if(person != 'Select a member'){setAdd(true)}}}><FontAwesomeIcon size='2x' icon={ faPlusCircle } /></button>
                </div>
                <h1 className='person-header'>{person}</h1>
                <WishlistView items={items} deleteItem={deleteItem}/>
            </div>
            <div className="add-dialog">
                {add ? <AddDialog onAdd={ insertItem } personId={ getPerson() } openDialog={ openAdd }/> : ""}
            </div>
        </div>
    )
}
