import React from 'react'

export default function Item({text, remove, update}) {

    return (
        <div className="item">
            <div className="text">{text}</div>
            <div className="icons">
                <button className="ri-pencil-fill" onClick={update}>Update</button>
                <button className="ri-delete-bin-7-fill" onClick={remove}>Remove</button>
            </div>
        </div>
    )
}