import React from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom'
import "./Modal.css"

export default function Modal (props) {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal)
    }

    if (modal) {
        document.body.classList.add('active-modal')
    } else{
        document.body.classList.remove('active-modal')

    }
    return (
        <>
        
        <button 
        className="btn-modal"
        onClick={toggleModal}>
            Learn More
        </button>
        {modal && ( //if modal is true return the modal using short circuit operator
            ReactDOM.createPortal(
                <React.Fragment>
            <div className="modal">
            <div className="overlay">
                <div className="modal-content">
                    <img 
                    src={props.src}
                    alt="" 
                    className="modal-image" 
                    />
                    <h1>Title: {props.text}</h1>
                    <h3>Genre: {props.genre}</h3>
                    <h3>price: {props.price}</h3>
                    <h3>age range: {props.age}</h3>
                    <h5>Date Of Publication: {props.date}</h5>
                    <h5>ISBN: {props.isbn}</h5>

                    <button className="close-modal"
                    onClick={toggleModal}
                    >Close</button>
                </div>
            </div>
        </div>
        </React.Fragment>, document.body

        ))}
        

        </>
    )
}