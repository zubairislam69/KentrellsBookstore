import React from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom'
import "./Modal.css"

export default function Modal (props) {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal)
    }



    const {id, text, label, author, price, src, age, isbn, date} = props;


    const [addToCart, setCart] = useState([])

    const handleClick = (props) => {
        setCart([...addToCart,props])
        console.log(addToCart);
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
                    <div className="modal-text">
                        <h1 >Title: {text}</h1>
                        <h3>Genre: {label}</h3>
                        <h3>price: {price}</h3>
                        <h3>age range: {age}</h3>
                        <h5>Date Of Publication: {date}</h5>
                        <h5>ISBN: {isbn}</h5>
                        <button
                            onClick={() => props.handleAddProducts(props)} >
                            Add To Cart
                        </button>

                    </div>
    
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